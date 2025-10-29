const footballTeam ={
  team:"Argentina",
  year:1986,
  headCoach:"Carlos Bilardo",
  players:[{
    name:"Sergio Almirón",
    position:"forward",
    isCaptain:false
  },{
    name:"Sergio Batista",
    position:"midfielder",
    isCaptain:false
  },{
    name:"Ricardo Bochini",
    position:"midfielder",
    isCaptain:false
  },{
    name:"Claudio Borghi",
    position:"midfielder",
    isCaptain:false
  },{
    name:"José Luis Brown",
    position:"defender",
    isCaptain:false
  },{
    name:"Daniel Passarella",
    position:"defender",
    isCaptain:false
  },{
    name:"Jorge Burruchaga",
    position:"forward",
    isCaptain:false
  },{
    name:"Néstor Clausen",
    position:"defender",
    isCaptain:false
  },{
    name:"José Luis Cuciuffo",
    position:"defender",
    isCaptain:false
  },{
    name:"Diego Maradona",
    position:"midfielder",
    isCaptain:true
  },{
    name:"Jorge Valdano",
    position:"forward",
    isCaptain:false
  },{
    name:"Héctor Enrique",
    position: "midfielder",
    isCaptain:false
  },{
    name:"Oscar Garré",
    position: "defender",
    isCaptain:false
  },{
    name:"Ricardo Giusti",
    position: "midfielder",
    isCaptain:false
  },{
    name:"Luis Islas",
    position: "goalkeeper",
    isCaptain:false
  },{
    name:"Julio Olarticoechea",
    position: "defender",
    isCaptain:false
  },{
    name:"Pedro Pasculli",
    position: "forward",
    isCaptain:false
  },{
    name:"Nery Pumpido",
    position: "goalkeeper",
    isCaptain:false
  },{
    name:"Oscar Ruggeri",
    position: "defender",
    isCaptain:false
  },{
    name:"Carlos Tapia",
    position: "midfielder",
    isCaptain:false
  },{
    name:"Marcelo Trobbiani",
    position: "midfielder",
    isCaptain:false
  },{
    name:"Héctor Zelada",
    position: "goalkeeper",
    isCaptain:false
  }]
}

const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");

const playerCardsElement = document.getElementById("player-cards");
const playersSelectElement = document.getElementById("players");

teamElement.innerText = footballTeam.team;
yearElement.innerText = footballTeam.year.toString();
headCoachElement.innerText = footballTeam.headCoach;

function displayPlayers(position) {
  playerCardsElement.innerHTML = "";
  const filteredPlayers = position === "all" ? footballTeam.players : footballTeam.players.filter(player => player.position === position);
  filteredPlayers.forEach(player => {

    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.innerText = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const playerPosition = document.createElement("p");
    playerPosition.innerText = `Position: ${player.position}`;
    
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);
    playerCardsElement.appendChild(playerCard);
  });
}

displayPlayers("all");

playersSelectElement.addEventListener("change", (e) => {
  displayPlayers(e.target.value);
});
