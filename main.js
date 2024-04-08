
let addBtn = document.querySelector('#add-btn');
let addInput = document.querySelector('#add-text');
let tasks = document.querySelector('.tasks')
let deleteBtns = document.querySelectorAll('.delete-btn')
let ongoingBtn = document.querySelectorAll('.ongoing-btn');
let newTask


//tasks is container for task to be done

addBtn.addEventListener('click', () => {
    let textToAdd = addInput.value;
    //if input is empty
    if (textToAdd.trim() == '') {
        alert('Task cannot be empty')
    } else {
        //code to add task 
        newTask = document.createElement('div')
        newTask.classList.add('task')
        newTask.innerHTML = `           
            <input type="text" value="${textToAdd}" readonly >
            <select id="priority-select">
            <option value="normal">Normal</option>
            <option value="high">High</option>
        </select>
            <button class="delete-btn">delete</button>
            <button class="ongoing-btn">Ongoing</button>
            `
        tasks.appendChild(newTask)

        addDeleteEvent()
        ongoingTask()

    }
})

function addDeleteEvent() {
    deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.target.closest('div').remove()
        })
    })
}

function ongoingTask() {
    ongoingBtn = document.querySelectorAll('.ongoing-btn');
    ongoingBtn.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.target.closest('div').querySelector('input').style.color = 'blue'
        })
    })

}


