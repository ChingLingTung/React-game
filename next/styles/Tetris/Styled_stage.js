import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props. height},
    calc(30vh/${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  ${'' /* border: 2px solid #BE77FF; */}
  ${'' /* width: 100%;
  max-width:25vw; */}
  width:300px;
  height:475px;
  ${'' /* background: url('../../public/tetris_bg.png'); */}
  box-shadow:1px 1px 5px 2px rgba(20%,20%,20%,0.3) inset;
`;