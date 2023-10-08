import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
        {hasSearched && <ImageGallery searchQuery={searchQuery} />}
      </StyledAppContainer>
    );
  }
}
