document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  
  // Convert Dropbox link to direct download link
  const originalLink = "https://www.dropbox.com/scl/fi/fchy08cxb0q4umc1z6ecy/Binaural-Audio.m4a?rlkey=n7pqc2hh4zsrpwxwlfjdzaet6&st=wkv363ed&dl=0";
  const directLink = originalLink.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("dl=0", "dl=1");
  
  audioPlayer.src = directLink;
  audioPlayer.loop = true;
});