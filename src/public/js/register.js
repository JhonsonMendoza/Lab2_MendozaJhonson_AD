const login = document.querySelector("#login");
const alertContainer = document.querySelector("#alert-container");

function showAlert(message, type = "danger") {
  alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>`;
}

login.addEventListener("click", () => {
  const user = document.querySelector("#username").value.trim();

  if (!user) {
    showAlert("Por favor ingresa tu nombre de usuario.");
    return;
  }

  const socket = io();

  socket.emit("check-user", user);

  socket.on("check-user-response", (isAvailable) => {
    if (isAvailable) {
      document.cookie = `username=${user}`;
      window.location.href = "/";
    } else {
      showAlert("El nombre de usuario ya está en uso. Por favor elige otro.");
    }
    socket.disconnect();
  });
  
  setTimeout(() => {
    showAlert("No se pudo verificar el usuario. Intenta de nuevo.");
    socket.disconnect();
  }, 5000);
});
