const nameArea= document.getElementById('name')
const save = document.getElementById('save')
const remove = document.getElementById('remove')
const nameDisplay = document.getElementById('nameDisplay')

const saveN = function(){
    const fieldValue = nameArea.value
    localStorage.setItem('namePerson', fieldValue)
    nameDisplay.innerText= fieldValue
    nameArea.value = ''
}

const removeN = function(){
    const nameArea= document.getElementById('name')
    nameArea.value = ''
    nameDisplay.innerText = 'Caricamento...' 
    localStorage.removeItem('namePerson')
}