import {
  getInput,
  setFocus,
  setInput,
  resetInput,
  inputEle,
} from "./inputBox.js";
import { createFirstDiv } from "./components/FirstDiv.js";
import { createSecondDiv } from "./components/SecondDiv.js";
import {} from "./FilterTasks.js";

const listEle = document.getElementById("list-elements");
const addButton = document.getElementById("add-btn");
const editCancelEle = document.getElementById("edit-cancel-section");

addButton.addEventListener("click", addTask);

inputEle.addEventListener("keyup", ({ key }) => {
  if (key != "Enter") return;
  if (addButton.classList.contains("hidden")) {
    editOldTask();
  } else {
    addTask();
  }
});

editCancelEle.addEventListener("click", ({ target: { id } }) =>
  editOldTask(id)
);

function editOldTask(id = "edit") {
  if (id == "edit") {
    const [task, validation] = getInput();
    if (validation) {
      editCancelEle.setTask(task);
    } else {
      return;
    }
  }
  resetInput();
  addButton.classList.remove("hidden");
  editCancelEle.classList.add("hidden");
}

function addTask() {
  const [task, validation] = getInput();
  if (validation) {
    listEle.append(createTaskElement(task));
  }
}

function createTaskElement(task) {
  const liEle = document.createElement("li");
  liEle.completed = false;
  liEle.favourite = false;

  const [firstDiv, getTask, setTask] = createFirstDiv(
    task,
    (completedStatus) => (liEle.completed = completedStatus)
  );
  liEle.append(
    firstDiv,
    createSecondDiv(
      (favouriteStatus) => (liEle.favourite = favouriteStatus),
      () => {
        setInput(getTask());
        editCancelEle.setTask = setTask;
        setFocus();
        addButton.classList.add("hidden");
        editCancelEle.classList.remove("hidden");
      },
      () => {
        addButton.classList.remove("hidden");
        editCancelEle.classList.add("hidden");
        resetInput();
        liEle.remove();
      }
    )
  );
  return liEle;
}
