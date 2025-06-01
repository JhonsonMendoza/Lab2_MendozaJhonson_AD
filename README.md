# Web Chat en Tiempo Real con Validación de Usuario y UI Mejorada

**Nombre del estudiante:** Jhonson Benigno Mendoza Jaramillo  
**Fecha de entrega:** 30 de mayo de 2025  

---

## 🧠 Introducción

Las aplicaciones en tiempo real representan un componente esencial en la experiencia web moderna. Este proyecto tiene como objetivo la creación de un sistema de **chat web interactivo en tiempo real**, que no solo permita la comunicación fluida entre usuarios, sino que garantice una correcta **validación de identidad mediante nombre único**, mejorando la organización y evitando colisiones dentro de la sala de conversación.

El sistema se construyó utilizando **Node.js**, **Express**, y **Socket.IO** en el servidor, mientras que el lado cliente se apoya en **HTML5**, **JavaScript**, y **Bootstrap** para asegurar una interfaz responsiva, clara y moderna. El control de sesiones se gestiona a través de **cookies**, manteniendo la experiencia ligera y funcional.

Este proyecto demuestra cómo el uso conjunto de estas tecnologías puede ofrecer una solución eficaz, robusta y con excelente experiencia de usuario, sin necesidad de sistemas de autenticación complejos.

---

## 🧱 Estructura del Proyecto

La organización de archivos del proyecto sigue una separación clara entre el lado del cliente y el servidor:


### 🔌 Backend

- **index.js:**  
  Configura el servidor Express, sirve archivos estáticos desde `/public`, y escucha peticiones HTTP.  
- **realTimeServer.js:**  
  Se encarga de toda la lógica de Socket.IO. Maneja las conexiones, desconexiones, validación de usuarios únicos y transmisión de mensajes entre todos los clientes conectados. Utiliza una estructura `Set` para garantizar unicidad de usuarios.

📸 **Vista del servidor configurado:**  
![Servidor Express y Socket.IO](https://imgur.com/JHSNRAO.png)

---

### 💻 Frontend

- **register.html:**  
  Página de entrada para el usuario. Incluye un formulario simple donde se introduce el nombre, con validación activa.
- **register.js:**  
  Controla la validación en tiempo real del nombre, conexión con Socket.IO y alertas dinámicas con Bootstrap.
- **index.html:**  
  Interfaz principal del chat. Muestra los mensajes y el formulario de envío.
- **script.js:**  
  Establece conexión Socket.IO y renderiza nuevos mensajes automáticamente en pantalla.

📸 **Vista del formulario de registro:**  
![Formulario Registro](https://imgur.com/NjOzswm.png)

---

## 🛡️ Validación de Usuario

Antes de ingresar al chat, se realiza una doble validación:

1. **Validación de frontend:**  
   Se verifica que el nombre no esté vacío y no contenga caracteres inválidos. Además, se guarda temporalmente en cookies.
2. **Validación de backend (Socket.IO):**  
   Cuando el usuario intenta conectarse, el servidor comprueba si su nombre ya está registrado en la sesión actual. Si el nombre está en uso, se emite un mensaje de error y se deniega la entrada.

📸 **Vista de validación exitosa:**  
![Validación Exitosa](https://imgur.com/fzdeBUC.png)

📸 **Vista de error al duplicar nombre:**  
![Nombre Repetido](https://imgur.com/fJPUHHY.png)

---

## 💬 Ejecución del Chat

Una vez dentro, los usuarios pueden intercambiar mensajes en tiempo real. Cada mensaje enviado se propaga a todos los clientes conectados. Se emplea Bootstrap para estilizar los mensajes y los elementos del formulario.

📸 **Chat en acción:**  
![Chat funcionando](https://imgur.com/VUezMoI.png)

📸 **Visualización de cookies de usuario:**  
![Cookies de sesión](https://imgur.com/S46WPgt.png)

---

## 🎨 Interfaz de Usuario

El uso de Bootstrap permitió implementar componentes modernos, como:

- Alertas para errores o notificaciones.
- Formularios con estilos visualmente consistentes.
- Diseño responsivo que se adapta a dispositivos móviles.

---

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

La implementación de este proyecto ha sido una experiencia enriquecedora que abarca múltiples aspectos fundamentales del desarrollo web moderno. Hemos logrado crear un sistema de chat **completamente funcional en tiempo real**, que demuestra cómo tecnologías como **Socket.IO** y **Express** pueden trabajar en conjunto para proporcionar una comunicación efectiva, rápida y confiable.

Además, la decisión de usar cookies para persistencia y Bootstrap para interfaz demostró ser una elección acertada, ya que ambos elementos redujeron la complejidad del código y mejoraron significativamente la experiencia de usuario.

Desde el punto de vista técnico, fue muy valioso resolver el reto de evitar la duplicación de nombres de usuario, lo que implicó sincronizar validaciones entre cliente y servidor. Este punto es especialmente importante para asegurar una experiencia fluida y sin errores durante el uso del sistema.

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
