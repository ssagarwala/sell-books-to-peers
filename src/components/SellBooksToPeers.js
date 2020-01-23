import React from 'react';

import Header from './Header';
import AddBook from './AddBook';
import Books from './Books';
import Action from './Action';

class SellBooksToPeers extends React.Component{
    title = 'Sell Books To Peers';
    subTitle = 'Sell Books To Peers'
    state={
        books:[]
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
        alert(book);
    };
    handleDeleteAllBooks = ()=>{
        this.setState(()=>({ books: [] }));
    };
    render(){
        return(
            <div>
                <Header title={this.title} subTitle={this.subTitle}/>
                <Books books={this.state.books} handleDeleteAllBooks={this.handleDeleteAllBooks} handleDeleteBook={this.handleDeleteBook}/>
                <Action 
                handlePick={this.handlePick}
                hasBooks={this.state.books.length > 0}
                />
                <AddBook handleAddBook={this.handleAddBook} />
             </div>
        )
    }
    componentDidMount = ()=>{
        try{
            const stringOfBooks = localStorage.getItem("books");
            const objectOfBooks = JSON.parse(stringOfBooks);
            if(objectOfBooks){ //meaning ojectOfBooks not equal to null
                this.setState(()=>(
                    {books:jsonOfBooks} ))
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