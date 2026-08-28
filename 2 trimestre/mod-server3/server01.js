// Importar módulos nativos do Node.js
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const porta = 8001

// Mapeamento dos caminhos dos arquivos HTML na pasta "pages2"
const home = path.join(__dirname, 'pages', 'index.html')
const compras = path.join(__dirname, 'pages', 'compras.html')
const erro = path.join(__dirname, 'pages', 'erro.html')

// Função auxiliar para ler arquivos com segurança
function servirArquivo(res, caminhoArquivo, status = 200) {
    fs.readFile(caminhoArquivo, 'utf8', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
            return res.end('<h1 style="color: red; font-family: sans-serif;">Erro interno: Arquivo não encontrado no servidor.</h1>')
        }
        res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(content)
    })
}

// Criar servidor HTTP
const server = http.createServer((req, res) => {
    // Tratamento de URL e acentuação/espaços na rota
    const urlTratada = new URL(req.url, `http://${req.headers.host}`)
    const caminhoPesquisado = decodeURIComponent(urlTratada.pathname)

    // Roteamento das páginas
    if (caminhoPesquisado === '/' || caminhoPesquisado === '/Pagina inicial' || caminhoPesquisado === '/index.html') {
        return servirArquivo(res, home)
    } 
    
    if (caminhoPesquisado === '/compras' || caminhoPesquisado === '/compras.html') {
        return servirArquivo(res, compras)
    } 
    
    if (caminhoPesquisado === '/erro' || caminhoPesquisado === '/erro.html') {
        return servirArquivo(res, erro, 404)
    } 

    // Rota genérica para qualquer caminho não encontrado (Renderiza a página de erro 404)
    servirArquivo(res, erro, 404)
})

// Inicialização do servidor
server.listen(porta, () => {
    console.log(`⚡ Servidor Homem de Ferro (Stark Tech) rodando em http://localhost:${porta}`)
})