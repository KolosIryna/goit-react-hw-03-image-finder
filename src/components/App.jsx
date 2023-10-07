import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

import { StyledAppContainer } from './App.styled';

export class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <Searchbar />
        <ImageGalery />
        {/* {this.state.modal.isOpen && <Modal img={this.state.modal.img/>} */}
      </StyledAppContainer>
    );
  }
}
