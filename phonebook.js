const express = require("express");
const phonebook = require('./routes/phonebook');

const app = express();



app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.use("/api/phonebook", phonebook);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});