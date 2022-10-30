function myFunction() {
    const firstPassword = document.getElementById("myInput1");
    const secondPassword = document.getElementById("myInput2");
    
  if (firstPassword.type && secondPassword.type === "password") {
    firstPassword.type = "text";
    secondPassword.type = "text";
  } else {
    firstPassword.type = "password";
    secondPassword.type = "password";
  }
  
  
}