// console.log("this works");
var userSubmit = document.querySelector('#user-submit');
var userInput = document.querySelector('#user-input'); //dont put .value here
var toDoList = document.querySelector('#to-do-list');
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


function addToDo(event){
	event.preventDefault();
	var UserInputVal = userInput.value;
	if(UserInputVal === ''){
		return false;
	}
	// else if(UserInputVal = UserInputVal.indexOf(' ') >= 0){
	// 	return false;
	// }
	
	var inputList = '<li><i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value  + /*'<span class ="close">' +  "\u00D7" + '</span>'*/ '</li>';
	
	
	toDoList.innerHTML = inputList + toDoList.innerHTML;
	userInput.value = '';
	// ===================this is to close the x at the end=======================
	//var close = document.getElementsByClassName("close");

// 	for (var i = 0; i < close.length; i++) {
// 	  close[i].onclick = function() {
//    	  var div = this.parentElement;
//    	  div.style.display = "none";
//   }
// }
}

//===== Click on a close button to hide the current list item =========
function removeToDo(event){
	if(event.target.classList.contains('close-to-do')){
		// console.log('bleh');
		var li = event.target.parentElement;
		// console.log(li);	
		toDoList.removeChild(li);
    	

	}

}

// ============================
userSubmit.addEventListener('click', addToDo, false);
toDoList.addEventListener('click', removeToDo, false);

