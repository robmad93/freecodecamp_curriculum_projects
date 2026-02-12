const footballTeam = {
  team: "Liverpool FC",
  year: 2004,
  headCoach: "Rafael Benítez",
  players: [
    {
      name: "Steven Gerrard",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Jamie Carragher",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Xabi Alonso",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Luis García",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jerzy Dudek",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;



const playerCardsContainer = document.getElementById("player-cards");
const filterSelect = document.getElementById("players");

function displayPlayers(players) {
  playerCardsContainer.innerHTML = "";

  players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);

    playerCardsContainer.appendChild(playerCard);
  });
}

displayPlayers(footballTeam.players);

filterSelect.addEventListener("change", function() {
  const selectedValue = filterSelect.value;

  if (selectedValue === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(player => player.position === selectedValue);
    displayPlayers(filteredPlayers);
  }
});