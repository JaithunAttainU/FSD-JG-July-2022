const completedCheckbox = document.querySelector("#completed");
const favouriteCheckbox = document.querySelector("#favourites");
const pendingCheckbox = document.querySelector("#pending");
const completedBlock = document.querySelector("#completed-box");
completedCheckbox.addEventListener("change", filterTasks);
favouriteCheckbox.addEventListener("change", filterTasks);
pendingCheckbox.addEventListener("change", filterTasks);

function filterTasks() {
  const fav = favouriteCheckbox.checked;
  const pending = pendingCheckbox.checked;
  if (pending == true) {
    completedCheckbox.checked = false;
    completedCheckbox.setAttribute("disabled", "true");
  } else {
    completedCheckbox.removeAttribute("disabled");
  }
  completedBlock.classList.toggle("opacity-20", pending);
  const comp = completedCheckbox.checked;
  console.log(pending, comp, fav);
  document.querySelectorAll("#list-elements li").forEach((ele) => {
    let finalValue = true;
    if (pending) {
      finalValue &&= !ele.completed;
    }
    if (comp) {
      finalValue &&= ele.completed;
    }
    if (fav) {
      finalValue &&= ele.favourite;
    }
    ele.classList.toggle("hidden", !finalValue);
  });
}
