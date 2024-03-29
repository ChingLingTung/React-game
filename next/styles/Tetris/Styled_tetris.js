import styled from 'styled-components';
// import WrapperImage from '../../public/tetris_bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  ${'' /* background-image: url(${WrapperImage}) #fff; */}
  background-size: cover;
  overflow: hidden;
  margin-bottom:50px;
  outline-style: none;
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: space-between;
  padding: 40px;
  margin: 0 auto;
  width: 540px;

  aside{
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`