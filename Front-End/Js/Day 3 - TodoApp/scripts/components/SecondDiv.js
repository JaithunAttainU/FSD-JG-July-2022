import { createCheckbox } from "./common/Checkbox.js";
import { createButton } from "./common/Button.js";
import { ButtonTypes } from "../constants/ButtonTypes.js";

export function createSecondDiv(updateStatus, editCallback, deleteCallback) {
  const divEle = document.createElement("div");
  divEle.append(
    createCheckbox(updateStatus),
    createButton(ButtonTypes.EDIT, editCallback),
    createButton(ButtonTypes.DELETE, deleteCallback)
  );
  return divEle;
}
