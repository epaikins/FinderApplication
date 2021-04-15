let age = document.querySelector('#age');
let date = document.querySelector('#date');
let findYear = document.querySelector('#findYear');
let findAge = document.querySelector('#findAge');
let findYearOut = document.querySelector('#findYearOut');
let findAgeOut = document.querySelector('#findAgeOut');
let mainYear = document.querySelector('#mainYear');
let mainAge = document.querySelector('#mainAge');
let findYearContainer = document.querySelector('.findYear');
let findAgeContainer = document.querySelector('.findAge');

function calculateYear(age) {
    if (age.value === '' || age.value <= 0 || isNaN(age.value)) {
        alert("Please enter a correct age")
    } else {
        let date = new Date().getFullYear();
        let birthYear = date - age.value;
        return `Your date of birth is ${birthYear}`;
    }
};


function calculateAge(year) {
    let date = new Date().getFullYear();
    let inputDate = new Date(year.value)
    console.log(inputDate);
    let birthAge = date - inputDate.getFullYear();
    return `Your age is ${birthAge}`;
};


findYear.addEventListener('click', () => {
    if (calculateYear(age) === undefined) {
        findYearOut.innerText = '';
    } else {
        findYearOut.innerText = calculateYear(age);
    }
});

findAge.addEventListener('click', () => {
    findAgeOut.innerText = calculateAge(date);
});

mainYear.addEventListener('click', () => {
    findYearContainer.style.display = 'block'
    findAgeContainer.style.display = 'none'
});

mainAge.addEventListener('click', () => {
    findYearContainer.style.display = 'none'
    findAgeContainer.style.display = 'block'
});