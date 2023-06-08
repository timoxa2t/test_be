import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>
      Hello, this world!  
    </h1>  
  `);
});

app.get('/asdasd', (req, res) => {
  res.json(JSON.stringify({text:'asdasdasd'}))  
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

