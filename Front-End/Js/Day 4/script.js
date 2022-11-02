const btnElement = document.getElementById('btn')
const msgElement = document.getElementById('msg')

var result;
btnElement.addEventListener('click', apiCalBtnClickListenerAsync)

function onFulfill(responseObj) {
  return responseObj.json() //convert ReadableStream to Actula Data
}

function onRejection(obj) {
  msgElement.innerText = 'Error fetching data from the URL'
  console.log(obj)
}

//result.then(()=>{})
//result.catch()

//Async - Await - Promises(Syntactic Sugar)


function apiCalBtnClickListener(event) {
  result = window.fetch('https://jsonplaceholder.typicode.com/users/1')
  console.log(result) //Pending

  result.then(onFulfill, onRejection).then((data) => {

    console.log(data)
    // data.address.geo = undefined

    const lat = data.address.geo ? data.address.geo.lat : ''
    const lng = data.address.geo ? data.address.geo.lng : ''

    const userData = `
        <div>UserName: ${data.name}</div>
        <div>Email: ${data.email}</div>
        <div>Latitude: ${lat}</div>
        <div>Longitude: ${lng} </div>`
    msgElement.innerHTML = userData
  }).catch((err) => {
    msgElement.innerText = 'Error!'
    //log
    console.log(err)
  })
}


async function apiCalBtnClickListenerAsync(event) {

  try {
    const result = await window.fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      }
    })
    const data = await result.text()
    console.log(data)
    // const { address, name, email } = data
    // const lat = address.geo ? address.geo.lat : ''
    // const lng = address.geo ? address.geo.lng : ''

    // const userData = `
    //     <div>UserName: ${name}</div>
    //     <div>Email: ${email}</div>
    //     <div>Latitude: ${lat}</div>
    //     <div>Longitude: ${lng} </div>`

    msgElement.innerHTML = data
  } catch (err) {
    msgElement.innerText = 'Error!'
    //log
    console.log(err)
  }

}