document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('example-table');
    table.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'TD') {
            const row = target.parentNode;
            row.style.backgroundColor = '#d1e7dd';
        }
    });
});