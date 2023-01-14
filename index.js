const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/sensor/suhu', (req, res) => {
  const data = [
    { suhu: 37, waktu: "2023-01-01 11:00" },
    { suhu: 38, waktu: "2023-01-02 11:30" },
    { suhu: 40, waktu: "2023-01-03 12:00" }
  ];
  res.json(data);
});

// mencoba menambahkan db menggunakan sql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '66.118.234.39:',
  user: 'u40_1fcVHWTpwn',
  password: '+qzCOyK9=bU6SoJOHzhvlQM!',
  database: 's40_daffa_db'
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);});
