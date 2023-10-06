const express = require("express");
const phonebook = require('./routes/PhonebookRoutes.js');

const app = express();

app.use(express.json());


app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.use("/api/phonebook", phonebook);



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});