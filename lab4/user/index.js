const user = JSON.parse(localStorage.getItem("user"))
document.getElementById("username").innerHTML = user.username;
document.getElementById("password").innerHTML = user.password;
document.getElementById("confirm-password").innerHTML = user["confirm-password"];
document.getElementById("age").innerHTML = user.age;
document.getElementById("languages").innerHTML = user.languages.join(",");
document.getElementById("datatype").innerHTML = user.datatype;
document.getElementById("authors").innerHTML = user.authors;