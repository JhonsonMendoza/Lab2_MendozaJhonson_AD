const socket = io();

// Obtener el usuario desde la cookie
const user = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username="))
  ?.split("=")[1];

// Redirigir si no está registrado
if (!user) {
  alert("No estás registrado. Por favor ingresa un nombre de usuario.");
  window.location.href = "/register.html";
} else {
  // Primero esperamos que el socket esté conectado antes de emitir
  socket.on("connect", () => {
    socket.emit("register-user", user);
  });
}

// Enviar mensajes
const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
  const message = document.querySelector("#message").value.trim();
  if (message === "") return;
  socket.emit("message", message);
  document.querySelector("#message").value = "";
});

// Mostrar mensajes
socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="message d-flex mb-3">
      <div class="image-container me-3">
        <img src="/img/perfil.jpg" class="rounded-circle" style="width: 40px; height: 40px; object-fit: cover;">
      </div>
      <div class="message-body flex-grow-1">
        <div class="user-info d-flex justify-content-between align-items-center mb-1">
          <span class="username fw-bold">${user}</span>
          <span class="time text-muted" style="font-size: 0.8rem;">Ahora</span>
        </div>
        <p class="mb-0">${message}</p>
      </div>
    </div>
  `);
  allMessages.append(msg);
});

// Mostrar errores
socket.on("register-error", (msg) => {
  alert(msg);
  window.location.href = "/register.html";
});

// 🔥 Mostrar lista de usuarios conectados
socket.on("user-list", (users) => {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  users.forEach((username) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = username;

    if (username === user) {
      li.classList.add("fw-bold", "text-primary"); // resaltar el propio usuario
      li.textContent += " (tú)";
    }

    userList.appendChild(li);
  });
});
