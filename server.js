const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Statische Dateien
app.use(express.static(path.join(__dirname, 'public')));

// Route für das Formular
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.redirect('/'); // Leitet den Benutzer nach dem Absenden des Formulars zur Startseite weiter
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});