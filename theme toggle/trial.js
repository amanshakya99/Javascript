let darkMode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('myButton');
const body = document.body;

const enableDarkMode = () => {
    body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);

}

if(darkMode === 'active'){
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode');
    darkMode !== 'active' ? enableDarkMode() : disableDarkMode()
});


// Counter Code
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

// Hover Effect Code
const card = document.querySelectorAll('.card-content');

card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
});

card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
});

});
console.log(card);


