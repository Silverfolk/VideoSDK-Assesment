const express = require("express");
require("dotenv").config();

const ConnectDB = require('./db/connect');
const app = express();
var cors = require("cors");

const mainrouter = require("./routes/api/mainrouter");

const server = require('http').createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket) => {
	console.log('New client connected');
	
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal);
	});

	
});

app.use(cors());
app.use(express.json());

app.use("/api", mainrouter);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		ConnectDB();
		server.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	} catch (error) {
		console.log("error =>", error);
	}
};

start();
