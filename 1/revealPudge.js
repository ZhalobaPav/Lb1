document.addEventListener('DOMContentLoaded', function () {
    const authorInfo = document.getElementById('author-info');
    const logo = document.querySelector('h1');
    authorInfo.style.display = 'none';

    logo.addEventListener('mouseover', function () {
        authorInfo.style.display = 'block';
    });

    logo.addEventListener('mouseout', function () {
        authorInfo.style.display = 'none';
    });
});