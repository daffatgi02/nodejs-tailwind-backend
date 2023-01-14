const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// mengambil data dari database
app.get('/sensor/suhu', (req, res) => {
  connection.query('SELECT id, waktu, suhu FROM sensor_suhu', (error, results) => {
    if (error) {
      res.json({ message: 'Gagal mengambil data', error });
    } else {
      res.json(results);
    }
  });
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
