export function createTaskParaElement(task) {
  const paraele = document.createElement("p");
  paraele.innerText = task;
  return [
    paraele,
    () => paraele.innerText,
    (newTask) => (paraele.innerText = newTask),
  ];
}
