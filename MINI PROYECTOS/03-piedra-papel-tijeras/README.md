# ✊✋✌️ Mini-Proyecto 03: Piedra, Papel o Tijeras

**Tiempo estimado:** ~50 minutos

---

## 🎯 ¿Qué vas a construir?

El clásico juego de Piedra, Papel o Tijeras contra la computadora. El jugador hace clic en su elección, la PC elige aleatoriamente, y el juego determina quién gana. Se lleva un marcador de victorias, derrotas y empates.

**Reglas:**

- ✊ Piedra gana a ✌️ Tijeras
- ✋ Papel gana a ✊ Piedra
- ✌️ Tijeras gana a ✋ Papel

---

## 📁 Archivos del proyecto

```
03-piedra-papel-tijeras/
├── index.html   ← Estructura HTML (ya está creada)
├── styles.css   ← Estilos CSS (tú los completas)
├── app.js       ← Lógica JavaScript (tú la completas)
└── README.md    ← Este archivo
```

---

## 🗺️ Pasos para completar el proyecto

### PASO 1 — Conectar el CSS

En el `<head>` de `index.html`:

```html
<link rel="stylesheet" href="styles.css" />
```

### PASO 2 — Conectar el JS

Antes del `</body>`:

```html
<script src="app.js"></script>
```

---

### PASO 3 — Estilos generales (styles.css)

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
```

### PASO 4 — Contenedor principal

```css
#app {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
```

### PASO 5 — Marcador

```css
#marcador {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.puntaje {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nombre {
  font-size: 0.9rem;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.numero {
  font-size: 2.5rem;
  font-weight: bold;
  color: #68d391;
}
```

### PASO 6 — Arena del juego

```css
#arena {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
}

#emoji-jugador,
#emoji-pc {
  font-size: 4rem;
  display: block;
  margin-top: 0.5rem;
}

#vs {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e2e8f0;
}
```

### PASO 7 — Mensaje de resultado

```css
#mensaje-resultado {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

#mensaje-resultado.ganaste {
  background-color: rgba(72, 187, 120, 0.2);
  border: 2px solid #48bb78;
  color: #68d391;
}

#mensaje-resultado.perdiste {
  background-color: rgba(245, 101, 101, 0.2);
  border: 2px solid #f56565;
  color: #fc8181;
}

#mensaje-resultado.empate {
  background-color: rgba(237, 137, 54, 0.2);
  border: 2px solid #ed8936;
  color: #fbd38d;
}
```

### PASO 8 — Botones de opción

```css
#botones {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.btn-opcion {
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-opcion:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.btn-opcion:active {
  transform: scale(0.95);
}
```

### PASO 9 — Botón reiniciar

```css
#btn-reiniciar {
  background-color: transparent;
  border: 1px solid #718096;
  color: #a0aec0;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

#btn-reiniciar:hover {
  border-color: #a0aec0;
  color: white;
}
```

---

### PASO 10 — Constantes del juego (app.js)

```javascript
// Las opciones disponibles
const OPCIONES = ["piedra", "papel", "tijeras"];

// Emojis para mostrar en pantalla
const EMOJIS = {
  piedra: "✊",
  papel: "✋",
  tijeras: "✌️",
};

// Puntajes (variables que cambian durante el juego)
let scoreJugador = 0;
let scorePc = 0;
let scoreEmpates = 0;
```

### PASO 11 — Función eleccionPC

```javascript
function eleccionPC() {
  // Genera un número entre 0 y 2 para elegir del array
  const indice = Math.floor(Math.random() * OPCIONES.length);
  return OPCIONES[indice];
}
```

### PASO 12 — Función determinarGanador

```javascript
function determinarGanador(jugador, pc) {
  // Si son iguales, es empate
  if (jugador === pc) return "empate";

  // Las combinaciones donde gana el jugador
  if (
    (jugador === "piedra" && pc === "tijeras") ||
    (jugador === "papel" && pc === "piedra") ||
    (jugador === "tijeras" && pc === "papel")
  ) {
    return "jugador";
  }

  // Si no es empate ni gana el jugador, gana la PC
  return "pc";
}
```

> 💡 El `||` en JavaScript significa **O (OR)**. La condición es verdadera si CUALQUIERA de las partes es verdadera.

### PASO 13 — Función mostrarResultado

```javascript
function mostrarResultado(ganador, jugador, pc) {
  const divMensaje = document.getElementById("mensaje-resultado");

  // Limpiar clases anteriores
  divMensaje.classList.remove("ganaste", "perdiste", "empate");

  if (ganador === "jugador") {
    divMensaje.textContent = "🎉 ¡Ganaste!";
    divMensaje.classList.add("ganaste");
  } else if (ganador === "pc") {
    divMensaje.textContent = "💻 La PC ganó esta vez";
    divMensaje.classList.add("perdiste");
  } else {
    divMensaje.textContent = "🤝 ¡Empate!";
    divMensaje.classList.add("empate");
  }
}
```

### PASO 14 — Función actualizarPuntaje

```javascript
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
```

### PASO 15 — Función jugar (función principal)

```javascript
function jugar(opcionJugador) {
  // 1. La PC elige
  const opcionPc = eleccionPC();

  // 2. Mostrar los emojis
  document.getElementById("emoji-jugador").textContent = EMOJIS[opcionJugador];
  document.getElementById("emoji-pc").textContent = EMOJIS[opcionPc];

  // 3. Determinar ganador
  const ganador = determinarGanador(opcionJugador, opcionPc);

  // 4. Actualizar puntaje
  actualizarPuntaje(ganador);

  // 5. Mostrar resultado
  mostrarResultado(ganador, opcionJugador, opcionPc);
}
```

### PASO 16 — Eventos de los botones

```javascript
// Seleccionar todos los botones de opción
const botonesOpcion = document.querySelectorAll(".btn-opcion");

// Agregar evento a cada botón
botonesOpcion.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // dataset.opcion lee el atributo data-opcion del HTML
    const opcion = boton.dataset.opcion;
    jugar(opcion);
  });
});

// Botón reiniciar
const btnReiniciar = document.getElementById("btn-reiniciar");
btnReiniciar.addEventListener("click", function () {
  scoreJugador = 0;
  scorePc = 0;
  scoreEmpates = 0;
  document.getElementById("score-jugador").textContent = "0";
  document.getElementById("score-pc").textContent = "0";
  document.getElementById("score-empates").textContent = "0";
  document.getElementById("emoji-jugador").textContent = "❓";
  document.getElementById("emoji-pc").textContent = "❓";
  const divMensaje = document.getElementById("mensaje-resultado");
  divMensaje.textContent = "";
  divMensaje.classList.remove("ganaste", "perdiste", "empate");
});
```

---

### PASO 17 — ¡Prueba tu proyecto!

1. Guarda todos los archivos.
2. Abre `index.html` en el navegador.
3. Haz clic en Piedra, Papel o Tijeras.
4. ¿Se actualiza el marcador y el resultado? ¡Excelente! 🎉

---

## 🌟 Retos extra (opcional)

- **Mejor de 5:** Termina el juego cuando alguien llegue a 3 victorias.
- **Animación:** Agrega un efecto de "countdown" antes de revelar la elección de la PC.
- **Sonidos:** Usa `new Audio()` para agregar efectos de sonido.

---

## 🔍 Conceptos aprendidos

| Concepto                 | Descripción                                        |
| ------------------------ | -------------------------------------------------- |
| Arrays `[]`              | Lista ordenada de elementos                        |
| Objetos `{}`             | Datos en formato clave-valor                       |
| `if / else if / else`    | Condicionales para tomar decisiones                |
| Operador `&&`            | AND lógico: ambas condiciones deben ser verdaderas |
| Operador `\|\|`          | OR lógico: al menos una condición es verdadera     |
| `querySelectorAll()`     | Selecciona múltiples elementos                     |
| `.forEach()`             | Itera sobre una lista de elementos                 |
| `dataset.propiedad`      | Lee atributos `data-*` de un elemento HTML         |
| `classList.add/remove()` | Agrega o quita clases CSS dinámicamente            |
| Variables globales       | Variables accesibles en todo el script             |
