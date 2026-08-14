const fs = require('fs')
const arquivo = fs.readFileSync(__dirname+"/README.MD", "utf-8")
console.log(arquivo)