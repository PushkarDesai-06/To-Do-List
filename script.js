const task = document.querySelector('.task')

document.addEventListener('click', e => {
    if (e.target.checked === true) {

        let parent = e.target.parentNode.parentNode
        parent.childNodes[1].childNodes[1].style.textDecorationLine = 'line-through'
        let otherTasks = document.querySelectorAll('.task')
        let index = Array.from(otherTasks).indexOf(parent)
        setTimeout(() => {

            parent.style.opacity = "0"

            setTimeout(() => {
                for (let i = index + 1; i < otherTasks.length; i++) {
                    otherTasks[i].style.transform = `translateY(-${parent.clientHeight + 20}px)`

                }
            }, 300)
        }, 300)
        setTimeout(() => {

            for (let i = index + 1; i < otherTasks.length; i++) {
                otherTasks[i].style.transitionDuration = `0s`
                otherTasks[i].style.transform = `translateY(0px)`
            }
            parent.remove()
            for (let i = index + 1; i < otherTasks.length; i++) {
                otherTasks[i].style.transitionDuration = `0.3s`
            }
        }, 900)

    }
})

let taskContainer = document.querySelector('#tasks')

let taskClone = task.cloneNode(true)

let addBtn = document.querySelector('#add')


addBtn.addEventListener('click', e => {
    let tasks = document.querySelectorAll('.task')

    let clone
    if (tasks.length !== 0) {
        let firstTask = tasks[0]
        clone = taskClone.cloneNode(true)
        firstTask.before(clone)
    } else {

        clone = taskClone.cloneNode(true)
        taskContainer.appendChild(clone)


    }

})


let number = document.querySelector('.number')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let day = document.querySelector('.day')

let date = new Date()

let months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

let days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
}

console.log(date.getMonth());
number.innerText = date.getDate()
month.innerHTML = `<b>${months[date.getMonth()]}</b>`
year.innerText = date.getFullYear()
day.innerHTML = `<b>${days[date.getDay()]}</b>`