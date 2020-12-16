document.addEventListener("DOMContentLoaded",
	function (event){
		var submitTask = document.querySelector(".submit-button");
		var input = document.querySelector("input");
		var ul = document.querySelector("ul");
		submitTask.addEventListener("click", addNewTask);
		input.addEventListener("keypress", addNewTask);

		var deleteButtons = document.querySelectorAll(".delete");
		for(let i = 0; i < deleteButtons.length; i++){
			deleteButtons[i].addEventListener("click", deleteTask);
		}

		var clearButtons = document.querySelectorAll(".clear");
		for(let i = 0; i < clearButtons.length; i++){
			clearButtons[i].addEventListener("click", clearTask);
		}

		function addNewTask(e){
			if(input.value!="" && e.type=='click' || e.key =="Enter"){
				let li = document.createElement("li");
				// delete button 
				let button = document.createElement("button");
				button.className = "delete";
				let i = document.createElement("i");
				i.className = "fa fa-trash-o";
				button.appendChild(i);
				// clear button
				let button2 = document.createElement("button");
				button2.className = "clear";
				let i2 = document.createElement("i");
				i2.className = "fa fa-check";
				button2.appendChild(i2);

				li.appendChild(document.createTextNode(input.value));
				li.appendChild(button);
				li.appendChild(button2);
				ul.insertBefore(li,ul.firstElementChild);
				input.value="";
				deleteButtons = document.querySelectorAll(".delete");
				for(let i = 0; i < deleteButtons.length; i++){
					deleteButtons[i].addEventListener("click", deleteTask);
				}
				clearButtons = document.querySelectorAll(".clear");
				for(let i = 0; i < clearButtons.length; i++){
					clearButtons[i].addEventListener("click", clearTask);
				}
			}
		}

		function deleteTask(){
			this.parentNode.remove()
			// console.log(this.parentNode);
		}
		function clearTask(){
			this.parentNode.style.textDecoration ="line-through";
			this.parentNode.style.opacity ="0.5";
			ul.appendChild(this.parentNode);
		}

	}
);

