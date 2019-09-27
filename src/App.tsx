import React, { useState } from "react";
import styled, { css } from "styled-components";

import { CellState } from "./components/Cell";
import Game from "./components/Game";

import { cloneDeep, every, flatten, some } from "lodash";
import { COLORS } from "./theme";

const DEFAULT_STATE: CellState[][] = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
const DEFAULT_PLAYER: Player = "X";
const App: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(DEFAULT_PLAYER);

  const [state, setState] = useState(DEFAULT_STATE);
  function playTurn(player: Player, { x, y }: Coordinate) {
    if (state[y][x] === " ") {
      const newState = cloneDeep(state);
      newState[y][x] = player;
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setState(newState);
    }
  }

  const isXVictory = getIsVictory("X", state);
  const isOVictoy = getIsVictory("O", state);

  const isVictory = isXVictory || isOVictoy;

  const isGameFinished =
    every(flatten(state.map(row => row.map(value => value !== " ")))) || isVictory;

  return (
    <Wrapper>
      <Header style={{ visibility: isGameFinished ? "visible" : "hidden" }}>
        <h1 style={{ marginBottom: "4px" }}>GAME OVER</h1>
        <h2
          style={{
            marginTop: "4px",
            color: isXVictory ? COLORS.color1.dark : COLORS.color2.dark,
          }}
        >
          {isVictory ? `${isXVictory ? "X" : "O"} has won the round!` : "- DRAW -"}
        </h2>
      </Header>

      <Container>
        <Game
          disabled={isGameFinished}
          state={state}
          takeCell={coord => playTurn(currentPlayer, coord)}
        />
      </Container>
      <Footer>
        <PlayAgainButton
          style={{ visibility: isGameFinished ? "visible" : "hidden" }}
          onClick={() => {
            setState(DEFAULT_STATE);
            setCurrentPlayer(DEFAULT_PLAYER);
          }}
        >
          <h3>Play Again?</h3>
        </PlayAgainButton>
      </Footer>
    </Wrapper>
  );
};

export default App;

///////////////////////////////

function getIsVictory(player: Player, state: CellState[][]): boolean {
  return some([
    every(state[0].map(value => value.trim() && value === player)),
    every(state[1].map(value => value.trim() && value === player)),
    every(state[2].map(value => value.trim() && value === player)),
    every(state.map(row => row[0].trim() && row[0] === player)),
    every(state.map(row => row[1].trim() && row[1] === player)),
    every(state.map(row => row[2].trim() && row[2] === player)),
    player === state[0][0] && player === state[1][1] && player === state[2][2],
    player === state[0][2] && player === state[1][1] && player === state[2][0],
  ]);
}

const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${FlexCenter}
  height: 100vh;
  background: ${COLORS.color2.light};
  color: ${COLORS.color1.dark};
`;

const Container = styled.div`
  ${FlexCenter}
  background: ${COLORS.color1.dark};
  padding: 20px;
  border-radius: 12px;
`;

const Header = styled.div`
  height: 200px
  letter-spacing: 4px;
  ${FlexCenter}
  -webkit-text-stroke: 1px black;
`;

const Footer = styled.div`
  height: 200px;
`;

const PlayAgainButton = styled.div`
  ${FlexCenter}
  background: ${COLORS.color1.dark};
  color: #131313;
  border-radius: 15px;
  height: 60px;
  width: 150px;
  letter-spacing: 1px;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    background: ${COLORS.color1.bright};
  }
`;
