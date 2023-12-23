function onReloadTheme(){
    if(localStorage.getItem("theme") == "red"){
        document.getElementById("style").setAttribute('href', "/css/style.css");
    }else if(localStorage.getItem("theme") == "blue"){
        document.getElementById("style").setAttribute('href', "/css/styleBlue.css");
    }else if(localStorage.getItem("theme") == "plain"){
        document.getElementById("style").setAttribute('href', "/css/styleEasy.css");
    }else if(localStorage.getItem("theme") == "linux"){
        document.getElementById("style").setAttribute('href', "/css/styleLinux.css");
    }
}

function swapStyleSheet() {
    if (document.getElementById("toggle").checked == true){
        document.getElementById("die").checked = false;
        document.getElementById("linux").checked = false;
        document.getElementById("style").setAttribute('href', "/css/styleEasy.css");
        document.getElementById("sparkle").setAttribute('src', "");
        console.log(document.getElementById("sparkle").getAttribute('src'));
        document.getElementById("dieText").innerText = "";
        localStorage.setItem("theme", "plain");
    } 
    else {
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("sparkle").setAttribute('src', "/src/sparkle.js");
        document.getElementById("dieText").innerText = "";
        localStorage.setItem("theme", "red");
    }
    return 0;
}

function die() {
    if (document.getElementById("die").checked == true){
        document.getElementById("toggle").checked = false;
        document.getElementById("linux").checked = false;
        // alert("I won't respect your opinion but fine");
        document.getElementById("style").setAttribute('href', "/css/styleBlue.css");
        document.getElementById("dieText").innerText = "Red is cool :[";
        localStorage.setItem("theme", "blue");
    }else{
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("dieText").innerText = "";
        localStorage.setItem("theme", "red");
    }
}

function anime() {
    if (document.getElementById("linux").checked == true){
        document.getElementById("toggle").checked = false;
        document.getElementById("die").checked = false;
        document.getElementById("style").setAttribute('href', "/css/styleLinux.css");
        document.getElementById("dieText").innerText = "sudo cat /css/styleLinux.css";
        localStorage.setItem("theme", "linux");
    }else{
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("dieText").innerText = "";
        localStorage.setItem("theme", "red");
    }
}