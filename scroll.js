// Declaration de variable

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const tringgerBotton = window.innerHeight / 5 * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

         if (boxTop < tringgerBotton) {
        box.classList.add('show');
     }else {
        box.classList.remove('show');
     }
    })
}