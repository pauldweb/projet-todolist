const containerTask = document.querySelector(".container-task")
const taskAdd = document.querySelector(".task-add")
const input = document.querySelector(".task-add>input")

const divGenrator = (name) =>{
    const div = document.createElement("div")
    div.className = name
    return div
}

const taskGenerator = (value) =>{
    const task = divGenrator("task")
    const taskFlex = divGenrator("task-flex")

    const text = divGenrator("text")
    text.innerHTML = value

    task.addEventListener("click", ()=>{
        containerTask.removeChild(task)
    })

    task.addEventListener("mouseover",()=>{
        task.style.border = "2px solid red"
    })

    task.addEventListener("mouseout",()=>{
        task.style.border = "2px solid white"
    })

    taskFlex.appendChild(text)
    task.appendChild(taskFlex)

    return task
}

input.addEventListener("keydown", (e)=>{
    const key = e.key
    if(key != "Enter"){
        taskAdd.style.border = "2px solid green"
    }
    if(key == "Enter" && input.value != ""){
        containerTask.appendChild(taskGenerator(input.value))
        input.value = ""
        taskAdd.style.border = "2px solid white"
    }
})

