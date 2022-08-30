const express = require("express");
const { createPool } = require("mysql2");
const bodyParser = require("body-parser");
const { resolve } = require("path");
const { HOST, USER, PASSWORD, DB } = require("./config/db.config");

const server = express();

const pool_forum = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 30,
});

server.use(bodyParser.json());
server.use(express.static(resolve(__dirname, "../forum/build")));

server.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "../forum/build/index.html"));
});

server.get("/api", (req, res) => {
  res.json("Hello from server!");
});

server.get("/connect", (req, res) => {
  pool_forum.query("SELECT * FROM users", (err, result, fields) => {
    if (!err) {
      res.json("connect");
    } else {
      console.log(err);
    }
  });
});

server.get("/base", (req, res) => {
  pool_forum.query(`SELECT * FROM notes`, (err, result, firlds) => {
    if (!err) {
      res.json(result);
    } else {
      console.log(err);
    }
  });
});

server.post("/reg", (req, res) => {
  console.log(req.body);
  pool_forum.query(
    `SELECT * FROM users WHERE name="${req.body.name}"`,
    (err, result, fields) => {
      if (!err) {
        if (result.length !== 0) {
          res.json("this name is ocupanted");
        } else {
          pool_forum.query(
            `INSERT INTO users (name, password) VALUES("${req.body.name}", "${req.body.pass}")`,
            (err, result, fields) => {
              if (!err) {
                res.json("ok");
              } else {
                console.log(err);
              }
            }
          );
        }
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/log", (req, res) => {
  console.log(req.body);
  pool_forum.query(
    `SELECT * FROM users WHERE name="${req.body.name}" AND password="${req.body.pass}"`,
    (err, result, fields) => {
      if (!err) {
        if (result.length !== 0) {
          res.json("ok");
        } else {
          res.json("login or password is not valid");
        }
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/addtopic", (req, res) => {
  let t = req.body;
  console.log(t);
  pool_forum.query(
    `SELECT * FROM notes WHERE top="${t.top}"`,
    (err, result, fields) => {
      if (!err) {
        if (result.length === 0) {
          pool_forum.query(
            `INSERT INTO notes (top, date, name, message) VALUES ("${t.top}", "${t.date}", "${t.name}", "${t.message}")`,
            (err, result, fields) => {
              if (!err) {
                pool_forum.query(
                  `SELECT * FROM notes`,
                  (err, result, fields) => {
                    if (!err) {
                      res.json(result);
                    } else {
                      console.log(err);
                    }
                  }
                );
              } else {
                console.log(err);
              }
            }
          );
        } else {
          res.json("this top already exists");
        }
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/message", (req, res) => {
  let t = req.body;
  console.log(t);
  pool_forum.query(
    `INSERT INTO notes (top, date, name, message) VALUES ("${t.top}", "${t.date}", "${t.name}", "${t.message}")`,
    (err, result, firlds) => {
      if (!err) {
        pool_forum.query(`SELECT * FROM notes`, (err, result, fields) => {
          if (!err) {
            res.json(result);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    }
  );
});

server.use((req, res) => {
  res.send("error");
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
