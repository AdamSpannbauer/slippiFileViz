import json

from slippi import Game
from tqdm import tqdm


game = Game('Game_20210225T173905.slp')

positions = []
minX = float('inf')
maxX = -float('inf')

minY = float('inf')
maxY = -float('inf')

for frame in tqdm(game.frames):
    port_positions = {}
    for i, port in enumerate(frame.ports):
        if port:
            data = port.leader.post
            pos = data.position
            x, y = pos.x, pos.y

            if x < minX:
                minX = x
            if x > maxX:
                maxX = x
            if y < minY:
                minY = y
            if y > maxY:
                maxY = y

            port_positions[f'player_{i + 1}_x'] = pos.x
            port_positions[f'player_{i + 1}_y'] = pos.y

    positions.append(port_positions)


game_data = {
    'positions': positions,
    'minX': minX,
    'maxX': maxX,
    'minY': minY,
    'maxY': maxY,
}

with open('game_positions.json', 'w') as f:
    json.dump(game_data, f)
