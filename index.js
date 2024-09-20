const express = require("express")

const app = express()



app.get("/",(req,res)=>{

        res.send("<h1>Msf-Cube Memorial Day")
})


app.listen(3000)
