import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>
      Hello, this world!  
    </h1>  
  `);
});

app.listen(80, () => {
  console.log('Listening on port 443');
});

