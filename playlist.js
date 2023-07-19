const addSong = (playlist, song) => {
    playlist.push(song);
};
  
const getPlaylist = playlist => playlist;
  
const playSong = (playlist, title) => {
    const songToPlay = playlist.find(song => song.title === title);
  
if (!songToPlay) {
    throw new Error('Song not found.');
} 
    songToPlay.playCount++;
};
  
const getSortedPlaylistByPlayCount = playlist => [...playlist].sort((a, b) => b.playCount - a.playCount);
  
module.exports = {
    addSong,
    getPlaylist,
    playSong,
    getSortedPlaylistByPlayCount,
};