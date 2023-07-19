const express = require('express');
const app = express();
const port = 3000;
const { addSong, getPlaylist, playSong, getSortedPlaylistByPlayCount } = require('./playlist.js');
const createSong = require('./song.js');

app.use(express.json());

const playlist = [];

app.post('/song', (req, res) => {
  const { title, artist } = req.body;
  const song = createSong(title, artist);
  addSong(playlist, song);
  res.json({ message: 'Song added to the playlist.' });
});

app.get('/songs', (req, res) => {
  res.json(getPlaylist(playlist));
});

app.put('/song/:title', (req, res) => {
  const titleToPlay = req.params.title;

  try {
    playSong(playlist, titleToPlay);
    res.json({ message: 'Song played successfully.' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get('/songs/sorted-by-playcount', (req, res) => {
  res.json(getSortedPlaylistByPlayCount(playlist));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});