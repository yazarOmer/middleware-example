const express = require('express');
const app = express();
const path = '/hello';

const newRequest = (req,res,next) => {
    console.log("Yeni istek atıldı.");
    next();
}

app.use(newRequest);

app.get(path, (req,res) => {
    res.send("GET isteği atıldı.");
})

app.post(path, (req,res) => {
    res.send("POST isteği atıldı.");
})

app.put(path, (req,res) => {
    res.send("PUT isteği atıldı.");
})

app.delete(path, (req,res) => {
    res.send("DELETE isteği atıldı.");
})

app.listen(5000, () => {
    console.log("Server dinleniyor.");
})