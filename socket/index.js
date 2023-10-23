// require("dotenv").config();
// const PORT = process.env.PORT;

const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});

// <-----------------Functions Start---------------------------->

let Users = [];

// when new users are connected
const addUser = (userId, socketId) => {
    if (!Users.some(item => item.userId === userId)) {
        Users.push({ userId, socketId });
    }
};

// when user discinnected
const removeUser = (socketId) => {
    Users = Users.filter(user => user.socketId !== socketId);
};

// getuser to which we send message
const getUser = (userId) => {
    return Users.find((user) => user.userId === userId);
};
// console.log(getUser);
// <-----------------Functions Ended---------------------------->


// when new users are connected
io.on("connection", (socket) => {
    console.log(`Socket is listening on Port ws://localhost:`);

    // take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", Users);
    })
    // send and get messages
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        if (user) {
            io.to(user.socketId).emit("getMessage", {
                senderId,
                text,
            });
        } else {
            console.log(`User Offline`);
        }
    });


    // when user disconnected
    socket.on("disconnect", () => {
        console.log("socket disconnected");
        removeUser(socket.id);
        io.emit("getUsers", Users);
    })
})