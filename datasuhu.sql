--Membuat data sql;
CREATE TABLE sensor_suhu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  waktu DATETIME NOT NULL,
  suhu INT NOT NULL
);
--Menambah data sebagai contoh;
INSERT INTO sensor_suhu (waktu, suhu) VALUES ('2021-01-01 11:00', 37);
INSERT INTO sensor_suhu (waktu, suhu) VALUES ('2021-01-02 11:30', 38);
INSERT INTO sensor_suhu (waktu, suhu) VALUES ('2021-01-03 12:00', 40);
