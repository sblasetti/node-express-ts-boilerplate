const express = require('express');
const path = require('path');

const app = express();

// Static file serving
app.use(express.static(path.join(__dirname, './dist')));

const port = 3003;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});