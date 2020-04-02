const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2020;


app.use(express.static(path.join(__dirname, '../public')));
// Get Methode //
//app.get('/', (req, res) =>{
//  res.sendFile(path.join(__dirname, '../public', 'index.html'));
//});

app.listen(PORT,()=>console.log('Server Connected'));
