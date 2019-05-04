import React from 'react';
import './Game.css';

const boardSize = 8;

const numSquares = boardSize * boardSize;
const blackStone = 1;
const whiteStone = 0;

function getSquareID(square) {
  return boardSize * square[0] + square[1];
}

function getSquare(id) {
  return [Math.floor(id / boardSize), id % boardSize];
}

function isInside(square) {
  return 0 <= square[0] && square[0] < boardSize &&
         0 <= square[1] && square[1] < boardSize;
}

function enumerateAffectedSquares(stones, id, stone) {
  const [sr, sc] = getSquare(id);
  let squares = [[sr, sc]];

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;

      let square = [sr + dr, sc + dc],
          flag = false,
          candidates = [];

      while (isInside(square) && stones[getSquareID(square)] === stone ^ 1) {
        candidates.push(square);
        square = [square[0] + dr, square[1] + dc];
        flag = true;
      }

      if (flag && isInside(square) && stones[getSquareID(square)] === stone) {
        squares = squares.concat(candidates);
      }
    }
  }
  return squares;
}

function canPutStone(stones, id, stone) {
  console.log(enumerateAffectedSquares(stones, id, stone));
  return stones[id] === null && enumerateAffectedSquares(stones, id, stone).length > 1;
}

function putStone(stones, id, stone) {
  const newStones = stones.slice();

  for (let square of enumerateAffectedSquares(stones, id, stone)) {
    newStones[getSquareID(square)] = stone;
  }

  return newStones;
}

/*
 * React Component
 */

function Square(props) {
  let color = "green";
  if (props.value !== null) {
    color = props.value === blackStone ? "black" : "white";
  }

  return (
    <svg className="square" onClick={props.onClick}>
      { <circle fill={color} r="10" cx="25" cy="25" /> }
    </svg>
  );
}

class Board extends React.Component {
  render() {
    const boardRows = [];

    for (let r = 0; r < boardSize; r++) {
      boardRows.push(
        <div key={r} className="board-row">
          { [...Array(boardSize)].map((_, c) => this.renderSquare(getSquareID([r, c]))) }
        </div>
      );
    }

    return (
      <div className="board">
        { boardRows }
      </div>
    );
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.stones[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stones: this.makeInitialStones(),
      turn: 1,
    };
  }

  reset() {
    this.setState({
      stones: this.makeInitialStones(),
      turn: 1,
    });
  }

  makeInitialStones() {
    // 初期配置
    const stones = Array(numSquares).fill(null);
    const r1 = Math.floor((boardSize - 1) / 2),
          r2 = r1 + 1,
          c1 = Math.floor((boardSize - 1) / 2),
          c2 = c1 + 1;
    stones[getSquareID([r1, c2])] = stones[getSquareID([r2, c1])] = blackStone;
    stones[getSquareID([r1, c1])] = stones[getSquareID([r2, c2])] = whiteStone;

    return stones;
  }

  handleClickSquare(i) {
    const stone = this.state.turn % 2 === 1 ? blackStone : whiteStone;

    if (!canPutStone(this.state.stones, i, stone)) {
      return;
    }
    const stones = putStone(this.state.stones, i, stone);

    this.setState({
      stones: stones,
      turn: this.state.turn + 1,
    });
  }

  handleClick() {
    const message = "YOU LOSE!!!! （ﾌﾞｳｳｳｳｳｳ!!!!）\n" +
                    "俺の勝ち！\n" +
                    "何で負けたか、明日まで考えといてください。\n" +
                    "そしたら何かが見えてくるはずです。\n" +
                    "ほな、いただきます。";
    alert(message);
    this.reset();
  }

  render() {
    return (
      <div className="game">
        <div>
          <button onClick={() => this.handleClick()}>Reset</button>
          turn: {this.state.turn}
        </div>
        <Board
          stones={this.state.stones}
          onClick={(i) => this.handleClickSquare(i)}
        />
      </div>
    );
  }
}

export default Game;