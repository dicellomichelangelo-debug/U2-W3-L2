const timerDisplay = document.getElementById('timerDisplay')
const tempo= sessionStorage.getItem('tempo') 
let current = tempo || 0

const numDisplay = function(){
    timerDisplay.innerText = current
}
numDisplay()
setInterval( function(){
    current++
    numDisplay()
    sessionStorage.setItem('tempo', current)
}, 1000)