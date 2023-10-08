import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';

import { StyledAppContainer } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    hasSearched: false,
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      hasSearched: true,
    });
  };

  render() {
    const { searchQuery, hasSearched } = this.state;

    return (
      <StyledAppContainer>
        <Searchbar onSearch={this.handleSearch} />
        {hasSearched && <ImageGalery searchQuery={searchQuery} />}
      </StyledAppContainer>
    );
  }
}
