/* ==========================================================
   EXAMEN PARCIAL 1 — DISEÑO WEB 2 — USAP
   Archivo: examen1_base.js

   INSTRUCCIONES:
   - NO borres el código existente.
   - Escribe tu código SOLO en las secciones marcadas
     con // TAREA X
   - Usa los IDs y clases indicados en cada comentario.
   ========================================================== */

"use strict";

/* ----------------------------------------------------------
   ESPERAR A QUE EL DOM ESTÉ COMPLETAMENTE CARGADO
   (No modificar esta línea)
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

    /* ========================================================
       TAREA 4 — CAPTURAR EVENTO CON JAVASCRIPT
       ========================================================
       INSTRUCCIÓN:
       Escribe el código para capturar el evento "click"
       sobre el botón con id "btn-mostrar".

       Cuando el usuario haga clic, debe cambiar el texto del
       elemento con id "mensaje-resultado" a:
           "¡Evento capturado correctamente!"

       Pasos:
         1. Selecciona el botón con getElementById
         2. Usa addEventListener con el evento 'click'
         3. Dentro del callback, selecciona el párrafo #mensaje-resultado
         4. Cambia su textContent al texto indicado

       Ejemplo de estructura (complétalo tú):
         let boton = document.getElementById("...");
         boton.addEventListener("click", function () {
             let mensaje = document.getElementById("...");
             mensaje.textContent = "...";
         });
    ======================================================== */

    // TAREA 4 — Escribe tu código AQUÍ ↓

let boton = document.getElementById("btn-mostrar");

boton.addEventListener("click", function () {

    let mensaje = document.getElementById("mensaje-resultado");

    mensaje.textContent = "¡Evento capturado correctamente!";

});
    // FIN TAREA 4


    /* ========================================================
       TAREA 5 — GENERAR CONTENIDO CON JAVASCRIPT
       ========================================================
       INSTRUCCIÓN:
       Escribe el código para crear dinámicamente 3 elementos
       <li> e insertarlos dentro del elemento <ul id="lista-habilidades">.

       Los tres elementos deben tener el siguiente texto:
         1. "HTML5 Semántico"
         2. "CSS3 Avanzado"
         3. "JavaScript DOM"

       Pasos para CADA elemento:
         1. Selecciona el <ul> con getElementById
         2. Crea un nuevo elemento <li> con createElement
         3. Asígnale el texto con textContent
         4. Insértalo al final del <ul> con appendChild

       PISTA: puedes hacerlo en 3 bloques separados (uno por item)
       o con un bucle for usando un array de textos.
    ======================================================== */

    // TAREA 5 — Escribe tu código AQUÍ ↓

let lista = document.getElementById("lista-habilidades");

let item1 = document.createElement("li");
item1.textContent = "HTML5 Semántico";
lista.appendChild(item1);

let item2 = document.createElement("li");
item2.textContent = "CSS3 Avanzado";
lista.appendChild(item2);

let item3 = document.createElement("li");
item3.textContent = "JavaScript DOM";
lista.appendChild(item3);
    // FIN TAREA 5

}); // Fin de DOMContentLoaded


/* ----------------------------------------------------------
   TAREA 6 — SELECTORES JQUERY (ID Y CLASE)
   ----------------------------------------------------------
   NOTA: Esta TAREA se ejecuta fuera del DOMContentLoaded
   porque jQuery tiene su propia forma de esperar el DOM: $(function(){})

   INSTRUCCIÓN:
   Usando jQuery, escribe el código para:

   a) Seleccionar el elemento con id "titulo-principal" y
      cambiar su texto a:
          "¡jQuery está funcionando!"

   b) Seleccionar TODOS los elementos con la clase "tarjeta"
      y agregarles la clase "activa".

   Recuerda:
     - En jQuery: $("#mi-id")       → selecciona por ID
     - En jQuery: $(".mi-clase")    → selecciona por clase
     - .text("nuevo texto")         → cambia el texto
     - .addClass("clase")           → agrega una clase

   Ejemplo de estructura (complétalo tú):
     $(function () {
         // a) Seleccionar por ID y cambiar texto:
         $("#...").text("...");

         // b) Seleccionar por clase y agregar clase:
         $("...").addClass("...");
     });
   ---------------------------------------------------------- */

// TAREA 6 — Escribe tu código AQUÍ ↓
$(function () {

    // a) Selector por ID
    $("#titulo-principal").text("¡jQuery está funcionando!");

    // b) Selector por clase
    $(".tarjeta").addClass("activa");

});
// FIN TAREA 6
