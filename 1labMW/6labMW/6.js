document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('#books li'));
    let lastIndex = null;

    items.forEach((li, idx) => {
        li.addEventListener('click', (e) => {
            const ctrl = e.ctrlKey || e.metaKey;
            const shift = e.shiftKey;

            if (shift && lastIndex !== null) {
                const start = Math.min(lastIndex, idx);
                const end = Math.max(lastIndex, idx);
                for (let i = start; i <= end; i++) {
                    items[i].classList.add('selected');
                }
            } else if (ctrl) {
                li.classList.toggle('selected');
                lastIndex = idx;
            } else {
                // обычный клик — переключить только этот элемент
                if (li.classList.contains('selected')) {
                    li.classList.remove('selected');
                } else {
                    // убрать выделение у всех и выделить текущий
                    items.forEach(x => x.classList.remove('selected'));
                    li.classList.add('selected');
                }
                lastIndex = idx;
            }
        });
    });
});
