var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var simulated = require('./SimulatedDevice');
var port = process.env.PORT||5000;
// console.log(path.join(__dirname, 'index.html'))
app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: '100mb',extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/clear', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'index.html'))
    simulated.simulate();
})

app.post('/sensorswitch', (req, res)=>{
    // res.sendFile(path.join(__dirname, 'index.html'))
    // simulated.simulate();
    // console.log(req.body);
    simulated.switchOnOff(req.body.switch);
})

app.post('/changeFeederValue', (req, res) => {
    console.log(req.body);
    simulated.changeFeederValues(req.body);
})

app.listen(port)
console.log("Server running at port ", port)