const formEle = document.getElementById('user-form')
const inputNameEle = document.getElementById('input-name')
const userNameIns = document.getElementById('username-ins')

const sampleClassEles = document.getElementsByClassName('sample-class')
console.log(sampleClassEles)

const inputEles = document.getElementsByTagName('input')
console.log(inputEles)

formEle.addEventListener('submit', (event) => {
  console.log("form is submitted")
  event.preventDefault()

  const username = inputNameEle.value
  userNameIns.innerHTML = `<h1>UserName is ${username}</h1>`
  // alert(`UserName is ${username}`)
})


const grandParentEle = document.getElementById('grandparent')
// alert("Hello")

grandParentEle.addEventListener('click', function (event) {
  console.log(event)
  event.stopPropagation()
  console.log("GrandParent is clicked")
  alert("GrandParent is clicked")
})

const parentEle = document.getElementById('parent')

parentEle.addEventListener('click', function (event) {
  // console.log("Parent is clicked 1")
  alert("Parent is clicked 1")
  event.stopPropagation()
})

parentEle.addEventListener('click', function () {
  // console.log("Parent is clicked 2")
  window.alert("Parent is clicked 2")
})

parentEle.addEventListener('focus', () => {
  console.log("Focus Event is triggred")
})

const childEle = document.getElementById('child')
childEle.addEventListener('click', function () {
  // console.log("Child is clicked")
  window.alert("Child is clicked ")
  event.stopPropagation()
})

document.addEventListener('click', () => {
  // console.log("Document is clicked")
  window.alert("Document is clicked ")

})

// event.stopImmediatePropagation()
