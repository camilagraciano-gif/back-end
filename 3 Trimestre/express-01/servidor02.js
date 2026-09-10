import express from 'express' 
import path from 'path'


const app = express()
const porta = 3000
app.get('/', (req,res)=> {

 res.sendFile('/paginas/index.html',{root: import.meta.dirname})
})

app. listen (porta, ()=> {console.log ('servidor está vivo ')})