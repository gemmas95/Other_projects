function songDecoder(song) {
  const cleanedSong = song.replace(/WUB/gi, " ");
  const result = cleanedSong.replace(/ +/g, " ").trim();
  return result;
}
