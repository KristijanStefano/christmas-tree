const day = new Date().getDate();

const stars = document.querySelectorAll('.star')
const starsBox = document.querySelector('.star-box')

starsBox.addEventListener('mouseenter', () => {
    stars.forEach(s => {
        const starId = +s.dataset.id;

        if (starId <= day) {
            s.classList.add('shine');
        } else {
            s.classList.add('noShine');
        }
    });
});

starsBox.addEventListener('mouseleave', () => {
    stars.forEach(s => {
        s.classList.remove('shine', 'noShine');
    });
});
