function theBeatlesPlay(musicians, instruments){
  var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var band = new Array(4);
  for (let i = 0; i < 4; i++) {
    band[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return band;
}
