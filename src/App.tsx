import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import Cell, { CellState } from "./components/Cell";
import Game from "./components/Game";

import { cloneDeep, every, flatten, some } from "lodash";

const DEFAULT_STATE: CellState[][] = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

const App: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  const [state, setState] = useState(DEFAULT_STATE);
  function playTurn(player: Player, { x, y }: Coordinate) {
    if (state[y][x] === " ") {
      const newState = cloneDeep(state);
      newState[y][x] = player;
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setState(newState);
    }
  }

  const isVictory = some([
    every(state[0].map(value => value.trim() && value === state[0][0])),
    every(state[1].map(value => value.trim() && value === state[1][0])),
    every(state[2].map(value => value.trim() && value === state[2][0])),
    every(state.map(row => row[0].trim() && row[0] === state[0][0])),
    every(state.map(row => row[1].trim() && row[1] === state[0][1])),
    every(state.map(row => row[2].trim() && row[2] === state[0][2])),
    state[0][0].trim() && state[0][0] === state[1][1] && state[1][1] === state[2][2],
    state[0][2].trim() && state[0][2] === state[1][1] && state[1][1] === state[2][0],
  ]);

  const isGameFinished =
    every(flatten(state.map(row => row.map(value => value !== " ")))) || isVictory;

  return (
    <Wrapper>
      <Container>
        {isGameFinished && <h2>GAME OVER!</h2>}
        {isVictory && <h3>There was a winner.</h3>}
        <Game
          disabled={isGameFinished}
          state={state}
          useTurn={coord => playTurn(currentPlayer, coord)}
        />
      </Container>
      {isGameFinished && (
        <PlayAgainButton onClick={() => setState(DEFAULT_STATE)}>
          <h3>Play Again?</h3>
        </PlayAgainButton>
      )}
    </Wrapper>
  );
};

export default App;

///////////////////////////////

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: powderblue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: papayawhip;
  padding: 20px;
  border-radius: 12px;
`;

const PlayAgainButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: papayawhip;
  color: #333333;
  border-radius: 20px;
  height: 60px;
  width: 150px;
  letter-spacing: 2px;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    background: darkseagreen;
    color: powderblue;
  }
`;
