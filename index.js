function theBeatlesPlay(musicians, instruments){
  var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var band = [];
  for (let i = 0; i < musicians.length; i++) {
    band.push( musicians[i] + ' plays ' + instruments[i])
  }
  return band;
}
