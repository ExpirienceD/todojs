
var taskInput = document.getElementById('new-task'); 
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); 
var completedTasksHolder = document.getElementById('completed-tasks'); 


var createNewTaskElement = function(taskString) {

  var listItem = document.createElement('li');


  var checkBox = document.createElement('input'); 

  var label = document.createElement('label');

  var editInput = document.createElement('input');

  var editButton = document.createElement('button');

  var deleteButton = document.createElement('button');


  checkBox.type = 'checkbox';
  editInput.type = 'text';

  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  label.innerText = taskString;


  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}


var addTask = function() {
  console.log("Add task...");
  if(taskInput.value === '') { 
    quit;
  } else {

  var listItem = createNewTaskElement(taskInput.value);


  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}
  taskInput.value = "Add a new task :)";
};



var editTask = function() {
  console.log('Edit task...')

  var listItem = this.parentNode;

  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');

    var containsClass = listItem.classList.contains('editMode');
    var editButton = listItem.getElementsByTagName('button')[0];

    

    if(containsClass) {

      label.innerText = editInput.value;
      editButton.innerText = 'Edit';
    } else {

      editInput.value = label.innerText;
      editButton.innerText = 'Save';
    }


    listItem.classList.toggle('editMode');


};


var deleteTask = function() {
  console.log('Delete task...')

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};


var taskCompleted = function() {
  console.log('Task complete...')

  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};


var taskIncomplete = function() {
  console.log('Task incomplete task...')

    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log('Bind list item events');

  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');



  editButton.addEventListener('click', editTask);
  

  deleteButton.onclick = deleteTask;

  checkBox.onchange = checkBoxEventHandler;
};

var ajaxRequest = function() {
  console.log('AJAX Request');
};


addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);




for(var i = 0; i < incompleteTasksHolder.children.length; i++) {

  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}





for(var i = 0; i < completedTasksHolder.children.length; i++) {

  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}



