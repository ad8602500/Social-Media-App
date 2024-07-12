let userObj = {};

function handleInput(event){
   userObj[event.target.id] = event.target.value;
}

async function login(){
    let result = await fetch("http://local:5000/socialMedia/user/register",{
        method:"POST",
        headers :{'COntent-type' : 'application/json'},
        body:JSON.stringify(userObj)
    })
}