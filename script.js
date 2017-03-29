window.onload = function(){

// calls thanks function when form button clicked
  var contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", thanks);

// changes text in button
  var learnMore = document.getElementsByClassName("learnMore")[0];
  learnMore.innerText = "New Text";

// change font color on mouseover
  learnMore.addEventListener("mouseover", function(e){
  	learnMore.style.color = "orange";
  })

// change text background using query selector
  var bearButton = document.querySelector("#bearButton");
  bearButton.addEventListener("click", function(e) {
  	bearButton.style.backgroundColor = "black";
  })

function thanks() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var acknowledgment = document.getElementById("acknowledgment");
  var acknowledge = "Thanks for your message, " + name;

  alert("thanks, " + name);

  }

} //closes onload

