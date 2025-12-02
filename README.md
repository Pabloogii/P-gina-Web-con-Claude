# Página Web personal

## Dónde está el proyecto
- Carpeta del proyecto: `/workspace/P-gina-Web-con-Claude`.
- Para abrirla en terminal: `cd /workspace/P-gina-Web-con-Claude`.
- Archivos clave: `index.html` (estructura), `style.css` (estilos), `script.js` (interacción) y este `README.md`.

## Cómo ejecutar la página en local
1. Abre una terminal y sitúte en la carpeta del proyecto:
   ```bash
   cd /workspace/P-gina-Web-con-Claude
   ```
2. Inicia un servidor estático (elige una opción):
   - Con Python 3: `python3 -m http.server 8000`
   - Con Node (si tienes npm): `npx serve .`
3. Abre tu navegador en `http://localhost:8000` y recorre la página.

## Qué probar
- Enlaces de navegación: secciones "Asistentes", "Ver trabajos" y "Conversemos" bajan con scroll suave.
- Modal de contacto: abre desde "Contacto" (arriba), cierra con la X, clic fuera o tecla Escape.
- Copiar correo: usa el botón "Copiar correo" y verifica el mensaje de éxito.
- Tarjetas: asistentes y proyectos se abren en nuevas pestañas; revisa que los enlaces sean correctos.

## Notas
- Si un enlace a un asistente muestra "Not Found", inicia sesión en ChatGPT y recarga.
