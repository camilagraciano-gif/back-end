const fs = require('fs')
const path = require('node: path')

try {
    const arquivo = fs.readFileSync(path.join(__dirname, "/README.MD"), "utf-8")
    console.log(aequivo)
}
catch (error) {
    console.error('Deu met...')
    console.log(error.message)
}