

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

/**
 * Generate pagination dynamically
 * @param {string} containerId - ID of the container
 * @param {number} currentPage - current page number (1-based)
 * @param {number} totalPages - total number of pages
 * @param {string} urlPattern - pattern for page URLs, e.g., "page{page}.html"
 */
function createPagination(containerId, currentPage, totalPages, urlPattern) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const ul = document.createElement('ul');

    // Prev link
    const prevLi = document.createElement('li');
    const prevLink = document.createElement('a');
    prevLink.href = currentPage > 1 ? urlPattern.replace('{page}', currentPage - 1) : '#';
    prevLink.textContent = '« Prev';
    if (currentPage === 1) prevLink.style.pointerEvents = 'none';
    prevLi.appendChild(prevLink);
    ul.appendChild(prevLi);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = urlPattern.replace('{page}', i);
        a.textContent = i;
        if (i === currentPage) a.classList.add('active');
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Next link
    const nextLi = document.createElement('li');
    const nextLink = document.createElement('a');
    nextLink.href = currentPage < totalPages ? urlPattern.replace('{page}', currentPage + 1) : '#';
    nextLink.textContent = 'Next »';
    if (currentPage === totalPages) nextLink.style.pointerEvents = 'none';
    nextLi.appendChild(nextLink);
    ul.appendChild(nextLi);

    container.innerHTML = '';
    container.appendChild(ul);
}