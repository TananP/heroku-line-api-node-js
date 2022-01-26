const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080


app.get("/", (req, res)=>{
    res.json({result: "ok", data:[1,2,3,4,5]})
})

app.post('/api/broadcast', (req, res) => {
    if(!req.body.name || req.body.name.length === 0 ){
        res.status(400).send('Name Required !!!');
        return;
    }
    const testData = {
        id: 0,
        name: req.body.name
    }
    res.send(testData);
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})