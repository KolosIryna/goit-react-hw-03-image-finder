import { Component } from 'react';

import { getImage } from 'services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

import { StyledAppContainer } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    modal: {
      isModalOpen: false,
      modalImageUrl: '',
    },
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  fetchAllImages = async () => {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const images = await getImage(searchQuery, page);
      if (!images.length) return;

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.fetchAllImages();
    }
  }

  openModal = imageUrl => {
    this.setState({
      modal: {
        isModalOpen: true,
        modalImageUrl: imageUrl,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isModalOpen: false,
        modalImageUrl: '',
      },
    });
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, error, modal } = this.state;

    return (
      <StyledAppContainer>
        <Searchbar onSearch={this.handleSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        <Modal
          isOpen={modal.isModalOpen}
          imageUrl={modal.modalImageUrl}
          onCloseModal={this.onCloseModal}
        />
        {this.state.page > 1 && <Button onClick={this.loadMore} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </StyledAppContainer>
    );
  }
}
