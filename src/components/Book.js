import React from 'react';

const Book = (props) => (
        <div className="book">
         <p className="book__text">{props.count}.  {props.bookText}</p>
        
         <button 
             className="button button--link"
             onClick={(e) =>{
             props.handleDeleteBook(props.bookText)}}
             > Delete Book </button>
        </div>
    );
export default Book;