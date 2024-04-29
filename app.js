const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// This is optional, Keep-Alive header can inform the client how long the server is willing to keep the connection open (timeout=N value) before the server will force a close of the connection. Please refer: https://nodejs.org/api/http.html#serverkeepalivetimeout/
server.keepAliveTimeout = 120 * 1000; // 120 seconds
