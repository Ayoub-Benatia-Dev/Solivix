document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const notifications = document.querySelectorAll('.notification-item');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        notifications.forEach(notification => {
            const title = notification.querySelector('.notification-title').textContent.toLowerCase();
            const text = notification.querySelector('.notification-text').textContent.toLowerCase();
            
            const matches = title.includes(searchTerm) || text.includes(searchTerm);
            notification.style.display = matches ? 'flex' : 'none';
        });
    });
});
