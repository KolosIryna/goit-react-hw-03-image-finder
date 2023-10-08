import { Component } from 'react';
// import axios from 'axios';

import { getImage } from 'services/api';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { StyledImageGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    page: 1,
    searchQuery: this.props.searchQuery,
  };

  fetchAllImages = async () => {
    const { page, searchQuery } = this.state;

    try {
      this.setState({ isLoading: true });

      const images = await getImage(page, searchQuery);
      if (images) {
        this.setState(prevState => ({
          images: prevState.images ? [...prevState.images, ...images] : images,
          page: prevState.page + 1,
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // async componentDidMount() {
  //   this.fetchAllImages();
  // }
  async componentDidUpdate(prevProps) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.setState(
        { searchQuery: this.props.searchQuery, images: null },
        () => {
          this.fetchAllImages();
        }
      );
    }
  }

  render() {
    const showImg =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.error && <p>{this.state.error}</p>}
        <StyledImageGallery>
          {showImg &&
            this.state.images.map((image, index) => (
              <ImageGalleryItem key={index} image={image} />
            ))}
        </StyledImageGallery>
      </>
    );
  }
}
