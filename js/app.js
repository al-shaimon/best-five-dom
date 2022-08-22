const selectedPlayerArray = [];

function display(selectedPlayerList) {
  const topPlayerList = document.getElementById("selected-players");
  topPlayerList.innerHTML = "";

  if (selectedPlayerList.length >= 5) {
    alert("Warning you can add only five players, this is your last player");
  }

  for (let i = 0; i < selectedPlayerList.length; i++) {
    const name = selectedPlayerArray[i].playerName;

    const ol = document.createElement("ol");

    ol.innerHTML = `
    <li class="ms-4">${i + 1}. ${name}</li>
    `;

    topPlayerList.appendChild(ol);
  }
}

function playerSelected(element) {
  const playerName = element.parentNode.children[0].innerText;

  const playerObj = {
    playerName: playerName,
  };
  selectedPlayerArray.push(playerObj);

  display(selectedPlayerArray);
}
