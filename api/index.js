const express = require("express");
const app = express();

app.get("/api", (req, res) => res.status(200).json({ message: "API works!" }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Сервер стартанул на порту: ${PORT}`));
