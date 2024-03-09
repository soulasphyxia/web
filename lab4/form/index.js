function createUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;
    const age = document.querySelector('input[name="age"]:checked').value;
    const languages = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(x => x.value)
    const datatype = document.getElementById("datatype").value
    const authors = document.getElementById("authors").value;
    const user = {
        "username": username,
        "password": password,
        "confirm-password": confirm_password,
        "age": age,
        "languages": languages,
        "datatype": datatype,
        "authors": authors
    }
    return user;
}

function saveUser(user) {
    localStorage.setItem("user", user);
}


function createAndSaveUser() {
    const user = createUser();
    saveUser(JSON.stringify(user));
}
