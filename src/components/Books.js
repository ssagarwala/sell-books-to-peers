import React from 'react';
import Book from './Book';

const Books = (props) => {
    return (
       <div>
       <button onClick={props.handleDeleteAllBooks}>Remove All</button>
        {props.books.length}
        {
            props.books.map((book)=>
            <Book key={book} bookText={book}  handleDeleteBook={props.handleDeleteBook}/>)
       }
    </div>
    )
}

export default Books;
