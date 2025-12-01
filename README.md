# To-Do App — Aplicación Web (HTML, CSS, JS + LocalStorage)

Aplicación web tipo *To-Do List* con gestión de tareas por fecha, selector de color, persistencia en `localStorage` y diseño 100% responsive.  
Permite añadir tareas, marcarlas como completadas, eliminarlas con clic derecho, cambiar el color del tema y organizar tus tareas según el día seleccionado.

Este proyecto forma parte de mi portfolio como Ingeniera de Software.

---


## Características principales

### Gestión de tareas por fecha
- Cada día posee su propio listado independiente.  
- Las tareas se cargan según la fecha seleccionada.  
- Selector de calendario integrado.  
- El estado queda guardado automáticamente.

### Persistencia con LocalStorage
- Las tareas se guardan de manera local por fecha.  
- Persisten aunque se cierre el navegador.  
- No requiere backend.  

### Personalización visual mediante Color Picker
- Selector de color para personalizar el tema principal.  
- Cambios aplicados dinámicamente con variables CSS (`--main-color`).  

### Interacción intuitiva
- Clic izquierdo → completa una tarea.  
- Clic derecho → elimina una tarea.  
- Renderizado dinámico de la lista.  

### UI moderna y totalmente responsive
- Adaptada a móvil, tablet y escritorio.  
- Tipografías fluidas y diseño minimalista.  
- Contenedores flexibles.


## Arquitectura Frontend
/src
├── index.html → Estructura principal del To-Do App
├── js/
│ └── script.js → Lógica de tareas, calendario y color picker
└── css/
└── style.css → Estilos, responsive y variables CSS

---

## Tecnologías utilizadas

### Frontend
| Tecnología | Uso |
|-----------|------|
| **HTML5** | Estructura general |
| **CSS3** | Estilos y responsive |
| **JavaScript (ES6)** | Lógica e interacción |
| **LocalStorage** | Persistencia de tareas |


---

## Autora
**Lucía Zayas Martín**  
Ingeniera de Software — Full-Stack & Mobile Developer  
🔗 www.linkedin.com/in/lucia-zayas-317833254

