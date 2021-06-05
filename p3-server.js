const fs = require('fs');
const fastify = require('fastify')();
const {coinCount} = require("./p3-module");
const http = require('http');

    const server = http.createServer((req, res) => {
        fs.readFile(`${__dirname}/index.html`, (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.end("Error Processing Request");
            } else {
                res.statusCode = 200;
                console.log("URL: ", req.url);
                res.setHeader('Content-Type', 'text/html');
                res.end();
            }
        });
    });

fastify.get("/", (req, res) => {
    reply.send(server)
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});

fastify.get("/coin", (request, reply) => {
    const {denom = 0, count = 0} = request.query;
    coinValue = coinCount(...coinage);
    reply 
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
})

fastify.get("/coins", (request, reply) => {
    const {option} = request.query;
    switch (option){
        case 1:
            coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            break;
        case 2:
            coinCount(...coins);
            break;
        case 3:
            coinCount(coins);
        default: 
            coinValue = 0;
    };
    reply
    .code(200)
    .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
});
