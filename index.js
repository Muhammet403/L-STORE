const express = require("express");
const cors = require("cors");
const apps = require("./apps"); // apps.js aynı klasörde

const app = express();

app.use(cors());

// Ana sayfa
app.get("/", (req, res) => {
  res.send("✅ Sunucu çalışıyor!");
});

// Uygulama listesi
app.get("/apps", (req, res) => {
  res.json(apps);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
