# ⚖️ Mini-Proyecto 04: Calculadora de IMC

**Tiempo estimado:** ~45 minutos

---

## 🎯 ¿Qué vas a construir?

Una calculadora del Índice de Masa Corporal (IMC) que recibe el peso, altura y edad del usuario, calcula su IMC y muestra la categoría (Bajo peso, Normal, Sobrepeso, Obesidad) con una barra visual de referencia.

**Fórmula del IMC:**

```
IMC = peso (kg) / altura² (m)
```

Por ejemplo: una persona de 70 kg y 1.75 m tiene un IMC de:

```
70 / (1.75 × 1.75) = 70 / 3.0625 ≈ 22.9 → Normal ✅
```

---

## 📁 Archivos del proyecto

```
04-calculadora-imc/
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
}
```

### PASO 4 — Contenedor principal

```css
#app {
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  color: #2d3748;
  margin-bottom: 0.3rem;
}

#subtitulo {
  text-align: center;
  color: #718096;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}
```

### PASO 5 — Campos del formulario

```css
.campo {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

input[type="number"] {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.2s;
  outline: none;
}

input[type="number"]:focus {
  border-color: #667eea;
}

#grupo-sexo {
  display: flex;
  gap: 1.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  font-weight: normal;
  color: #4a5568;
}
```

### PASO 6 — Botón calcular

```css
#btn-calcular {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition:
    opacity 0.2s,
    transform 0.1s;
  margin-top: 0.5rem;
}

#btn-calcular:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

### PASO 7 — Sección resultado

```css
#resultado {
  text-align: center;
}

#imc-valor {
  font-size: 4rem;
  font-weight: bold;
  color: #2d3748;
  line-height: 1;
  margin-bottom: 0.5rem;
}

#imc-categoria {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  display: inline-block;
}

.cat-bajo-peso {
  background-color: #bee3f8;
  color: #2b6cb0;
}
.cat-normal {
  background-color: #c6f6d5;
  color: #276749;
}
.cat-sobrepeso {
  background-color: #fefcbf;
  color: #744210;
}
.cat-obesidad {
  background-color: #fed7d7;
  color: #9b2c2c;
}
```

### PASO 8 — Barra de IMC

```css
#barra-imc {
  position: relative;
  height: 16px;
  border-radius: 10px;
  background: linear-gradient(to right, #63b3ed, #68d391, #f6e05e, #fc8181);
  margin: 1rem 0;
  overflow: visible;
}

#indicador {
  position: absolute;
  top: -6px;
  width: 4px;
  height: 28px;
  background-color: #2d3748;
  border-radius: 2px;
  transform: translateX(-50%);
  transition: left 0.5s ease;
  left: 0%;
}
```

### PASO 9 — Tabla de categorías y botón limpiar

```css
#tabla-categorias {
  text-align: left;
  margin-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
}

#tabla-categorias p {
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.cat {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 0.5rem;
}

.bajo-peso {
  background-color: #bee3f8;
  color: #2b6cb0;
}
.normal {
  background-color: #c6f6d5;
  color: #276749;
}
.sobrepeso {
  background-color: #fefcbf;
  color: #744210;
}
.obesidad {
  background-color: #fed7d7;
  color: #9b2c2c;
}

#btn-limpiar {
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.7rem;
  background-color: transparent;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  color: #718096;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
}

#btn-limpiar:hover {
  border-color: #667eea;
  color: #667eea;
}
```

---

### PASO 10 — Referencias del DOM (app.js)

```javascript
const formulario = document.getElementById("formulario-imc");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const inputEdad = document.getElementById("edad");

const divResultado = document.getElementById("resultado");
const divImcValor = document.getElementById("imc-valor");
const divImcCategoria = document.getElementById("imc-categoria");
const indicador = document.getElementById("indicador");

const btnLimpiar = document.getElementById("btn-limpiar");
```

### PASO 11 — Función calcularIMC

```javascript
function calcularIMC(peso, alturaMetros) {
  // Fórmula: IMC = peso / (altura en metros al cuadrado)
  const imc = peso / (alturaMetros * alturaMetros);
  // toFixed(1) → redondea a 1 decimal
  return parseFloat(imc.toFixed(1));
}
```

### PASO 12 — Función obtenerCategoria

```javascript
function obtenerCategoria(imc) {
  if (imc < 18.5) {
    return { nombre: "Bajo peso", clase: "cat-bajo-peso" };
  } else if (imc < 25) {
    return { nombre: "Normal ✅", clase: "cat-normal" };
  } else if (imc < 30) {
    return { nombre: "Sobrepeso ⚠️", clase: "cat-sobrepeso" };
  } else {
    return { nombre: "Obesidad 🔴", clase: "cat-obesidad" };
  }
}
```

### PASO 13 — Función posicionarIndicador

Esta función mueve el triángulo indicador en la barra de colores:

```javascript
function posicionarIndicador(imc) {
  // La barra representa de 10 a 40 de IMC
  // Convertimos el IMC a un porcentaje dentro de ese rango
  const minIMC = 10;
  const maxIMC = 40;

  let porcentaje = ((imc - minIMC) / (maxIMC - minIMC)) * 100;

  // Aseguramos que el porcentaje esté entre 0 y 100
  porcentaje = Math.max(0, Math.min(100, porcentaje));

  indicador.style.left = porcentaje + "%";
}
```

### PASO 14 — Función mostrarResultado

```javascript
function mostrarResultado(imc) {
  const categoria = obtenerCategoria(imc);

  // Mostrar el valor del IMC
  divImcValor.textContent = imc;

  // Mostrar la categoría con su clase de color
  divImcCategoria.textContent = categoria.nombre;
  divImcCategoria.className = categoria.clase; // reemplaza todas las clases

  // Posicionar el indicador en la barra
  posicionarIndicador(imc);

  // Ocultar formulario y mostrar resultado
  formulario.style.display = "none";
  divResultado.style.display = "block";
}
```

### PASO 15 — Evento submit del formulario

```javascript
formulario.addEventListener("submit", function (event) {
  // Previene que la página se recargue al enviar el formulario
  event.preventDefault();

  // Leer valores de los inputs
  const peso = parseFloat(inputPeso.value);
  const alturaCm = parseFloat(inputAltura.value);
  const edad = parseInt(inputEdad.value);

  // Validar los datos
  if (isNaN(peso) || peso <= 0 || peso > 300) {
    alert("⚠️ Ingresa un peso válido (entre 1 y 300 kg)");
    return;
  }
  if (isNaN(alturaCm) || alturaCm < 50 || alturaCm > 250) {
    alert("⚠️ Ingresa una altura válida (entre 50 y 250 cm)");
    return;
  }
  if (isNaN(edad) || edad < 1 || edad > 120) {
    alert("⚠️ Ingresa una edad válida");
    return;
  }

  // Convertir altura de cm a metros
  const alturaMetros = alturaCm / 100;

  // Calcular y mostrar el IMC
  const imc = calcularIMC(peso, alturaMetros);
  mostrarResultado(imc);
});
```

> 💡 **`event.preventDefault()`** evita el comportamiento predeterminado del formulario (que recargaría la página). Siempre úsalo cuando manejes formularios con JavaScript.

### PASO 16 — Botón "Calcular de nuevo"

```javascript
btnLimpiar.addEventListener("click", function () {
  // Limpiar los inputs
  inputPeso.value = "";
  inputAltura.value = "";
  inputEdad.value = "";

  // Restablecer el indicador
  indicador.style.left = "0%";

  // Mostrar formulario y ocultar resultado
  formulario.style.display = "block";
  divResultado.style.display = "none";
});
```

---

### PASO 17 — ¡Prueba tu proyecto!

1. Guarda todos los archivos.
2. Abre `index.html` en el navegador.
3. Ingresa: peso=70, altura=175, edad=25.
4. El resultado debería mostrar aproximadamente **22.9** y la categoría **Normal**.

---

## 🌟 Retos extra (opcional)

- **Recomendaciones:** Agrega un texto personalizado según la categoría (ej. "¡Sigue así!", "Considera consultar a un médico").
- **Peso ideal:** Calcula y muestra el rango de peso saludable para la altura del usuario.
- **Gráfica histórica:** Guarda varias mediciones en `localStorage` y muéstralas en una tabla.

---

## 🔍 Conceptos aprendidos

| Concepto                       | Descripción                                                     |
| ------------------------------ | --------------------------------------------------------------- |
| Evento `submit`                | Detectar el envío de un formulario                              |
| `event.preventDefault()`       | Cancelar el comportamiento predeterminado                       |
| `parseInt()` vs `parseFloat()` | Convertir texto a número entero o decimal                       |
| Validación de datos            | Verificar que los datos sean correctos antes de usarlos         |
| `style.display`                | Mostrar u ocultar elementos con JavaScript                      |
| `element.className`            | Asignar una clase directamente (reemplaza todas las anteriores) |
| Operadores matemáticos         | `*`, `/`, `**` (potencia) en fórmulas                           |
| `Math.max()` / `Math.min()`    | Obtener el mayor/menor de dos valores                           |
