module.exports = (httpServer) => {
  const {
    Server
  } = require("socket.io");
  const io = new Server(httpServer);

  const connectedUsers = new Map();

  function broadcastUserList() {
    io.emit("user-list", Array.from(connectedUsers.values()));
  }

  io.on("connection", (socket) => {
    socket.on("check-user", (username) => {
      const isAvailable = ![...connectedUsers.values()].includes(username);
      socket.emit("check-user-response", isAvailable);
    });

    socket.on("register-user", (username) => {
      console.log("Usuario registrado:", username); // 🧪 Agrega esto

      if ([...connectedUsers.values()].includes(username)) {
        socket.emit("register-error", "El usuario ya está en uso.");
        socket.disconnect();
        return;
      }

      connectedUsers.set(socket.id, username);
      socket.username = username;
      socket.emit("register-success");

      broadcastUserList(); // Emitir la lista a todos

      socket.on("message", (message) => {
        io.emit("message", {
          user: socket.username,
          message
        });
      });

      socket.on("disconnect", () => {
        connectedUsers.delete(socket.id);
        broadcastUserList(); // Actualizar la lista
      });
    });
  });
};