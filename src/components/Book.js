import React from 'react';

const Book = (props) => {
    return (
        <div>
         {props.bookText}
         <button onClick={(e) =>{
             props.handleDeleteBook(props.bookText)}}
             > Delete Book </button>
        </div>
    );
};

export default Book;