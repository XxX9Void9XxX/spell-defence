const players = {};
const towers = [];

function addPlayer(id) {
  players[id] = {
    id,
    x: Math.random() * 500,
    y: Math.random() * 500,
    materials: 0
  };
}

function removePlayer(id) {
  delete players[id];
}

function updatePlayer(id, data) {
  if (players[id]) {
    players[id] = { ...players[id], ...data };
  }
}

function getState() {
  return { players, towers };
}

module.exports = {
  addPlayer,
  removePlayer,
  updatePlayer,
  getState
};
