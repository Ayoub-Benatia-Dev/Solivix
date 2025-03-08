document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const tutorials = document.querySelectorAll('.tutorial-card');
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.style.cssText = `
        text-align: center;
        padding: 2rem;
        color: rgba(255,255,255,0.7);
        width: 100%;
    `;

    function searchTutorials() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;

        tutorials.forEach(tutorial => {
            const title = tutorial.querySelector('.tutorial-title').textContent.toLowerCase();
            const description = tutorial.querySelector('.tutorial-description').textContent.toLowerCase();
            const tags = Array.from(tutorial.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) ||
                          tags.some(tag => tag.includes(searchTerm));

            if (matches) {
                tutorial.style.display = '';
                tutorial.style.opacity = '1';
                tutorial.style.transform = 'translateY(0)';
                hasResults = true;
            } else {
                tutorial.style.display = 'none';
                tutorial.style.opacity = '0';
                tutorial.style.transform = 'translateY(-10px)';
            }
        });

        // عرض رسالة عند عدم وجود نتائج
        if (!hasResults) {
            noResults.textContent = 'لا توجد نتائج للبحث';
            if (!document.querySelector('.no-results')) {
                document.querySelector('.tutorials-container').appendChild(noResults);
            }
        } else {
            if (document.querySelector('.no-results')) {
                document.querySelector('.no-results').remove();
            }
        }
    }

    // البحث المباشر مع الكتابة
    searchInput.addEventListener('input', searchTutorials);

    // البحث عند الضغط على Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchTutorials();
        }
    });
});
