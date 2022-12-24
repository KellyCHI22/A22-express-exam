// require packages used in the project
const express = require('express');
const app = express();
const port = 3000;

// html for navbar
const navHTML = `
<div style="display:flex;justify-content:space-between;">
    <button><a href="/">回到首頁</a></button>
    <div>
        <button><a href="/about">About</a></button>
        <button><a href="/portfolio">Portfolio</a></button>
        <button><a href="/contact">Contact</a></button>
    </div>
</div>
`;

// routes setting
// homepage
app.get('/', (req, res) => {
    res.send(`${navHTML}
    <h1>首頁</h1>
    `);
});

// about page
app.get('/about', (req, res) => {
    res.send(`${navHTML} 
    <h1>About</h1>
    `);
});

// portfolio page
app.get('/portfolio', (req, res) => {
    res.send(`${navHTML} 
    <h1>Portfolio</h1>
    `);
});

// contact page
app.get('/contact', (req, res) => {
    res.send(`${navHTML} 
    <h1>Contact</h1>
    `);
});

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`);
});