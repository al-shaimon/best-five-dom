

document.getElementById("selected-btn1").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn1");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name1");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
document.getElementById("selected-btn2").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn2");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name2");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
document.getElementById("selected-btn3").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn3");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name3");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
document.getElementById("selected-btn4").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn4");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name4");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
document.getElementById("selected-btn5").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn5");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name5");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
document.getElementById("selected-btn6").addEventListener("click", function () {
  //length check
  const selectedPlayerlength = document.querySelectorAll("#selected-player li");
  if (selectedPlayerlength.length < 5) {
    // disabled btn
    const btnDisabled = document.getElementById("selected-btn6");
    btnDisabled.setAttribute("disabled", true);
    btnDisabled.style.backgroundColor = "gray";

    //get the playerName
    const name = document.getElementById("selected-name6");
    const elemet = name.innerText;
    //will add in list
    const selectedPlayer = document.getElementById("selected-player");
    const createElement = document.createElement("li");
    createElement.innerText = elemet;

    selectedPlayer.appendChild(createElement);
  } else {
    alert("Warning: You already selected five players.");
  }
});
