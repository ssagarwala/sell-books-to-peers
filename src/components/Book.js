import React from 'react';

const Book = (props) => (
        <div className="book">
         {props.bookText}
         <button 
             className="button button--link"
             onClick={(e) =>{
             props.handleDeleteBook(props.bookText)}}
             > Delete Book </button>
        </div>
    );
export default Book;