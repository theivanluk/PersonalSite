import styled from 'styled-components';

export const SC_Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
  overflow: hidden;
`;

export const SC_NavBar = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
`;

export const SC_Layout = styled(SC_Main)`

`;