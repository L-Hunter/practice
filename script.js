window.onload = function(){
  var contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", thanks);

  


function thanks() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var acknowledgment = document.getElementById("acknowledgment");
  var acknowledge = "Thanks for your message, " + name;

  alert("thanks, " + name);

  }

}