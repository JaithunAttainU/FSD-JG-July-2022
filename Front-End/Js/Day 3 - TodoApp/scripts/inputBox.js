const errorEle = document.getElementById("error");
export const inputEle = document.getElementById("task-input");

export function resetInput() {
  setInput("");
}

export function getInput() {
  const task = inputEle.value;
  if (!task) {
    errorEle.classList.remove("hidden");
    return ["", false];
  }
  errorEle.classList.add("hidden");
  inputEle.value = "";
  return [task, true];
}

export function setInput(value) {
  inputEle.value = value;
}

export function setFocus() {
  inputEle.focus();
}
