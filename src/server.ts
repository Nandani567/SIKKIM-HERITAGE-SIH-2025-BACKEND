import express = require('express');


const {DatabaseConnection} = require('./config/db')
const app= express()
const port = process.env.PORT
DatabaseConnection()

app.listen(port, () => {
    console.log(`app is listenning ${port} `)
})


