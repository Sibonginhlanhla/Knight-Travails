function knightMoves(start, end) {
  const boardSize = 8;

  const isValid = (x, y) => x >= 0 && x < boardSize && y >= 0 && y < boardSize;

  const directions = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(`[${pos[0]},${pos[1]}]`));
      return path;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const nextPos = [newX, newY];

      if (isValid(newX, newY) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push([...path, nextPos]);
      }
    }
  }

  return null; 
}

knightMoves([0,0],[7,7]);
