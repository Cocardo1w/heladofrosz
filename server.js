var express = require('express');
var path = require('path');
var app = express();

// Archivos estaticos
app.use(express.static("public"));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000,function(){
    console.log('El serviciona funciona en el puerto 3000')
})