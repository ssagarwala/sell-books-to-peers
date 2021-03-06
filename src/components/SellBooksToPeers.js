import React from 'react';

import Header from './Header';
import AddBook from './AddBook';
import Books from './Books';
import Action from './Action';
import BookModal from './BookModal';

class SellBooksToPeers extends React.Component{
    title = 'Sell Books To Peers';
    subTitle = 'Sell Books To Peers'
    state={
        books:[],
        selectedBook:undefined
    }

    
    handleAddBook = (book)=>{
        if(!book){
            return 'Please enter valid book name';
        }
        else if(this.state.books.indexOf(book) > -1){
            return 'book already exists';
        }
        //or book: prevState.books.concat(book)
        this.setState((prevState)=>({
                    books: prevState.books.concat([book])
                    
                }));
    };
    handlePick= () => {
        const randomNumber = Math.floor(Math.random() * this.state.books.length);
        const book = this.state.books[randomNumber];
        this.setState(()=> ({
            selectedBook: book
        }));
    };
    handleClearSelectedBook = () =>{
       this.setState(() =>({
        selectedBook: undefined
       }));
    };

    handleDeleteAllBooks = ()=>{
        this.setState(()=>({ books: [] }));
    };
    render(){
        return(
            <div>
                <Header title={this.title} subTitle={this.subTitle}/>
                <div className="container">
                <Action 
                handlePick={this.handlePick}
                hasBooks={this.state.books.length > 0}
                />
                <div className="widget">
                    <Books books={this.state.books} handleDeleteAllBooks={this.handleDeleteAllBooks} handleDeleteBook={this.handleDeleteBook}/>
                    <AddBook handleAddBook={this.handleAddBook} />
                </div>
                <BookModal selectedBook={this.state.selectedBook}  
                handleClearSelectedBook ={this.handleClearSelectedBook} />
                </div>
            </div>
        )
    }
    componentDidMount = ()=>{
        try{
            const stringOfBooks = localStorage.getItem("books");
            const objectOfBooks = JSON.parse(stringOfBooks);
            if(objectOfBooks){ //meaning ojectOfBooks not equal to null
                this.setState(()=>(
                    {books:objectOfBooks} ))
            }
        }
        catch(e){}
    }
    componentDidUpdate = (prevProps, prevState)=>{
        if(prevState.books.length !== this.state.books.length)
        {
            localStorage.setItem("books",JSON.stringify(this.state.books))
            console.log("saving data");
        }
    }
    componentWillUnmount(){

    }
    handleDeleteBook = (bookName)=>{ 
        this.setState((prevState)=>({  
            books:prevState.books.filter((book)=>{
                return book !== bookName;
            })
         })
        )}
}

export default SellBooksToPeers;
//yar run dev-server