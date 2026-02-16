const box = document.getElementById('expandable');

const originalWidth = box.offsetWidth;
const originalHeight = box.offsetHeight;

box.addEventListener('mouseover', () => {
    box.style.width = originalWidth * 1.5 + 'px';
    box.style.height = originalHeight * 1.5 + 'px';
    box.style.backgroundColor = 'tomato'; // Optional color change
});

box.addEventListener('mouseout', () => {
    box.style.width = originalWidth + 'px';
    box.style.height = originalHeight + 'px';
    box.style.backgroundColor = 'steelblue';
});