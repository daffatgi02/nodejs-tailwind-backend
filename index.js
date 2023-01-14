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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
