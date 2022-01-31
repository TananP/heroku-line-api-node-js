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

// app.post('/api/push-message', (req, res) => {
//     // let messagesJson = req.body.messagesJson;
//     // const lineUid = 'U20a1f124962f1f5a1cbb026ba732004b';
//     // let lineBody = {
//     //     "to": req.body.lineUID,
//     //     "messages":[{
//     //         "type":"text",
//     //         "text": req.body.lineText
//     //     }]
//     //   };
//     let lineBody = {
//         "to": req.body.lineUID,
//         "messages":[req.body.lineMessagesJdon]
//       };
//       requestltLib.post({
//         headers:{
//           'Content-Type': 'application/json',
//           'Authorization': lineToken
//         },
//         url: 'https://api.line.me/v2/bot/message/push',
//         body: JSON.stringify(lineBody)
//       });
//     const final = {result: "Status: 200 OK 1.003" , lineUid:req.body.lineUID}
//     res.send(final);
// })

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})