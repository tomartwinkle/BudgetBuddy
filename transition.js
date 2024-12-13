document.addEventListener('DOMContentLoaded', () => {
    const featureBoxes = document.querySelectorAll('.f1, .f2, .f3, .f4, .f5, .f6');

    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });
});