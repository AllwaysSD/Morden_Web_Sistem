document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#palette td');
    cells.forEach(td => {
        td.addEventListener('click', () => {
            const g = td.getAttribute('data-gradient') || '';
            document.body.style.backgroundImage = g;
        });
    });
});
