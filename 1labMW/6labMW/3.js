document.addEventListener('DOMContentLoaded', () => {
    const tree = document.querySelectorAll('.tree li');
    tree.forEach(li => {
        const childUl = li.querySelector('ul');
        if (childUl) {
            // свернуто по умолчанию
            childUl.style.display = 'none';
            li.classList.add('collapsible');
            li.addEventListener('click', (e) => {
                // клик по элементу: переключаем видимость дочернего списка
                if (e.target === li || e.target === li.firstChild || e.target.nodeType === 3) {
                    childUl.style.display = (childUl.style.display === 'none') ? '' : 'none';
                }
                e.stopPropagation();
            });
            li.addEventListener('mouseover', () => li.classList.add('hovered'));
            li.addEventListener('mouseout', () => li.classList.remove('hovered'));
        } else {
            li.addEventListener('mouseover', () => li.classList.add('hovered'));
            li.addEventListener('mouseout', () => li.classList.remove('hovered'));
        }
    });
});
