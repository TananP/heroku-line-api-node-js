const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
// const axios = require('axios');
const requestltLib = require('request');

// Line
const lineToken = "Bearer 7PKzEpl7hYP0nmB6wMDUutMWAVREoBCgDhgY5vjDMWXE4o4K7NpzgknM9UxmAoj6/ZAvbvjidg8XTBbQRNEkl7IuUwkkH9GNb67TRXJIXi8aO/6P/nW8xDrIwUjKbOZFJx3m33mIdKBSjSGNiWVKCgdB04t89/1O/w1cDnyilFU=";

// Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./em-test-krtl-firebase-adminsdk-i2npz-3c8b96785f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

app.get("/", (req, res)=>{
    res.json({result: "OK!!!"});
})

app.post('/api/push-message', (req, res) => {
    let lineBody = {
        "to": req.body.lineUID,
        "messages":req.body.lineMessagesJdon
      };
      requestltLib.post({
        headers:{
          'Content-Type': 'application/json',
          'Authorization': lineToken
        },
        url: 'https://api.line.me/v2/bot/message/push',
        body: JSON.stringify(lineBody)
      });
    const final = {result: "Status: 200 OK 1.003" , lineUid:req.body.lineUID}
    res.json(final);
})

app.post('/api/multicast-message', (req, res) => {
    let lineBody = {
        "to": req.body.lineUID,
        "messages":req.body.lineMessagesJdon
      };
      requestltLib.post({
        headers:{
          'Content-Type': 'application/json',
          'Authorization': lineToken
        },
        url: 'https://api.line.me/v2/bot/message/multicast',
        body: JSON.stringify(lineBody)
      });
    const final = {result: "Status: 200 OK 1.003" , lineUid:req.body.lineUID}
    res.json(final);
})

app.get("/api/notification-info", (req, res)=>{
  db.collection('LINE_NOTIFICATION').doc('INFORMATION').get().then(doc => {
    if (doc.exists) {
      res.json(doc.data());
    }else{
      res.json({result: "Doc dose not exist!!!!!"});
    }
  }).catch( error => {
    res.json({result: "Error" , error:"Could not get data"});
  });
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})