function swapStyleSheet(sheet) {
    if (document.getElementById("toggle").checked == true){
        document.getElementById("die").checked = false;
        document.getElementById("linux").checked = false;
        document.getElementById("style").setAttribute('href', "/css/styleEasy.css");
        document.getElementById("sparkle").setAttribute('src', "");
        console.log(document.getElementById("sparkle").getAttribute('src'));
        document.getElementById("dieText").innerText = "";
    } 
    else {
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("sparkle").setAttribute('src', "/src/sparkle.js");
        document.getElementById("dieText").innerText = "";
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
    }else{
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("dieText").innerText = "";
    }
}

function anime() {
    if (document.getElementById("linux").checked == true){
        document.getElementById("toggle").checked = false;
        document.getElementById("die").checked = false;
        document.getElementById("style").setAttribute('href', "/css/styleLinux.css");
        document.getElementById("dieText").innerText = "sudo cat /css/styleLinux.css";
    }else{
        document.getElementById("style").setAttribute('href', "/css/style.css");
        document.getElementById("dieText").innerText = "";
    }
}