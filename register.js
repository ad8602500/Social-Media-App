let userObj = {};

async function handleInput(event){
   userObj[event.target.id] = event.target.value;
   console.log(userObj);

 
}

function handlePass(event){
    let prevPass = userObj.password;
    let cnfPass = event.target.value;
    console.log(prevPass, cnfPass);
    if(prevPass == cnfPass){
        document.getElementById("msg").innerText="Passwords Matched";
        document.getElementById("registerBtn").disabled = false;
        return true;
    }
    else{
        document.getElementById("msg").innerText = "Passwors Didn't Matched";
        return false;

    }
}

async function register(event){
    event.preventDefault(); 

    let result =  fetch("http://local:5000/socialMedia/user/register",{
      method:"POST",
      headers:{'Content-type': 'applicatioon/json'},
      body: JSON.stringify(userObj)
   })

    const response = await result;
    const data = await 

    alert("Register Successful");
    window.location.href = 'login.html';
}