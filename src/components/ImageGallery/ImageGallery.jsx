import { Component } from 'react';
import axios from 'axios';

import { getImage } from 'services/api';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { StyledImageGallery } from './ImageGallery.styled';

export class ImageGalery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    searchQuery: 'cat',
  };

  fetchAllImages = async () => {
    const { page, searchQuery } = this.state;

    try {
      const images = await getImage(page, searchQuery);
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  async componentDidMount() {
    this.fetchAllImages();
  }

  render() {
    const showImg =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <StyledImageGallery>
        {showImg &&
          this.state.images.map((image, index) => (
            <ImageGalleryItem key={index} image={image} />
          ))}
      </StyledImageGallery>
    );
  }
}
