// Dynamic publication rendering
function renderPublications(page = 1) {
    const container = document.getElementById('publications-container');
    if (!container) return;

    const startIdx = (page - 1) * PUBLICATIONS_PER_PAGE;
    const endIdx = startIdx + PUBLICATIONS_PER_PAGE;
    const pagePublications = publicationsData.slice(startIdx, endIdx);

    container.innerHTML = '';

    pagePublications.forEach(pub => {
        const pubDiv = document.createElement('div');
        pubDiv.className = 'publication';

        // Format authors with bold for Stephen James Krol
        const formattedAuthors = pub.authors.map(author => 
            author === "Stephen James Krol" ? `<strong>${author}</strong>` : author
        ).join(', ');

        pubDiv.innerHTML = `
            <h3>
                <a href="${pub.url}" target="_blank">${pub.title}</a>
            </h3>
            <p class="authors">${formattedAuthors}</p>
            <p class="venue">${pub.venue}</p>
            <div class="abstract">
                <p>${pub.abstract}</p>
            </div>
        `;

        container.appendChild(pubDiv);
    });

    // Add click handlers for expand/collapse
    attachPublicationHandlers();
}

function attachPublicationHandlers() {
    document.querySelectorAll('.publication').forEach(pub => {
        pub.addEventListener('click', function(e) {
            if (e.target.tagName.toLowerCase() === 'a') return; // allow links

            const abstract = this.querySelector('.abstract');
            if (!abstract) return;

            if (abstract.classList.contains('show')) {
                // collapse
                abstract.style.height = abstract.scrollHeight + 'px'; // start from current height
                requestAnimationFrame(() => {
                    abstract.style.height = '0';
                });
                abstract.classList.remove('show');
            } else {
                // expand
                abstract.classList.add('show');
                const height = abstract.scrollHeight;
                abstract.style.height = '0';
                requestAnimationFrame(() => {
                    abstract.style.height = height + 'px';
                });

                // reset height to auto after animation for natural flow
                abstract.addEventListener('transitionend', function handler() {
                    if (abstract.classList.contains('show')) {
                        abstract.style.height = 'auto';
                    }
                    abstract.removeEventListener('transitionend', handler);
                });
            }
        });
    });
}

/**
 * Generate pagination dynamically
 * @param {string} containerId - ID of the container
 * @param {number} currentPage - current page number (1-based)
 * @param {number} totalPages - total number of pages
 */
function createPagination(containerId, currentPage, totalPages) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const buildPageUrl = (pageNumber) => `./publications.html?page=${pageNumber}`;

    const ul = document.createElement('ul');

    // Prev link
    if (currentPage > 1) {
        const prevLi = document.createElement('li');
        const prevA = document.createElement('a');
        prevA.href = buildPageUrl(currentPage - 1);
        prevA.textContent = '‹ Prev';
        prevLi.appendChild(prevA);
        ul.appendChild(prevLi);
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = buildPageUrl(i);
        a.textContent = i;
        if (i === currentPage) {
            a.classList.add('active');
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Next link
    if (currentPage < totalPages) {
        const nextLi = document.createElement('li');
        const nextA = document.createElement('a');
        nextA.href = buildPageUrl(currentPage + 1);
        nextA.textContent = 'Next ›';
        nextLi.appendChild(nextA);
        ul.appendChild(nextLi);
    }

    container.appendChild(ul);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get current page from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;
    
    // Calculate total pages
    const totalPages = Math.ceil(publicationsData.length / PUBLICATIONS_PER_PAGE);
    
    // Render publications for current page
    renderPublications(currentPage);
    
    // Create pagination
    createPagination('pagination', currentPage, totalPages);
});
