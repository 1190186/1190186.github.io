const OPCIONES = ["piedra", "papel", "tijeras"];

const EMOJIS = {
  piedra: "✊",
  papel: "✋",
  tijeras: "✌️",
};

let scoreJugador = 0;
let scorePc = 0;
let scoreEmpates = 0;

function eleccionPC() {
  const indice = Math.floor(Math.random() * OPCIONES.length);
  return OPCIONES[indice];
}

function determinarGanador(jugador, pc) {
  if (jugador === pc) return "empate";

  if (
    (jugador === "piedra" && pc === "tijeras") ||
    (jugador === "papel" && pc === "piedra") ||
    (jugador === "tijeras" && pc === "papel")
  ) {
    return "jugador";
  }

  return "pc";
}

function actualizarPuntaje(ganador) {
  if (ganador === "jugador") {
    scoreJugador++;
    document.getElementById("score-jugador").textContent = scoreJugador;
  } else if (ganador === "pc") {
    scorePc++;
    document.getElementById("score-pc").textContent = scorePc;
  } else {
    scoreEmpates++;
    document.getElementById("score-empates").textContent = scoreEmpates;
  }
}

function mostrarResultado(ganador) {
  const div = document.getElementById("mensaje-resultado");

  div.classList.remove("ganaste", "perdiste", "empate");

  if (ganador === "jugador") {
    div.textContent = "🎉 ¡Ganaste!";
    div.classList.add("ganaste");
  } else if (ganador === "pc") {
    div.textContent = "💻 Perdiste";
    div.classList.add("perdiste");
  } else {
    div.textContent = "🤝 Empate";
    div.classList.add("empate");
  }
}

function jugar(opcionJugador) {
  const opcionPc = eleccionPC();

  document.getElementById("emoji-jugador").textContent = EMOJIS[opcionJugador];
  document.getElementById("emoji-pc").textContent = EMOJIS[opcionPc];

  const ganador = determinarGanador(opcionJugador, opcionPc);

  actualizarPuntaje(ganador);
  mostrarResultado(ganador);
}

// botones
document.querySelectorAll(".btn-opcion").forEach(btn => {
  btn.addEventListener("click", () => {
    jugar(btn.dataset.opcion);
  });
});

// reiniciar
document.getElementById("btn-reiniciar").addEventListener("click", () => {
  scoreJugador = 0;
  scorePc = 0;
  scoreEmpates = 0;

  document.getElementById("score-jugador").textContent = "0";
  document.getElementById("score-pc").textContent = "0";
  document.getElementById("score-empates").textContent = "0";

  document.getElementById("emoji-jugador").textContent = "❓";
  document.getElementById("emoji-pc").textContent = "❓";

  const div = document.getElementById("mensaje-resultado");
  div.textContent = "";
  div.classList.remove("ganaste", "perdiste", "empate");
});