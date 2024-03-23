const express = require('express');
const port = 3002;
const app = express();

app.get('/', (req, res) => {
    res.send("PhonePe app is working");
});

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});
