let saveEl = document.getElementById("save-el")
let sumEl=document.getElementById("sum-el")
let countEl = document.getElementById("count-el")
let count = 0
let sum=0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    sum = sum + count
    sumEl.textContent= "The total entries are " + sum
    countEl.textContent = 0
    count = 0

}
