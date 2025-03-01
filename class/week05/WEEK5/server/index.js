import express from "express";
import cors from "cors";
import multer from "multer";

// MULTER STEPS - grab info, parse file, save file in a destination _set filename, all good

//TEST QUESTION - MULTIPART- converts to binary for storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /// where im putting it
    cb(null, "uploads/"); // file name - what i am saving as
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + file.filename);
  },
});

const upload = multer({ storage: storage });

const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
app.use(cors());
app.use(express.urlencoded({ extended: true })); //to handle plain html form submission
app.use(express.json()); //accepts json data

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/data", (req, res) => {
  res.json({
    name: "Osasere",
    password: "password123",
    username: "OsasereObaz",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.json(" I got your information");
});

app.post("/upload", upload.array("file", 20), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json("I got your file");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});

/*  React - 
        server -> 
              /image -> 
                      parse for req.body with multer ->  save the file


                      npm i multer


*/
