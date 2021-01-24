module.exports = (http) => {
  const io = require("socket.io")(http, {
    cors: {
      origin: "*",
    },
  });
  var name;

  io.on("connection", (socket) => {
    socket.on("katılma mesajı", (username) => {
      name = username;
      io.emit("sohbet mesajı", `---${name} sohbete katıldı`);
    });
    socket.on("disconnect", () => {
      console.log("Kullanıcı bağlantısı kesildi");
      io.emit("sohbet mesajı", `---${name} sohbeti terketti---`);
    });
    socket.on("sohbet mesajı", (msg) => {
      socket.broadcast.emit("sohbet mesajı", msg); //gönderen hariç herkese mesaj göndermek
    });
  });
};
