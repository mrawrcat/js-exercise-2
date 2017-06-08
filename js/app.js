// console.log("this works");
var userSubmit = document.querySelector('#user-submit');
// ============================================
// Create a "close" button and append it to each list item

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }









// ========================================
function prependChild(parent, newfirst){
	parent.insertBefore(newfirst, parent.firstChild);
}

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
	
	var inputList = '<li>' + userInput.value  + '<span class ="close">' +  "\u00D7" + '</span>'  +  '</li>';
	
	
	toDoList.innerHTML += inputList ;
	userInput.value = '';
	// ===================this is to close the x at the end=======================
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
   	  var div = this.parentElement;
   	  div.style.display = "none";
  }
}
}

// Click on a close button to hide the current list item

userSubmit.addEventListener('click', addToDo, false);

