import { StyledAppContainer } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledAppContainer>
      <img src={image.webformatURL} alt={image.alt} />
    </StyledAppContainer>
  );
};
