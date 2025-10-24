import express from "express";
import pkg from "body-parser";
import router  from "./routes/router.js";
import "./database/database.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));

// debug: log todas as requisições recebidas
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});

// montar router ANTES do listen
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});