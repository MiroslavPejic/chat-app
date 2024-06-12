const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put("https://api.chatengine.io/users/", 
    {
        username: username,
        secret: username
    }, 
    {
        headers: {"private-key": "f9185f8d-3f38-4107-902c-585258d0aa67"}
    });

    return res.json({ status: response.status, data: response.data })
  } catch (e) {
    return res.json({ status: e.response.status, data: e.response.data })
  }
});

app.listen(3001);