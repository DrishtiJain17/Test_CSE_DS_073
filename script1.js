function authenticate(){
    var name = "Drishti";
    var password = "password";
    input_name = document.getElementById("name").value;
    input_password = document.getElementById("password").value;
    if(input_name==name && input_password==password){
        console.log("logged in");
        //display dashboard
        let loginpage = document.getElementById('loginpage')
        let dashboard = document.getElementById('dashboard')
        loginpage.style.display = "none";
        dashboard.style.display = "block";
        console.log(loginpage,dashboard)
    }
    else{
        alert("Invalid login details")
    }
    console.log(input_name,input_password);
}

async function fetchdata(){
    try{
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        console.log(data)
        displayUsers(data);
    }
    catch (error){
        console.log(error)
    }
}

function displayUsers(data){
    data.forEach(element => {
        let a = document.createElement('a');
        let li = document.createElement('li');
        a.textContent = element.login;
        a.setAttribute('href',element.html_url)
        li.appendChild(a)
        let users = document.getElementById('users');
        users.appendChild(li);
    });
}