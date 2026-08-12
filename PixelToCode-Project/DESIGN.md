# Sistema de Diseño PixelToCode (Design System Specification)

Bienvenido a la documentación oficial del sistema de diseño para **PixelToCode**. Este documento sirve como guía de referencia arquitectónica y visual para implementar la interfaz de usuario utilizando **HTML5, CSS Vanilla / Tailwind CSS y JavaScript**.

---

## 1. Visión General y Filosofía de Diseño

El sistema de diseño de **PixelToCode** está construido bajo una estética **"Educacional-Modernista"**, fusionando la precisión técnica de un editor de código moderno con la vitalidad creativa de un estudio de diseño interactivo. 

Está diseñado específicamente para diseñadores gráficos y desarrolladores frontend en aprendizaje, ofreciendo una experiencia que se siente técnicamente potente pero limpia, accesible y no intimidante.

### Principios Fundamentales:
* **Minimalismo con Acentos Táctiles:** Uso generoso del espacio en blanco (whitespace) para reducir la carga cognitiva, combinado con bordes sutiles de baja elevación.
* **Jerarquía Tipográfica Clara:** Distinción nula de ambigüedad entre interfaz general (Inter) y fragmentos técnicos/código (JetBrains Mono).
* **Feedback Dinámico:** Microinteracciones fluidas (`hover:border-primary`, desplazamientos de 2px en hover, animaciones de escala al calcular) que indican estado y salubridad del sistema.

---

## 2. Paleta de Colores y Tokens

El esquema cromático utiliza un enfoque basado en Material Design 3 con un alto contraste y roles bien definidos entre acciones primarias, validaciones/lógica y superficies.

### 2.1 Colores Principales

| Rol | Nombre de Token | Valor HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Primary** | `--color-primary` | `#630ED4` / `#7C3AED` | Acciones principales, marcas activas, bordes en foco y enlaces. |
| **On Primary** | `--color-on-primary` | `#FFFFFF` | Texto sobre fondos primarios. |
| **Primary Container** | `--color-primary-container` | `#7C3AED` | Fondo de elementos destacados y estados activos de navegación. |
| **On Primary Container** | `--color-on-primary-container` | `#EDE0FF` | Texto/iconos dentro de contenedores primarios. |
| **Secondary** | `--color-secondary` | `#006C49` / `#10B981` | Botones de acción secundaria, indicadores de éxito y salud del sistema. |
| **On Secondary** | `--color-on-secondary` | `#FFFFFF` | Texto sobre elementos secundarios. |
| **Secondary Container**| `--color-secondary-container` | `#6CF8BB` | Contenedores de éxito o badges secundarios. |
| **On Secondary Container**| `--color-on-secondary-container`| `#00714D` | Texto en contenedores secundarios. |
| **Tertiary** | `--color-tertiary` | `#7D3D00` | Acentos complementarios o advertencias de nivel medio. |
| **Error** | `--color-error` | `#BA1A1A` | Estados de error o validaciones fallidas. |

### 2.2 Superficies y Neutros

| Rol de Superficie | Token CSS | Valor HEX | Descripción / Uso |
| :--- | :--- | :--- | :--- |
| **Background** | `--color-background` | `#F8F9FA` | Fondo principal de la aplicación. |
| **On Background** | `--color-on-background` | `#191C1D` | Color principal de texto (Charcoal profundo). |
| **Surface** | `--color-surface` | `#F8F9FA` | Superficie base de barras y cabeceras. |
| **Surface Container Lowest**| `--color-surface-container-lowest` | `#FFFFFF` | Fondo blanco puro para tarjetas e inputs. |
| **Surface Container Low** | `--color-surface-container-low` | `#F3F4F5` | Fondo de barras laterales y chips inactivos. |
| **Surface Container** | `--color-surface-container` | `#EDEEEF` | Fondo de cajas de resultados o secciones. |
| **Surface Container High**| `--color-surface-container-high` | `#E7E8E9` | Fondos al pasar el cursor (hover en ítems). |
| **Inverse Surface** | `--color-inverse-surface` | `#2E3132` | Tarjetas de código o snippets oscuros de alto contraste. |
| **On Surface Variant** | `--color-on-surface-variant` | `#4A4455` | Texto secundario y descripciones de tarjetas. |
| **Outline** | `--color-outline` | `#7B7487` | Iconos inactivos o bordes secundarios. |
| **Outline Variant** | `--color-outline-variant` | `#CCC3D8` / `#E5E7EB` | Líneas divisorias y bordes por defecto de tarjetas e inputs. |

---

## 3. Tipografía

El sistema utiliza dos familias tipográficas de Google Fonts:
1. **Inter:** Para toda la interfaz de usuario, títulos, descripciones y botones.
2. **JetBrains Mono:** Para etiquetas de código, números de entrada/salida de conversores y fragmentos sintácticos.

### Importación HTML / CSS
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
```

### Escala Tipográfica (Tokens)

| Token Tipográfico | Fuente | Tamaño | Peso | Line Height | Letter Spacing | Uso |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | Inter | 48px (3rem) | 800 (ExtraBold) | 1.2 | -0.02em | Títulos de gran impacto / H1 |
| `headline-lg` | Inter | 32px (2rem) | 700 (Bold) | 1.25 | Normal | Encabezados de páginas en Desktop / H2 |
| `headline-lg-mobile`| Inter | 24px (1.5rem)| 700 (Bold) | 1.3 | Normal | Encabezados de páginas en Mobile |
| `headline-md` | Inter | 20px (1.25rem)| 600 (SemiBold) | 1.4 | Normal | Títulos de tarjetas y secciones / H3 |
| `body-lg` | Inter | 18px (1.125rem)| 400 (Regular) | 1.6 | Normal | Párrafos introductorios |
| `body-md` | Inter | 16px (1rem) | 400 (Regular) | 1.5 | Normal | Texto de cuerpo estándar y opciones |
| `label-code` | JetBrains Mono| 14px (0.875rem)| 500 (Medium) | 1.4 | Normal | Entradas numéricas, código y valores |
| `label-caps` | Inter | 12px (0.75rem)| 600 (SemiBold) | 1.0 | 0.05em | Categorías, etiquetas superiores (uppercase) |

---

## 4. Retícula, Layout y Espaciado

La maquetación sigue una retícula fluida basada en un sistema rítmico de **8px**.

### Parámetros Principales de Layout:
* **Unidad Base:** `8px`
* **Ancho Máximo del Contenedor (`container-max-width`):** `1280px`
* **Margen Lateral Mobile (`margin-mobile`):** `16px`
* **Margen Lateral Desktop (`margin-desktop`):** `40px`
* **Separación de Columnas (`gutter`):** `24px`

### Estructura Responsive (Breakpoints):
1. **Mobile (0px - 767px):** 1 columna. Layout apilado. Navegación mediante Header fijo superior (`h-16`) y Bottom Navigation Bar fijo inferior.
2. **Tablet (768px - 1023px):** Grid de 2 columnas para tarjetas y utilidades.
3. **Desktop (1024px+):** Layout de 3 áreas / columnas. Sidebar fijo a la izquierda (`w-64` / 256px de ancho), Main Content Stage ajustado a la derecha (`lg:ml-64`).

---

## 5. Formas, Elevación y Transiciones

### Radios de Borde (Border Radius):
* **Pequeño (`rounded-sm`):** `4px` (`0.25rem`) - Badges o tags pequeños.
* **Estándar (`rounded-lg`):** `8px` (`0.5rem`) - Botones, inputs, dropdowns y botones de control.
* **Mediano (`rounded-xl`):** `12px` (`0.75rem`) - Tarjetas de herramientas y paneles principales.
* **Grande (`rounded-2xl`):** `16px` (`1rem`) - Contenedores principales o modales.
* **Píldora (`rounded-full`):** `9999px` - Avatares, botones circulares e indicadores de estado.

### Elevación y Profundidad:
En lugar de sombras oscuras pesadas, el sistema utiliza **Capas Tonales con Bordes de Bajo Contraste**:
* **Capa Base (Tier 0):** Fondo `#F8F9FA`.
* **Capa Paneles/Tarjetas (Tier 1):** `#FFFFFF` con borde `1px solid #CCC3D8` (`outline-variant`).
* **Interacción de Enfoque/Hover:** En hover, las tarjetas se desplazan `-2px` en el eje Y (`transform: translateY(-2px)`) y su borde cambia de `#CCC3D8` a `#7C3AED` (`primary`).
* **Campos Focus:** Transición del borde de `1px` gris a `1px` o `2px` sólido Violeta Primario con un anillo suave de foco.

---

## 6. Especificación de Componentes

### 6.1 Barra de Navegación Lateral (Desktop Sidebar)
* **Ancho:** `256px` (`w-64`), posición fija (`fixed left-0 top-0 h-full`).
* **Fondo:** `surface-container-low` (`#F3F4F5`) con borde derecho `1px solid outline-variant`.
* **Elemento Activo:** Fondo `primary-container` (`#7C3AED`), texto `on-primary-container` (`#EDE0FF`), peso `700`, con ligera traducción hacia la derecha (`translate-x-1`).
* **Elemento Inactivo:** Texto `on-surface-variant` (`#4A4455`), hover con fondo `surface-container-high` (`#E7E8E9`).

### 6.2 Botones
* **Botón Primario:**
  * Fondo: `#630ED4` / `#7C3AED`
  * Texto: `#FFFFFF` (Bold)
  * Radio: `8px`
  * Altura: `48px` (`h-12`)
  * Hover: Fondo `#5A00C6` / `#7C3AED` con transición de color.
  * Active: `scale(0.95)` o ligera reducción de opacidad.
* **Botón Secundario (Acción / Convertir):**
  * Fondo: `#006C49` (Verde Mint)
  * Texto: `#FFFFFF` (Bold)
  * Icono: `Material Symbols Outlined` (ej. `sync_alt`)
  * Hover: Fondo `#4EDEA3` o opacidad ajustada.
* **Botón de Icono (Ghost Button):**
  * Tamaño: `40px x 40px` (`rounded-full`)
  * Hover: Fondo `surface-container-high` (`#E7E8E9`)

### 6.3 Campos de Entrada (Inputs y Selects)
* **Altura Mínima:** `48px` (`h-12`)
* **Label Superior:** En estilo `label-caps` (Inter, 12px, SemiBold, Mayúsculas, color `on-surface-variant`).
* **Borde:** `1px solid #CCC3D8`.
* **Focus State:** Borde cambia a `#7C3AED` con `ring-1 ring-[#7C3AED]`.
* **Fuente en Input Numérico:** `JetBrains Mono` (`label-code`).

### 6.4 Tarjetas de Herramientas (Tool Cards)
* **Estructura:** Flex col, padding `24px` (`p-6`), fondo `#FFFFFF`, borde `1px solid #CCC3D8`, radio `12px` (`rounded-xl`).
* **Icono de Cabecera:** Contenedor `48px x 48px` (`w-12 h-12`) con radio `8px`, fondo `surface-container-low`. En hover, el fondo cambia a `primary-container` y el icono a `primary`.
* **Efecto Hover:** `transform: translateY(-2px); border-color: #7C3AED;`.

### 6.5 Caja de Resultados (Result Display Area)
* **Fondo:** `surface-container` (`#EDEEEF`)
* **Borde:** `1px solid #CCC3D8`
* **Valor Principal:** `JetBrains Mono` de 32px (`text-[32px]`), peso `500`, color `primary` (`#630ED4`).
* **Subtexto:** Inter 12px (`label-caps`), color `on-surface-variant`.

---

## 7. Referencia de Implementación CSS Vanilla

A continuación se incluye el bloque CSS `:root` con todos los tokens listos para incluir en un archivo `styles.css`:

```css
/* ==========================================================================
   PixelToCode Design Tokens - Vanilla CSS
   ========================================================================== */

:root {
  /* Colors - Primary */
  --color-primary: #630ed4;
  --color-primary-container: #7c3aed;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #ede0ff;
  --color-primary-fixed-dim: #d2bbff;

  /* Colors - Secondary */
  --color-secondary: #006c49;
  --color-secondary-container: #6cf8bb;
  --color-on-secondary: #ffffff;
  --color-on-secondary-container: #00714d;
  --color-secondary-fixed-dim: #4edea3;

  /* Colors - Tertiary & Error */
  --color-tertiary: #7d3d00;
  --color-tertiary-container: #a15100;
  --color-error: #ba1a1a;
  --color-error-container: #ffdad6;

  /* Colors - Neutral & Surface Tiers */
  --color-background: #f8f9fa;
  --color-on-background: #191c1d;
  --color-surface: #f8f9fa;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f4f5;
  --color-surface-container: #edeeef;
  --color-surface-container-high: #e7e8e9;
  --color-surface-container-highest: #e1e3e4;
  --color-inverse-surface: #2e3132;
  --color-on-surface: #191c1d;
  --color-on-surface-variant: #4a4455;
  --color-outline: #7b7487;
  --color-outline-variant: #ccc3d8;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --spacing-base: 8px;
  --spacing-margin-mobile: 16px;
  --spacing-margin-desktop: 40px;
  --spacing-gutter: 24px;
  --container-max-width: 1280px;

  /* Border Radius */
  --radius-sm: 0.25rem; /* 4px */
  --radius-md: 0.5rem;  /* 8px */
  --radius-lg: 0.75rem; /* 12px */
  --radius-xl: 1rem;    /* 16px */
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base Body Styles */
body {
  background-color: var(--color-background);
  color: var(--color-on-background);
  font-family: var(--font-sans);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
```

---

## 8. Lógica e Interacciones en JavaScript

Para implementar funcionalidades interactivas (como el **Conversor de Unidades CSS**):

1. **Base Pixel Default:** Tomar `16px` como base por defecto para conversiones `rem`/`em`.
2. **Fórmula de Conversión:**
   - De `px` a `rem`/`em`: `valor / basePx`
   - De `rem`/`em` a `px`: `valor * basePx`
   - De `%` a `px`: `(valor / 100) * basePx`
3. **Feedback Visual:** Al calcular un resultado, aplicar una micro-animación de escala en la caja del resultado:
   ```javascript
   resultElement.style.transform = 'scale(1.08)';
   setTimeout(() => { resultElement.style.transform = 'scale(1)'; }, 150);
   ```
4. **Soporte Teclado:** Permitir el cálculo al presionar la tecla `Enter` desde el campo de entrada (`inputValue`).

---
*Documento generado automáticamente a partir del análisis del proyecto Stitch PixelToCode.*
