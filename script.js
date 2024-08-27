document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebarBox = document.querySelector('.sidebar_box');

    hamburger.addEventListener('click', function() {
        sidebarBox.classList.toggle('active');
    });

    const sidebar = document.getElementById('sidebar');
    const headings = document.querySelectorAll('#content h2[id]');

    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        sidebar.appendChild(link);
    });
});