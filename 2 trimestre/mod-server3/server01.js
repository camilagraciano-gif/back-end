// Importar módulos
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const porta = 8001


const home = path.join(__dirname, '/pages/index.html')
const compras = path.join(__dirname, '/pages/compras.html')
const erro = path.join(__dirname, '/pages/erro.html')

// criar servidor e rotas
const server = http.createServer((req, res) => {
    // rotas e conteúdos
    const urlTratada = new URL(req.url, `http://${req.headers.host}`)
    const caminhoPesquisado = urlTratada.pathname
    if (caminhoPesquisado === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(home, 'utf8'))
    }
    if (caminhoPesquisado === '/compras') {
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(compras, 'utf8'))
    } 
    if (caminhoPesquisado === '/erro') {
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(erro, 'utf8'))
    } else {
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end('<h3>Página não permitida</h3>')
    }

})

// liberar porta no meu PC
server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})