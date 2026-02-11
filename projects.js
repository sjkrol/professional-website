document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.project-gallery');
    let lightbox = document.querySelector('.lightbox');

    const ensureLightbox = () => {
        if (lightbox) return lightbox;

        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.hidden = true;
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" type="button" aria-label="Close">×</button>
                <img class="lightbox-image" alt="Expanded gallery image">
                <p class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(lightbox);

        const close = () => {
            lightbox.hidden = true;
        };

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                close();
            }
        });

        lightbox.querySelector('.lightbox-close').addEventListener('click', close);
        document.addEventListener('keydown', (event) => {
            if (!lightbox.hidden && event.key === 'Escape') {
                close();
            }
        });

        return lightbox;
    };

    galleries.forEach((gallery) => {
        const dataImages = gallery.dataset.images;
        const dataAlts = gallery.dataset.alts;

        const images = dataImages
            ? dataImages.split('|').map((src) => src.trim()).filter(Boolean)
            : Array.from(gallery.querySelectorAll('img')).map((img) => img.src);

        const alts = dataAlts
            ? dataAlts.split('|').map((alt) => alt.trim())
            : Array.from(gallery.querySelectorAll('img')).map((img) => img.alt || 'Gallery image');

        if (images.length === 0) return;

        const visibleCount = 3;
        const track = document.createElement('div');
        track.className = 'project-gallery-track';
        gallery.innerHTML = '';
        gallery.appendChild(track);

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alts[index] || 'Gallery image';
            img.addEventListener('click', () => {
                const overlay = ensureLightbox();
                const overlayImage = overlay.querySelector('.lightbox-image');
                const overlayCaption = overlay.querySelector('.lightbox-caption');
                overlayImage.src = src;
                overlayImage.alt = img.alt || 'Expanded gallery image';
                overlayCaption.textContent = img.alt || '';
                overlay.hidden = false;
            });
            track.appendChild(img);
        });

        let currentIndex = 0;
        const maxIndex = Math.max(images.length - visibleCount, 0);
        const interval = Number.parseInt(gallery.dataset.interval || '4000', 10);

        const updatePosition = () => {
            const offsetPercent = (100 / visibleCount) * currentIndex;
            track.style.transform = `translateX(-${offsetPercent}%)`;
        };

        const controls = document.createElement('div');
        controls.className = 'project-gallery-controls';

        const prevButton = document.createElement('button');
        prevButton.type = 'button';
        prevButton.className = 'project-gallery-button';
        prevButton.setAttribute('aria-label', 'Previous images');
        prevButton.textContent = '‹';

        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.className = 'project-gallery-button';
        nextButton.setAttribute('aria-label', 'Next images');
        nextButton.textContent = '›';

        controls.appendChild(prevButton);
        controls.appendChild(nextButton);
        gallery.appendChild(controls);

        let timerId;

        const scheduleAutoAdvance = () => {
            if (maxIndex === 0) return;
            if (timerId) {
                clearInterval(timerId);
            }
            timerId = setInterval(() => {
                const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
                goToIndex(nextIndex, false);
            }, interval);
        };

        const goToIndex = (index, resetTimer = true) => {
            if (maxIndex === 0) return;
            currentIndex = Math.min(Math.max(index, 0), maxIndex);
            updatePosition();
            if (resetTimer) {
                scheduleAutoAdvance();
            }
        };

        prevButton.addEventListener('click', () => {
            const nextIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
            goToIndex(nextIndex);
        });

        nextButton.addEventListener('click', () => {
            const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            goToIndex(nextIndex);
        });

        updatePosition();

        scheduleAutoAdvance();
    });
});
