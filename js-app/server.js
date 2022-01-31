const express = require("express");
const app = express();

const PORT = 4000


app.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "success",
    values: {
      app: "helloworld"
    }
  })
})

app.get("/healthz", (req, res) => {
  res.status(200).send("ok")
})

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})
