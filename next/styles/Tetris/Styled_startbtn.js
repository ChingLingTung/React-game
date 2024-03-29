import styled from "styled-components";

export const StyledStartBTN = styled.button`
  box-sizing: border-box;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 4px solid #9393FF;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: #9393FF;
  background: #B9B9FF	;
  font-family: "Varela Round", sans-serif;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;

  &:hover{
    color: #B9B9FF;
    background: #9393FF;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.5);
  }
`