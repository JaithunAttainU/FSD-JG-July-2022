const btnElement = document.getElementById('btn')
const msgElement = document.getElementById('msg')

var result;
btnElement.addEventListener('click', (event) => {
  result = window.fetch('https://jsonplaceholder.typicode.com/users/1')
  console.log(result) //Pending

  result.then((responseObj) => responseObj.json(), onRejection).then((data) => console.log(data))
})


// function onFulfill(responseObj) {
//   return responseObj.json()
// }


function onRejection(obj) {
  msgElement.innerText = 'Error fetching data from the URL'
  console.log(obj)
}
//result.then
//result.catch