// app.js
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const cookiepricer = require('./cookiepricer.js');

io.origins(['http://jsramverkproject.jsramverk.me:443']);


var cookie1 = {
    name: "Chocolate Chip",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 10
}

var cookie2 = {
    name: "Red Velvet",
    rate: 1.002,
    variance: 0.4,
    startingPoint: 12
}

var cookie3 = {
    name: "Grinch Cookies",
    rate: 1.003,
    variance: 0.5,
    startingPoint: 15
}

var cookies = [
    cookie1,
    cookie2,
    cookie3
];

io.on('connection', function (socket) {
    console.info("User connected");
});

setInterval(function() {
    cookies.map((cookie) => {
        cookie["startingPoint"] = cookiepricer.getStockPrice(cookie);

        return cookie;
    })

    console.log(cookies);
    io.emit("stocks", cookies)
}, 5000)

server.listen(3014, () => console.log(`SERVER IS UP , 3014 PORT`));
