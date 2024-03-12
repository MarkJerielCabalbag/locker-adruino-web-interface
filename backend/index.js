import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testlang",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("This is the backend ulet");
});

app.get("/test", (req, res) => {
  const q = "SELECT * FROM testlang.admin";
  db.query(q, (err, data) => {
    if (err) return res.json("error message");
    return res.json(data);
  });
});

app.post("/test", (req, res) => {
  const q = "INSERT INTO testlang.admin (`user`, `password`) VALUES (?)";
  const values = [req.body.user, req.body.password];
  db.query(q, [values], (err, data) => {
    if (err) return res.json("error message");
    return res.json("added successfully");
  });
});
app.listen(8000, () => {
  console.log("hello Frontend, from backend");
});
