let gamedata;

window.preload = () => {
  gamedata = loadJSON("./game_positions.json");
};

window.setup = () => {
  createCanvas(gamedata.maxX * 2, gamedata.maxY * 2);
};

window.draw = () => {
  background(0);
  let { player_1_x, player_1_y, player_2_x, player_2_y } = gamedata.positions[
    frameCount
  ];
  noStroke();
  translate(width / 2, height / 2);
  scale(1, -1);
  fill(255, 0, 0);
  ellipse(player_1_x, player_1_y, 25);

  fill(0, 0, 255);
  ellipse(player_2_x, player_2_y, 25);
};
