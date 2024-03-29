import styled from 'styled-components';
export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.3);
  border: ${props =>(props.type === 0 ? '0px solid' : '5px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.8);
  border-top-color: rgba(${props => props.color}, 0.2);
  border-right-color: rgba(${props => props.color}, 0.6);
  border-left-color: rgba(${props => props.color}, 0.4);
`