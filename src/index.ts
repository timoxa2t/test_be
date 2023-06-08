import express from "express";

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.send(`
    <h1>
      Hello, this world!  
    </h1>  
  `);
});

app.listen(3000);

