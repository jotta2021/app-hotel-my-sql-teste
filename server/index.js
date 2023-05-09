const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const bd = mysql.createPool({

host:"localhost",
user:"root",
password:"root123",
database:"login",

})


app.post("/dados",(req,res) => {
const {name,email,password} = req.body

let SQL = "INSERT INTO users (name,email,password) VALUES (?,?,?)"

bd.query(SQL,name,email,password, (err,result) =>{
    console.log(err)
})

})


app.listen(33066, ()=>{
    console.log("rodando servidor")
})