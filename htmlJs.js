
//2 Hours 55 minutes
let count = 0;

const countDisplay = document.getElementById('count')
countDisplay.innerText = count;

function incrementCount() {
    count += 1;
    countDisplay.innerText = count;
}

function decrementCount() {
    count -= 1;
    countDisplay.innerText = count;
}

function clearCount() {
    count = 0
    countDisplay.innerText = count
}
