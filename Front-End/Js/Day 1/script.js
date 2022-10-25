console.log("Script File Linked")

const clickMeBtnElement = document.getElementById('clickMeBtn')

// clickMeBtnElement.addEventListener('click', () => {
//   console.log("Click ME button is pressed Event Listener 1")
// })

clickMeBtnElement.addEventListener('click', clickMeBtnListener)
clickMeBtnElement.addEventListener('mouseenter', clickMeBtnMouseEnterListener)
clickMeBtnElement.addEventListener('mouseleave', clickMeBtnMouseLeaveListener)

let clickCount = 0
function clickMeBtnListener() {
  clickCount++
  if (clickCount == 3) {
    document.body.style.backgroundColor = 'green'
    // const inputEle = document.createElement('input')
    // clickMeBtnElement.append(inputEle)
    // document.title = "Clicked 3 times"
  }
  console.log(`Click ME button is pressed ${clickCount}`)
}

function clickMeBtnMouseEnterListener() {
  console.log("Mouse Enter Action performed")
}

function clickMeBtnMouseLeaveListener() {
  console.log("Mouse Leave Action performed")
}

