const express = require('express');
const path = require('path');
const Artists = require('./Artists')

const app = express();
const PORT = process.env.PORT || 2020;

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}
// Init middelware
app.use(logger);

//Getts All Membres //
app.get('/api/Artists', (req, res) => {res.json(Artists)});

// Set Static Folder //
app.use(express.static(path.join(__dirname, '../public')));
// Get Methode //
//app.get('/', (req, res) =>{
//  res.sendFile(path.join(__dirname, '../public', 'index.html'));
//});

app.listen(PORT,()=>console.log('Server Connected'));
