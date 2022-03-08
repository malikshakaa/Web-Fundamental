function disappear(el){
    el.remove()
}

function logout(ele){
    if(ele.innerText === "login"){
        ele.innerText = "logout";
    }else{
        ele.innerText= "login";
    }
}

