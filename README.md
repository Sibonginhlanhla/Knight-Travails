# 🐴 Knight's Travails

This project demonstrates how to use **graph traversal algorithms**—specifically **Breadth-First Search (BFS)**—to solve a real-world problem: finding the shortest path a knight can take on a standard 8x8 chessboard.

## 📌 Problem Statement

A knight in chess moves in an L-shape: two squares in one direction and one in a perpendicular direction. From any given position on the board, the knight has up to 8 possible moves (fewer when near the edges).

The goal is to write a function:

```javascript
knightMoves(start, end)
