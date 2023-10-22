const controls = document.querySelectorAll('.control');
const images = document.querySelectorAll(".item");

let currentItem = 0;
const maxItems = images.length;

controls.forEach(control => {
    control.addEventListener('click', () => {

        const isLeft = control.classList.contains('arrow-left');

        if (isLeft)
            currentItem -= 1
        else
            currentItem += 1

        if (currentItem >= maxItems) {
            currentItem = 0
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        images.forEach(item => {
            item.classList.remove('current-item')
        });

        images[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"

        });
        images[currentItem].classList.add('current-item');

        console.log('Clicando', isLeft, currentItem)
    })
});
