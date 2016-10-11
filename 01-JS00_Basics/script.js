
//place to save tasks
var taskArray = [];


//update task list
var updateTasks = function(){
	
	//define the last task list dv
	var taskListHolding = document.getElementById('taskList');
	
	//empty the task list
	taskListHolding.innerHTML = '';
	
	//determine task list length
	var len = taskArray.length;
	var i;
	
	//log each task
	for(i = 0; i < len; i++){
		console.log('task ' + i + ': ' + taskArray[i]);
		
		var newTask = document.createElement('div');
		
		//define the div's id as the index and it's classs as task
		newTask.id = i;
		newTask.className = 'task';
		
		//create the task paragraph to put in the notes div
		var task = document.createElement('p');
		
		//assign the task to the task div
		task.innerText = taskArray[i];
		
		//create a delte button to put in the newTask div
		var deleteButton = document.createElement('button');
		
		//set the delete button id to deleteButton
		deleteButton.id = 'deleteButton';
		
		//add X as value
		deleteButton.innerText = 'X';
		
		//add the event listener
		deleteButton.addEventListener('click', function(e){
			e.preventDefault();
			deleteTask(e);	
		});
		
		//append the task to the taskDiv
		newTask.appendChild(task);
	
		//append the delete button to the newTask div
		newTask.appendChild(deleteButton);
			
		//append the taskDiv to the taskListHolding Div
		taskListHolding.appendChild(newTask);
		
		
	};
	document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
};//updateTasks close

//save task
var saveTask = function(){
	
	//define the input form + the value
	var taskInput = document.getElementById('newTask');
	var newTask = taskInput.value;
	
	//add the value to the taskArray
	taskArray.push(newTask);
	
	//update your task view
	updateTasks();
	
	//clear the input
	taskInput.value = '';
	
	//log the task array
	console.log(taskArray);
	
};


//delete task
var deleteTask = function(e){
	
	var taskNumber = e.target.parentElement.id;
	
	//go to the taskNumber positiong of taskArray and remove one object
	taskArray.splice(taskNumber, 1);
	
	//update tasks to show new array
	updateTasks();
		
};


//init
var init = function(){
	
	console.log("Hi! I'm Ready!");
	
	//define "add" button
	var addButton = document.getElementById("addButton");
	
	//add event listener for click
	addButton.addEventListener('click', function(e){
		
		e.preventDefault();
		saveTask();
		
		
	});
	
	
};

window.onload = init();