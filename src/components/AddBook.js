import React from 'react';

class AddBook extends React.Component{
    
    state = {
        error:undefined
  }
   handleAddBook = (e)=>{
       e.preventDefault();
       const book = e.target.elements.book.value.trim();
       let error = this.props.handleAddBook(book);
       // this.setState(()=>{
       //   return {
       //          error:error
       //      };
       // });
       this.setState(()=>({error:error}))
   };
   render(){
       return (
           <div>
           <form onSubmit={this.handleAddBook}>
           <input type="text" name="book"></input>
           {this.state.error && <p>{this.state.error}</p>}
           <button  className="button">Add New Book </button>
           </form>

           </div>
       )
   }
}
export default AddBook;