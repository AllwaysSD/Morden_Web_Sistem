document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let topZ = 1;
    boxes.forEach(b => {
        b.addEventListener('click', () => {
            topZ += 1;
            b.style.zIndex = topZ;
        });
    });
});
