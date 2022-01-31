const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());

const axios = require('axios');
const requestltLib = require('request');

const lineToken = "Bearer 7PKzEpl7hYP0nmB6wMDUutMWAVREoBCgDhgY5vjDMWXE4o4K7NpzgknM9UxmAoj6/ZAvbvjidg8XTBbQRNEkl7IuUwkkH9GNb67TRXJIXi8aO/6P/nW8xDrIwUjKbOZFJx3m33mIdKBSjSGNiWVKCgdB04t89/1O/w1cDnyilFU=";


app.get("/", (req, res)=>{
    res.send('Hello 1.001');
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})