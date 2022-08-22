const selectedPlayerArray = [];

function display(selectedPlayerList) {
  const topPlayerList = document.getElementById("selected-players");
  topPlayerList.innerHTML = "";

  for (let i = 0; i < selectedPlayerList.length; i++) {
    // console.log(selectedPlayerArray[i].playerName);
    const name = selectedPlayerArray[i].playerName;

    const ol = document.createElement("ol");

    ol.innerHTML = `
    <li class="ms-4">${i + 1}. ${name}</li>
    `;

    topPlayerList.appendChild(ol);
  }
}

function playerSelected(element) {
  // console.log(element.parentNode.children);
  // console.log(element.parentNode.children[0].innerText);

  const playerName = element.parentNode.children[0].innerText;
  // console.log(playerName);

  const playerObj = {
    playerName: playerName,
  };
  selectedPlayerArray.push(playerObj);
  // console.log(selectedPlayerArray.length);

  display(selectedPlayerArray);
}
