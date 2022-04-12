'use strict'

const submitButton = document.querySelector('.button-block')
const nameInput = document.getElementById('form-text__name')
const secnameInput = document.getElementById('form-text__secname')
const ageInput = document.getElementById('form-text__age')
const selectIput = document.querySelector('select')
const orgInput = document.getElementById('form-text__role')
const runkInput = document.getElementById('form-text__runk')
const dateInput = document.getElementById('form-text__date')
const childInput = document.getElementById('form-text__child')
const form = document.querySelector('form')

const array = []

const childr = {
    name: "",
    surname: "",
    age: 0,
    select: "",
    role: "",
    runk: "",
    date: "",
    child: ""
}

const getChildren = () => {
    if (childInput.checked) {
        return 'Есть'
    } else {
        return 'Нет'
    }
}



form.addEventListener("submit", (event) => {
    childr.name = nameInput.value
    childr.surname = secnameInput.value
    childr.age = ageInput.value
    childr.select = selectIput.value
    childr.role = orgInput.value
    childr.runk = runkInput.value
    childr.date = dateInput.value
    childr.child = getChildren()

    event.preventDefault()

    array.push(childr)


if (childr.name != '' & childr.surname != '' & childr.age != '' & childr.select !=  '' & childr.role != '' &  childr.runk != '' & childr.date != '' &  childr.child != '') {
    
}
})


