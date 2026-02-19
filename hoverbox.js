document.querySelectorAll('.expandable').forEach(box => {
  const originalWidth = box.offsetWidth;
  const originalHeight = box.offsetHeight;

  box.addEventListener('mouseover', () => {
    box.style.width = originalWidth * 1.2 + 'px';
    box.style.height = originalHeight * 1.2 + 'px';
    box.style.backgroundColor = 'tomato';
  });

  box.addEventListener('mouseout', () => {
    box.style.width = originalWidth + 'px';
    box.style.height = originalHeight + 'px';
    box.style.backgroundColor = '';
  });
});