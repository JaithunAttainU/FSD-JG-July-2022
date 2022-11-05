import { addIconClass } from "./AddIconsClass.js";
export function createButton(type, callback) {
  const editButton = document.createElement("button");
  editButton.addEventListener("click", callback);
  editButton.innerText = type;
  addIconClass(editButton);
  return editButton;
}
