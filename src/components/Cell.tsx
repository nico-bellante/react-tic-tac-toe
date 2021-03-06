import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../App";

export type CellState = "X" | "O" | " ";

const Cell = (props: { state: CellState; onClick?(): void }) => {
  const COLORS = useContext(ThemeContext);
  return (
    <Wrapper onClick={props.onClick}>
      <Text
        style={{ color: props.state === "X" ? COLORS.color1.dark : COLORS.color2.dark }}
      >
        {props.state}
      </Text>
    </Wrapper>
  );
};

export default Cell;

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid gray;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 56px;
  font-weight: 700;
  -webkit-text-stroke: 2px black;
`;
