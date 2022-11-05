import { addIconClass } from "./AddIconsClass.js";

export function createCheckbox(updateStatus) {
  const checkBoxEle = document.createElement("input");
  checkBoxEle.type = "checkbox";
  addIconClass(checkBoxEle);
  checkBoxEle.addEventListener(
    "change",
    ({ target: { checked: completedStatus } }) => updateStatus(completedStatus)
  );
  return checkBoxEle;
}
