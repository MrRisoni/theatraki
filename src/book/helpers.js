
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
