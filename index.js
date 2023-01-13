const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/getlist', function (req, res) {
  res.send({Sensor_suhu: [{suhu: 37, waktu: "2023-01-01 11:00"}, {suhu: 38, waktu: "2023-01-02 11:30"}, {suhu: 40, waktu: "2023-01-03 12:00"}]});
});

app.listen(port, ()=>{
  console.log("App running on http://localhost:3000/")
});
