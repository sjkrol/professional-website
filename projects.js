document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.project-gallery');
    let lightbox = document.querySelector('.lightbox');
    let currentLightboxImages = [];
    let currentLightboxIndex = 0;

    const ensureLightbox = () => {
        if (lightbox) return lightbox;

        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.hidden = true;
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" type="button" aria-label="Close">×</button>
                <button class="lightbox-prev" type="button" aria-label="Previous image">‹</button>
                <button class="lightbox-next" type="button" aria-label="Next image">›</button>
                <img class="lightbox-image" alt="Expanded gallery image">
                <p class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(lightbox);

        const close = () => {
            lightbox.hidden = true;
            currentLightboxImages = [];
            currentLightboxIndex = 0;
        };

        const updateLightboxImage = (index) => {
            if (currentLightboxImages.length === 0) return;
            
            currentLightboxIndex = index;
            const overlayImage = lightbox.querySelector('.lightbox-image');
            const overlayCaption = lightbox.querySelector('.lightbox-caption');
            const imageData = currentLightboxImages[currentLightboxIndex];
            
            overlayImage.src = imageData.src;
            overlayImage.alt = imageData.alt;
            overlayCaption.textContent = imageData.alt || '';

            // Show/hide navigation arrows based on number of images
            const prevBtn = lightbox.querySelector('.lightbox-prev');
            const nextBtn = lightbox.querySelector('.lightbox-next');
            if (currentLightboxImages.length > 1) {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            } else {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
        };

        const goToPrev = () => {
            const newIndex = currentLightboxIndex === 0 
                ? currentLightboxImages.length - 1 
                : currentLightboxIndex - 1;
            updateLightboxImage(newIndex);
        };

        const goToNext = () => {
            const newIndex = currentLightboxIndex === currentLightboxImages.length - 1 
                ? 0 
                : currentLightboxIndex + 1;
            updateLightboxImage(newIndex);
        };

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                close();
            }
        });

        lightbox.querySelector('.lightbox-close').addEventListener('click', close);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', goToPrev);
        lightbox.querySelector('.lightbox-next').addEventListener('click', goToNext);

        document.addEventListener('keydown', (event) => {
            if (!lightbox.hidden) {
                if (event.key === 'Escape') {
                    close();
                } else if (event.key === 'ArrowLeft') {
                    goToPrev();
                } else if (event.key === 'ArrowRight') {
                    goToNext();
                }
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

        const getVisibleCount = () => {
            return window.innerWidth <= 768 ? 1 : 3;
        };

        let visibleCount = getVisibleCount();
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
                currentLightboxImages = images.map((imgSrc, idx) => ({
                    src: imgSrc,
                    alt: alts[idx] || 'Gallery image'
                }));
                currentLightboxIndex = index;
                
                const overlayImage = overlay.querySelector('.lightbox-image');
                const overlayCaption = overlay.querySelector('.lightbox-caption');
                overlayImage.src = src;
                overlayImage.alt = img.alt || 'Expanded gallery image';
                overlayCaption.textContent = img.alt || '';
                
                // Show/hide navigation arrows based on number of images
                const prevBtn = overlay.querySelector('.lightbox-prev');
                const nextBtn = overlay.querySelector('.lightbox-next');
                if (currentLightboxImages.length > 1) {
                    prevBtn.style.display = 'flex';
                    nextBtn.style.display = 'flex';
                } else {
                    prevBtn.style.display = 'none';
                    nextBtn.style.display = 'none';
                }
                
                overlay.hidden = false;
            });
            track.appendChild(img);
        });

        let currentIndex = 0;
        let maxIndex = Math.max(images.length - visibleCount, 0);
        const interval = Number.parseInt(gallery.dataset.interval || '4000', 10);
        const gap = 10; // matches --gallery-gap in CSS

        const updatePosition = () => {
            const imageWidth = track.offsetWidth / visibleCount;
            const offsetPixels = (imageWidth + gap) * currentIndex;
            track.style.transform = `translateX(-${offsetPixels}px)`;
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

        // Handle window resize
        window.addEventListener('resize', () => {
            const newVisibleCount = getVisibleCount();
            if (newVisibleCount !== visibleCount) {
                visibleCount = newVisibleCount;
                currentIndex = 0;
                maxIndex = Math.max(images.length - visibleCount, 0);
                updatePosition();
                scheduleAutoAdvance();
            }
        });
    });
});
