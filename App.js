const http = require("http")
const { env } = require("process")
const port =  process.env.Port || 3000
const express = require("express")

const App = express();
App.use(express.json())

App.listen(port,()=>{
    console.log("server is connected")
})