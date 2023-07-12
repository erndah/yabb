const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const playlist = [];

app.post('/add-song', (req, res) => {
  const song = req.body;
  playlist.push(song);
  res.json({ message: 'Song added to the playlist.' });
});

app.get('/get-songs', (req, res) => {
  res.json(playlist);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



