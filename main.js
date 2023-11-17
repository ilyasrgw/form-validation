
let id = (id) => document.getElementById(id);

let classes = (classes) => 
    document.getElementsByClassName(classes);


let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMessage = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) =>  {
    e.preventDefault();
  interface(username, 0, "username required");
  interface(email, 1, "email required");
  interface(password, 2, "password required");
}
);

let interface = (id, index, message) => {
    if(id.value.trim() === ""){
        errorMessage[index].innerHTML = message;
        failureIcon[index].style.opacity = "1";
        successIcon[index].style.opacity = "0";
      } else {
        errorMessage[index].innerHTML = "";
        failureIcon[index].style.opacity = "0";
        successIcon[index].style.opacity = "1";
    
      }

}

