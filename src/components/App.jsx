import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { StyledAppContainer } from './App.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <StyledAppContainer>
        <Searchbar />
      </StyledAppContainer>
    );
  }
}
