import './style.css';

const arrayList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 10,
  },
  {
    description: 'Complete To do List Project',
    completed: false,
    index: 5,
  },
];

let taskList = '';
const container = document.getElementById('container');
const indexArr = arrayList.map((element) => element.index);

for (let i = 0; i <= Math.max(...indexArr); i += 1) {
  for (let j = 0; j < arrayList.length; j += 1) {
    if (arrayList[j].index === i) {
      taskList += `
        <li>
          <span>
            <input type="checkbox">
            <label for="#">
            <i class="fa fa-check hide"></i>
            ${arrayList[j].description}</label>
          </span>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </li>
        `;
    }
  }
}

container.innerHTML = taskList;

if (taskBox.length > 0) {
  for (let i = 0; i < taskBox.length; i += 1) {
    taskBox[i].addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        taskList.updateTask(taskBox[i], i);
        document.location.reload(true);
        ToDo.displayTask();
      }
    });
  }
}

// for (let i = 0; i < deleteIcon.length; i +=1) {
//   deleteIcon[i].parentElement.addEventListener('click', (e) => {
//     e.preventDefault();
//     deleteIcon[i].style.display = ('block')
//     toHide[i].style.display = ('none')
//   })
    
// }

