// Lista de missões
const missions = {
    easy: [
      { description: "Usar uma palavra incomum em uma conversa", points: 5 },
      { description: "Dar um aperto de mão diferente para alguém", points: 5 },
      { description: "Encostar em algo azul sem chamar atenção", points: 5 },
      { description: "Fazer alguém rir sem contar uma piada", points: 5 },
      { description: "Cumprimentar alguém de um jeito incomum", points: 5 },
      { description: "Tomar um gole da bebida de alguém (com permissão)", points: 5 },
      { description: "Fazer alguém repetir a última palavra que você disse", points: 5 },
      { description: "Bocejar e ver se alguém boceja também", points: 5 },
      { description: "Olhar fixamente para um objeto e esperar que alguém olhe também", points: 5 },
      { description: "Esfregar as mãos como se estivesse planejando algo", points: 5 }
    ],
    medium: [
      { description: "Fazer alguém repetir o que você disse", points: 10 },
      { description: "Dar um apelido aleatório para alguém", points: 10 },
      { description: "Fazer alguém levantar da cadeira sem pedir diretamente", points: 10 },
      { description: "Fazer alguém bater na sua mão como se estivesse pedindo 'toca aqui'", points: 10 },
      { description: "Colocar a mão no queixo e esperar que alguém imite o gesto", points: 10 },
      { description: "Fazer alguém mudar de assunto enquanto está falando", points: 10 },
      { description: "Fazer alguém tirar uma selfie com você sem pedir diretamente", points: 10 },
      { description: "Fazer uma pose engraçada perto de um grupo sem que percebam", points: 10 },
      { description: "Iniciar um brinde sem dizer a palavra 'brinde'", points: 10 },
      { description: "Pedir para alguém segurar um objeto seu e só pegar de volta depois de um minuto", points: 10 }
    ],
    hard: [
      { description: "Fazer alguém dizer 'isso é estranho' sem que percebam sua intenção", points: 20 },
      { description: "Conseguir que alguém imite um gesto seu sem perceber", points: 20 },
      { description: "Fazer alguém repetir a mesma frase duas vezes na conversa", points: 20 },
      { description: "Fazer alguém olhar para cima sem apontar ou indicar nada", points: 20 },
      { description: "Convencer alguém a te dar algo que esteja segurando sem pedir diretamente", points: 20 },
      { description: "Colocar uma música específica para tocar sem que pareça sua intenção", points: 20 },
      { description: "Tossir ou pigarrear e ver se alguém faz o mesmo", points: 20 },
      { description: "Fazer alguém dizer 'é verdade' pelo menos três vezes na conversa", points: 20 },
      { description: "Fazer alguém fazer um high five com você sem pedir diretamente", points: 20 },
      { description: "Fazer alguém se sentar e levantar de novo em menos de um minuto", points: 20 }
    ],
    epic: [
      { description: "Fazer alguém levantar um brinde mencionando um motivo inventado", points: 30 },
      { description: "Fazer pelo menos três pessoas repetirem uma mesma palavra ao longo da festa", points: 30 },
      { description: "Fazer alguém dizer 'eu nunca tinha pensado nisso' durante uma conversa", points: 30 },
      { description: "Convencer alguém a dançar sem dizer a palavra 'dançar'", points: 30 },
      { description: "Criar uma piada interna com um grupo de pessoas sem explicar o jogo", points: 30 },
      { description: "Fazer um grupo de cinco pessoas olhar para um mesmo ponto sem explicação", points: 30 },
      { description: "Fazer alguém te agradecer por algo que você não fez", points: 30 },
      { description: "Fazer alguém imitar um sotaque sem pedir diretamente", points: 30 },
      { description: "Fazer alguém falar um idioma estrangeiro sem que perceba o desafio", points: 30 },
      { description: "Inventar um gesto de comemoração e fazer pelo menos duas pessoas repetirem", points: 30 }
    ]
  };
  
  // Variáveis globais
  let playerNickname = "";
  let playerScore = 0;
  let playerMissions = [];
  
  // Elementos do DOM
  const nicknameScreen = document.getElementById("nickname-screen");
  const gameScreen = document.getElementById("game-screen");
  const nicknameInput = document.getElementById("nickname-input");
  const startButton = document.getElementById("start-button");
  const playerNicknameDisplay = document.getElementById("player-nickname");
  const missionsList = document.getElementById("missions-list");
  const scoreDisplay = document.getElementById("score");
  
  // Função para sortear missões
  function drawMissions() {
    playerMissions = [
      ...getRandomMissions(missions.easy, 3),
      ...getRandomMissions(missions.medium, 4),
      ...getRandomMissions(missions.hard, 3),
      ...getRandomMissions(missions.epic, 2)
    ];
    displayMissions();
  }
  
  // Função para pegar missões aleatórias
  function getRandomMissions(missionList, count) {
    const shuffled = missionList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Função para exibir missões na tela
  function displayMissions() {
    missionsList.innerHTML = "";
    playerMissions.forEach((mission, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${mission.description} (${mission.points} pontos)</span>
        <button onclick="completeMission(${index})">Concluir</button>
      `;
      missionsList.appendChild(li);
    });
  }
  
  // Função para completar uma missão
  function completeMission(index) {
    const mission = playerMissions[index];
    playerScore += mission.points;
    playerMissions.splice(index, 1); // Remove a missão concluída
    scoreDisplay.textContent = playerScore;
    displayMissions();
  
    if (playerMissions.length === 0) {
      alert("Parabéns! Você completou todas as missões!");
    }
  }
  
  // Iniciar o jogo
  startButton.addEventListener("click", () => {
    if (nicknameInput.value.trim() !== "") {
      playerNickname = nicknameInput.value.trim();
      playerNicknameDisplay.textContent = playerNickname;
      nicknameScreen.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      drawMissions();
    } else {
      alert("Por favor, insira um nickname!");
    }
  });