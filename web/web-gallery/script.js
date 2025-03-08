document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const cards = document.querySelectorAll('.download-card');
    let noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results';
    noResultsMessage.style.cssText = `
        text-align: center;
        padding: 2rem;
        color: rgba(255,255,255,0.7);
        width: 100%;
        grid-column: 1/-1;
    `;

    function searchTemplates() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let foundResults = false;

        cards.forEach(card => {
            const title = card.querySelector('.template-title').textContent.toLowerCase();
            const description = card.querySelector('.template-info').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matchFound = title.includes(searchTerm) || 
                             description.includes(searchTerm) ||
                             tags.some(tag => tag.includes(searchTerm));

            if (matchFound) {
                card.style.display = '';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                foundResults = true;
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
            }
        });

        // إظهار رسالة عند عدم وجود نتائج
        if (!foundResults) {
            noResultsMessage.textContent = 'لا توجد نتائج تطابق بحثك';
            if (!document.querySelector('.no-results')) {
                document.querySelector('.gallery-grid').appendChild(noResultsMessage);
            }
        } else {
            if (document.querySelector('.no-results')) {
                document.querySelector('.no-results').remove();
            }
        }
    }

    // البحث المباشر مع الكتابة
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(searchTemplates, 300); // تأخير البحث لتحسين الأداء
    });
});
