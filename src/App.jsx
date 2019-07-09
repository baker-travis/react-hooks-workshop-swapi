import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container
} from '@material-ui/core';
import StarWarsPeople from './components/StarWarsPeople';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React Hooks Workshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <h1>Star Wars People</h1>
        <StarWarsPeople />
      </Container>
    </div>
  );
}
