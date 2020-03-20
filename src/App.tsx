import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './Theme';
import Button from './Buttons/Button';

const Main = styled.div`
  margin: 0;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: ${({ theme }) => theme.bodyBackground};
  height: 100vh;
  overflow-y: scroll;
  padding: 0 15px;

  *:focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;

const Box = styled.div`
  margin: 10px;
`;

const Event = styled.span`
  margin-left: 15px;
`;

function App() {
  const [simpleButtonState, toggleSimpleButtonState] = useState(false);
  const handleSimpleButtonClick = () => toggleSimpleButtonState(!simpleButtonState)

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Box>
          <p>Button based on button tag with custom focus behavior:</p>
          <Button onClick={handleSimpleButtonClick}>Click me!</Button>
          {simpleButtonState && <Event>clicked</Event>}
        </Box>
      </Main>
    </ThemeProvider>
  );
}

export default App;
