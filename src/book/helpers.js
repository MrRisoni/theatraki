
export function get_onlyChildSpects(spectatorsList) {
  const activeNonChildSpects = (spectatorsList.filter(spl => (spl.active === true && spl.type !== 'CHD')).length > 0);
  const activeChildSpects = (spectatorsList.filter(spl => (spl.active === true && spl.type === 'CHD')).length > 0);

  return (activeNonChildSpects === false && activeChildSpects === true);
}

export function get_selectedSpectType(spectatorsList) {
  return spectatorsList.filter(spl => (spl.active === true && spl.selectedForSeat === true))[0].type;
}

export function get_selectedSeats(spectatorsList) {
  return spectatorsList.filter(spl => spl.active === true).map(actSpl => actSpl.seat);
}

export function get_spectatorCount(spectatorsList) {
  return spectatorsList.filter(spl => spl.active === true).length;
}

export function allPaxesHaveSeats(spectatorsList) {
   return  (spectatorsList.filter(spl => (spl.active && spl.seat === '')).length === 0);
}

export function emptyContactVars(contactDetails) {
    var array = [];
    for(var key in contactDetails) {
        array.push(contactDetails[key]);
    }
    console.log('emptyContactVars');
    console.log(array);
    console.log(array.filter(conVar => conVar === '').length > 0)
    return (array.filter(conVar => conVar === '').length > 0);
}
