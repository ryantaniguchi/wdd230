// Ask Bro. Blazzard about security concerns around InnerHTML

// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
button.addEventListener('click', addFunction);

function addFunction() {
	let response = input.value;

    // In the function block for adding a chapter, make sure the input is not blank
	if (response == "") {
		alert("No input detected. Please make sure you are adding a chapter.");
        return false;
	} else {
        // Create an li element
		const listElement = document.createElement('li');
        // Create a delete button
		const deleteButton = document.createElement('button');

        // Populate the li elements textContent or innerText with the input
		listElement.textContent = response;
        // Populate the button textContent with an ❌
		deleteButton.textContent = "❌";
        // Create an aria-label attribute on the button for accessibility
        deleteButton.setAttribute('aria-label', "Remove chapter.")
		
        // Append the li element with the delete button
		listElement.append(deleteButton);
        // Append the list element with the li element just created and appended with text and the delete button
		list.append(listElement);	

        // Add an event listener to the delete button that removes the li element when clicked
		deleteButton.addEventListener('click', deleteFunction);

        function deleteFunction() {
            list.removeChild(listElement);
        }
        
	}

    // Clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
	input.value = "";
    input.focus();
};