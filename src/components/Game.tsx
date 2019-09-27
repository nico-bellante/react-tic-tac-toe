import React from "react";
import styled from "styled-components";
import { COLORS } from "../theme";
import Cell, { CellState } from "./Cell";

const Game = (props: {
  disabled: boolean;
  state: CellState[][];
  takeCell(coord: Coordinate): void;
}) => {
  const N = Array.from(Array(3));
  return (
    <Wrapper>
      {N.map((_, y) => (
        <Row>
          {N.map((_, x) => {
            return (
              <Cell
                onClick={props.disabled ? undefined : () => props.takeCell({ x, y })}
                state={props.state[y][x]}
              ></Cell>
            );
          })}
        </Row>
      ))}
    </Wrapper>
  );
};
export default Game;

const Wrapper = styled.div`
  border: 1px solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
