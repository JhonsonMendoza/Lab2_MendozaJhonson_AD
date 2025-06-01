# Web Chat en Tiempo Real con Validación de Usuario, UI Mejorada y Lista de Conectados

**Nombre del estudiante:** Jhonson Benigno Mendoza Jaramillo  
**Fecha de entrega:** 30 de mayo de 2025  

---

## 🧠 Introducción

Las aplicaciones en tiempo real son fundamentales en la experiencia web moderna. Este proyecto consiste en la creación de un sistema de **chat interactivo en tiempo real**, con validación de usuarios únicos y una interfaz moderna. Además, se ha incorporado una **lista dinámica de usuarios conectados**, mejorando la interacción y visibilidad dentro del sistema.

El backend se construyó con **Node.js**, **Express** y **Socket.IO**, mientras que el frontend emplea **HTML5**, **JavaScript** y **Bootstrap**, con manejo de sesiones a través de **cookies**.

Este proyecto demuestra cómo tecnologías modernas pueden integrarse para ofrecer una solución eficiente, robusta y con excelente experiencia de usuario sin necesidad de mecanismos de autenticación complejos.

---

## 🧱 Estructura del Proyecto

La organización del proyecto separa claramente el lado del servidor y del cliente.

### 🔌 Backend

- **index.js**  
  Configura el servidor Express, sirve los archivos estáticos desde `/public` y escucha peticiones HTTP.

- **realTimeServer.js**  
  Maneja la lógica de Socket.IO: conexión, desconexión, validación de nombres únicos y la transmisión de mensajes. También gestiona la **lista actual de usuarios conectados** con un `Set`, que se sincroniza con todos los clientes en tiempo real.

📸 **Vista del servidor configurado:**  
![Servidor Express y Socket.IO](https://imgur.com/JHSNRAO.png)

---

### 💻 Frontend

- **register.html**  
  Página inicial donde el usuario ingresa su nombre con validación activa.

- **register.js**  
  Verifica que el nombre sea válido y se conecta al servidor. Gestiona errores con alertas Bootstrap y guarda el nombre en cookies.

- **index.html**  
  Interfaz principal del chat. Muestra el área de mensajes, formulario de envío y la **lista actualizada de usuarios conectados**.

- **script.js**  
  Se conecta a Socket.IO, renderiza mensajes en tiempo real y actualiza la lista de usuarios conectados cada vez que alguien entra o sale del chat.

📸 **Vista del formulario de registro:**  
![Formulario Registro](https://imgur.com/NjOzswm.png)

📸 **Vista de usuarios conectados:**  
![Usuarios Conectados](https://imgur.com/ojDZMf4.png)

---

## 🛡️ Validación de Usuario

Antes de acceder al chat, se realiza una validación de dos etapas:

1. **Frontend:**  
   Se comprueba que el nombre no esté vacío ni tenga caracteres inválidos. Se guarda en cookies para reutilizarse.

2. **Backend:**  
   Al intentar conectarse, el servidor revisa si el nombre ya está en uso por otro usuario conectado. Si está duplicado, se rechaza la conexión.

📸 **Validación exitosa:**  
![Validación Exitosa](https://imgur.com/fzdeBUC.png)

📸 **Error por nombre duplicado:**  
![Nombre Repetido](https://imgur.com/fJPUHHY.png)

---

## 💬 Funcionalidad del Chat

- Transmisión de mensajes en tiempo real entre todos los clientes.
- Estilos limpios y adaptables gracias a Bootstrap.
- Visualización inmediata de los nuevos mensajes en pantalla.
- **Lista de usuarios conectados** visible y actualizada automáticamente.

📸 **Chat en acción:**  
![Chat funcionando](https://imgur.com/VUezMoI.png)

📸 **Cookies del usuario:**  
![Cookies de sesión](https://imgur.com/S46WPgt.png)

---

## 👥 Lista Dinámica de Usuarios Conectados

Cada vez que un usuario se conecta o desconecta, el servidor actualiza la lista y la transmite a todos los clientes. Esto permite:

- Ver quién está disponible en tiempo real.
- Evitar duplicidad de nombres de forma visual y lógica.

📸 **Vista de actualización dinámica de usuarios:**  
![Usuarios Conectados](https://imgur.com/tuEjRNu.png)

---

## 🎨 Interfaz de Usuario

Bootstrap permitió una interfaz moderna y funcional con:

- Alertas de error claras.
- Formularios estilizados.
- Responsividad para móviles.
- Diseño limpio y enfocado en la experiencia del usuario.

---

## ✅ Buenas Prácticas y Modularidad

- Separación clara del backend (`realTimeServer.js`) y frontend.
- Limpieza del usuario al desconectarse.
- Persistencia ligera mediante cookies.
- Manejo de errores robusto con Socket.IO.
- Actualización proactiva de la lista de usuarios conectados.

📸 **Código de desconexión con limpieza:**  
![Desconexión](https://imgur.com/gD4Yj0L.png)

---

## 🧪 Instrucciones de Ejecución

1. Clonar el repositorio y entrar al proyecto:
   ```bash
   git clone <url-del-repo>
   cd nombre-del-proyecto





## ✅ Comprobación de Código

Tanto el cliente como el servidor usan buenas prácticas, incluyendo:

- Modularización del backend (`realTimeServer.js` separado).
- Limpieza de usuarios al desconectarse.
- Uso de cookies para persistencia.
- Manejo de errores en eventos de Socket.IO.

📸 **Snippet de desconexión y limpieza:**  
![Desconexión](https://imgur.com/gD4Yj0L.png)

---

## Instrucciones de Ejecución

### Para ejecutar localmente

1. Clonar el repositorio y entrar en la carpeta del proyecto.  
2. Instalar dependencias:  
   ```bash
   npm install

---

## 📌 Conclusiones

Este proyecto permitió desarrollar un sistema de chat funcional en tiempo real, con validación de identidad, UI moderna y manejo de sesiones. La incorporación de una lista de usuarios conectados llevó la experiencia a un nivel más interactivo, permitiendo a los participantes visualizar en todo momento quién está presente.

El desarrollo ofreció valiosas lecciones técnicas, como el control de nombres únicos, la sincronización entre cliente-servidor y la modularización eficiente del código.

Además, el uso de cookies y Bootstrap facilitó tanto la gestión de sesiones como la creación de una interfaz agradable sin sobrecargar el sistema. En conjunto, este sistema puede servir como base para desarrollos mayores como chats corporativos, aulas virtuales o plataformas de soporte en vivo.

En definitiva, este proyecto no solo permitió explorar aspectos técnicos importantes, sino también reforzar prácticas de diseño de interfaces, validación de entradas y sincronización entre múltiples componentes. Este tipo de sistemas puede ser la base para aplicaciones más grandes, como sistemas de soporte, chats empresariales o herramientas colaborativas.

---

## 📚 Referencias

- Brown, A. (2021). *Modern UI frameworks: Building accessible and responsive web apps*. TechPress.  
- Garcia, M., & Lee, S. (2022). *Best practices in real-time web development*. WebDev Publications.  
- Jones, T., & Silver, R. (2020). *Real-time communication with WebSockets*. Network Press.  
- Smith, J. (2019). *Session management in web applications*. Web Security Journal, 12(3), 45-59.

---

## 🖼️ Recursos Externos (Imágenes)

Puedes subir imágenes a [Imgur](https://imgur.com/), [PostImage](https://postimages.org/), [GitHub](https://github.com/) o [Cloudinary](https://cloudinary.com/) y pegar los enlaces en los espacios proporcionados arriba.  
Para insertar una imagen, usa esta sintaxis en Markdown:

```markdown
![Descripción de la imagen](https://link_de_la_imagen.png)
