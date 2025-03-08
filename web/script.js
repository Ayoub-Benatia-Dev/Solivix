document.addEventListener('DOMContentLoaded', function() {
    console.log('التطبيق جاهز للاستخدام!');
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const posts = document.querySelectorAll('.post-card');
        
        posts.forEach(post => {
            const text = post.textContent.toLowerCase();
            post.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
