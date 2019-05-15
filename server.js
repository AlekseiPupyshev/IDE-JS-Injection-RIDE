const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.sendFile('mw3ww.js', { root : __dirname});
});
app.listen(process.env.PORT || 5000, () => {
	console.log(__dirname);
	console.log("Listening Port 3000");
});