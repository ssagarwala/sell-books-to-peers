import React from 'react';
import Book from './Book';

const Books = (props) => (
       <div>
          <div className="widget-header">
              <h3 className="widget-header__title"> Your Books</h3>
              <button className="button button--link" 
                onClick={props.handleDeleteAllBooks}>
                Remove All
                </button>
          </div>
        {props.books.length == 0 && <p className="widget__message"> Please add an option to get started!</p>}
        {
            props.books.map((book,index)=>
            <Book   
              key={book} bookText={book}  
              count= {index + 1}
              handleDeleteBook={props.handleDeleteBook}
            />
           )
       }
    </div>
    ); 

export default Books;
