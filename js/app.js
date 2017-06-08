// console.log("this works");
var userSubmit = document.querySelector('#user-submit');


function addToDo(event){
	event.preventDefault();
	// console.log(event);
	var userInput = document.querySelector('#user-input'); //dont put .value here
	var toDoList = document.querySelector('#to-do-list');
	// console.log(userInput.value);
	// console.log(toDoList);
	var UserInputVal = userInput.value;
	if(UserInputVal === ''){
		return false;
	}
	// else if(UserInputVal = UserInputVal.indexOf(' ') >= 0){
	// 	return false;
	// }
	toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	userInput.value = '';

}

userSubmit.addEventListener('click', addToDo, false);
