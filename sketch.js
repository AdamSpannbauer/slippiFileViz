let gamedata;

window.preload = () => {
  gamedata = loadJSON('./gamePositions.json');
};

window.setup = () => {
  createCanvas(gamedata.maxX * 2, gamedata.maxY * 2);
};

window.draw = () => {
  background(0);

  const {
    player1X, player1Y, player2X, player2Y,
  } = gamedata.positions[
    frameCount
  ];

  noStroke();
  translate(width / 2, height / 2);
  scale(1, -1);

  fill(255, 0, 0);
  ellipse(player1X, player1Y, 25);

  fill(0, 0, 255);
  ellipse(player2X, player2Y, 25);
};
