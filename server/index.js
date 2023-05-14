const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.static("public"));


const bd = mysql.createPool({

host:"localhost",
user:"root",
password:"root123",
database:"login",

})

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self'");
    next();
  });
  

  app.post("/dados", (req, res) => {
    const { name, email, password } = req.body;
  
    let SQL = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  
    bd.query(SQL, [name, email, password], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Dados inseridos com sucesso");
      }
    });
  });



  app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    let SQL = "SELECT * FROM users WHERE email = ?";
  
    bd.query(SQL, [email], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erro interno do servidor");
      } else {
        if (result.length > 0) {
          if (result[0].password === password) {
            res.send("Login bem-sucedido");
            console.log("login realizado")
          } else {
            res.status(401).send("Senha incorreta");
          }
        } else {
          res.status(404).send("Usuário não encontrado");
        }
      }
    });
  });





app.get("/",(req,res) => { 
     return res.send("ola mundo")
})


app.listen(33066, ()=>{
    console.log("rodando servidor")
})