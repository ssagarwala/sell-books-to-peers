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
           {this.state.error && <p className="add-option-error">{this.state.error}</p>}
           <form className="add-option" onSubmit={this.handleAddBook}>
             <input className="add-option__input" type="text" name="book"></input>   
             <button  className="button">Add New Book </button>
           </form>

           </div>
       )
   }
}
export default AddBook;