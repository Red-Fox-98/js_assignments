const taskInput = document.getElementById("taskInput");
const taskAddButton = document.getElementById("taskButton");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

taskAddButton.addEventListener("click", () => {
    const valueTask = taskInput.value;

    if (valueTask) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<div id="task"><input type="checkbox" class="checked"/><span>${valueTask}</span></div><button class="deleteTask">Удалить</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".deleteTask");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        const checkChanges = taskItem.querySelector(".checked");
        checkChanges.addEventListener("change", () => {
            if (checkChanges.checked) {
                taskItem.querySelector('span').style.textDecoration = "line-through";
                taskItem.querySelector('span').style.fontStyle = "italic";
                taskItem.querySelector('span').style.opacity = "0.5";
            } else {
                taskItem.querySelector('span').style.textDecoration = "none";
                taskItem.querySelector('span').style.fontStyle = "normal";
                taskItem.querySelector('span').style.opacity = "1";
            }
        })

    }
})

const marked = filter.querySelector('.marked');
const unmarked = filter.querySelector('.unmarked');
function filtering() {
    for (let i = 0; i < taskList.childNodes.length; i++) {
        const task = taskList.childNodes[i];
        const taskChecked = task.querySelector(".checked").checked;
        if (!marked.checked && !unmarked.checked) {
            task.style.display = "";
        } else if (marked.checked || unmarked.checked) {
            taskChecked === marked.checked ? task.style.display = "" : task.style.display = "none"
            taskChecked === !unmarked.checked ? task.style.display = "" : task.style.display = "none"
        }
    }
}

marked.addEventListener("change", () => {
    unmarked.checked = false;
    filtering();
})

unmarked.addEventListener("change", () => {
    marked.checked = false;
    filtering()
})