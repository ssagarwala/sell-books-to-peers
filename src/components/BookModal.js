import React from 'react';
import Modal from 'react-modal';

const BookModal = (props)  => (
  <Modal
    isOpen={!!props.selectedBook}
    contentLabel="Selected Book"
    onRequestClose = {props.handleClearSelectedBook}
    closeTimeoutMS={200}
    className="modal"
    >
  <h3 className="modal__title"> Selected Book </h3>
  {props.selectedBook && <p className="modal__body">{props.selectedBook} </p>}
  <button className="button" onClick={props.handleClearSelectedBook}> OK </button>
  </Modal>
);

export default BookModal;