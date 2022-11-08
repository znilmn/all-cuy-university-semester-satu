function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif"
    } else {
        lampu1.src = "assets/images/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif"
    } else {
        lampu2.src = "assets/images/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif"
    } else {
        lampu3.src = "assets/images/off.gif"
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif"
    } else {
        lampu4.src = "assets/images/off.gif"
    }


    if (toggle5.checked) {
        lampu5.src = "assets/images/on.gif"
    } else {
        lampu5.src = "assets/images/off.gif"
    }


}