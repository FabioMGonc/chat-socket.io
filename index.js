const express = require('express');

const path = require('path');

const app = express();

// Definir o protocolo HTTP
const server = require('http').createServer(app);

// Definir protocolo WSS do socket
const socket = require('socket.io')(server);

// Serve arquivos estáticos da pasta "public" (HTML, CSS, JS, imagens) direto pela URL,
app.use(express.static(path.join(__dirname, 'public')));
// Diz ao Express que as páginas HTML estão nessa pasta.
app.set('views', path.join(__dirname, 'public'));
// O EJS aqui só é usado para permitir renderizar arquivos .html,
app.engine('html', require('ejs').renderFile);
// e o "view engine" fica configurado como HTML.
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
})
