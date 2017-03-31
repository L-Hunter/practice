// 2-Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
// 3-Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".
// 4-Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.
window.onload = function(){

	//accordians
	var accordion  = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < accordion.length; i++) {
		accordion[i].onclick = function(){
			// toggle add/remove .active
			this.classList.toggle("active");
			// toggle display/hide active panel
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		}
	}

	//question 1 arguing buttons
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button1Text = document.getElementById("button1Text");
	var button2Text = document.getElementById("button2Text");

	button1.addEventListener("click", function() {
		button1Text.style.display = "block";
		button2Text.style.display = "none";
	})

	button2.addEventListener("click", function() {
		button2Text.style.display = "block";
		button1Text.style.display = "none";
	})
}
