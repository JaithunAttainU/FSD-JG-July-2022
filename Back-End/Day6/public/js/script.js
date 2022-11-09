const addBtnEle = document.querySelector('#add-btn')
const taskInputEle = document.querySelector('#task-input')
const taskListele = document.querySelector('#to-do-list')

addBtnEle.addEventListener('click', () => {
  const newTask = taskInputEle.value
  if (!newTask) {
    alert("Please enter the task...")
    return;
  }

  // #1
  // const oldTasks = taskListele.innerHTML
  // taskListele.innerHTML = `${oldTasks}<li>${newTask}<button>X</button></li>`

  // #2
  const newTaskLiEle = document.createElement('li') //<li><li>
  newTaskLiEle.innerText = newTask  //<li>{newTask}</li> 

  //Create a btn ele and append to li
  const deleteBtnele = document.createElement('button') //<button></button>
  deleteBtnele.innerText = 'X' //<button>X</button>
  deleteBtnele.addEventListener('click', deleteBtnClickListener)
  newTaskLiEle.append(deleteBtnele) //<li>Drink Water<button>X</button></li>

  //create check box and prepend to li
  const checkBoxEle = document.createElement('input')
  checkBoxEle.type = 'checkbox'
  checkBoxEle.addEventListener('change', checkBoxChangeListener)
  newTaskLiEle.prepend(checkBoxEle)

  taskListele.append(newTaskLiEle)
  // taskListele.appendChild(newTaskLiEle)
  // taskListele.prepend(newTaskLiEle)

  taskInputEle.value = ''


  function deleteBtnClickListener(event) {
    // console.log('Delete btn clicked')
    // console.log(event)
    // event.target.parentElement.remove()
    newTaskLiEle.remove()
  }

  function checkBoxChangeListener(event) {
    // if (event.target.checked) {
    //   newTaskLiEle.classList.add('complete')
    // } else {
    //   newTaskLiEle.classList.remove('complete')
    // }
    console.log((newTaskLiEle.classList))
    newTaskLiEle.classList.toggle('complete')
  }
})

console.log("hello" || "world")
console.log("foo" && "bar")