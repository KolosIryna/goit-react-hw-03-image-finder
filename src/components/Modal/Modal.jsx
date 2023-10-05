import { Component } from 'react';

import { StyledModal } from './Modal.styled';

export class Modal extends Component {
  state = {
    modal: {
      isOpen: false,
      img: null,
    },
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        img: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        img: null,
      },
    });
  };

  render() {
    return (
      <StyledModal>
        <div className="modal">
          <img src="" alt="" />
        </div>
      </StyledModal>
    );
  }
}
