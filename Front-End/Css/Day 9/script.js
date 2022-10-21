console.log("Script Linked Successfully!")

console.log(document.getElementById('btn'))

document.getElementById('btn').addEventListener('click', () => {
  console.log("Hello")
})
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))