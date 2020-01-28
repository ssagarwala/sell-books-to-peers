import React from 'react';
import Modal from 'react-modal';

const BookModal = (props)  => (
  <Modal
    isOpen={!!props.selectedBook}
    contentLabel="Selected Book"
    onRequestClose = {props.handleClearSelectedBook}
  >
  <h1> Selected Book </h1>
  {props.selectedBook && <p>{props.selectedBook} </p>}
  <button onClick={props.handleClearSelectedBook}> OK </button>
  </Modal>
);

export default BookModal;