const express = require('express');
const app = express();
app.use(express.static('public'));







// Home route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// About route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/About.html'));


//Works route
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/Works.html'));

// Photo route:
app.get('/photo-galery', (request, response, next) => response.sendFile(__dirname + '/views/photo-galery.html'));



app.listen(5000)