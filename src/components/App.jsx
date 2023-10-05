import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

import { StyledAppContainer } from './App.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <StyledAppContainer>
        <Searchbar />
        {/* {this.state.modal.isOpen && <Modal img={this.state.modal.img/>} */}
      </StyledAppContainer>
    );
  }
}
