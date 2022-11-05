import { createTaskParaElement } from "./TaskParaElement.js";
import { createCheckbox } from "./common/Checkbox.js";

export function createFirstDiv(task, updateStatus) {
  const divEle = document.createElement("div");
  const [paraele, getTask, setTask] = createTaskParaElement(task);
  divEle.append(createCheckbox(updateStatus), paraele);
  return [divEle, getTask, setTask];
}
