class SellBooksToPeers extends React.Component{
    constructor(props){
        super(props);
        const title = 'Sell Books To Peers';
        const subTitle = 'Sell Books To Peers';
        this.handleDeleteAllBooks=this.handleDeleteAllBooks.bind(this);
        this.handleAddBook=this.handleAddBook.bind(this);
        this.state={
            books: ['abc','def','ghi','jkl']
        }
    }
    handleAddBook(book){
        if(!book){
            return 'Please enter valid book name';
        }
        else if(this.state.books.indexOf(book) > -1){
            return 'book already exists';
        }
        this.setState((prevState)=>{
                return{
                    books: prevState.books.concat([book])
                    //or book: prevState.books.concat(book)
                }
            });
    }
    handleDeleteAllBooks(){
        this.setState(()=>{
           return {
            books: []
           } 
        })
    }
    render(){
        return(
            <div>
                <Header title={this.title} subTitle={this.subTitle}/>
                <Books books={this.state.books} handleDeleteAllBooks={this.handleDeleteAllBooks} />
                <AddBook handleAddBook={this.handleAddBook} />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
            {this.props.title}
            {this.props.subTitle}
            </div>
        )
    }
}
class Books extends React.Component{
  
    render(){
        return (
           <div>
           <button onClick={this.props.handleDeleteAllBooks}>Remove All</button>
            {this.props.books.length}
            {
                this.props.books.map((book)=>
                <Book key={book} bookText={book} />)
           }
        </div>
        )
    }
}
class Book extends React.Component{
    render(){
        return (
            <div>
             {this.props.bookText}
            </div>
        )
    }
}
class AddBook extends React.Component{
     constructor(props){
        super(props);
        this.handleAddBook=this.handleAddBook.bind(this);
        this.state = {
             error:undefined
      }
    }

    handleAddBook(e){
        e.preventDefault();
        const book = e.target.elements.book.value.trim();
        let error = this.props.handleAddBook(book);
        this.setState(()=>{
          return {
                 error:error
             };
        });
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAddBook}>
            <input type="text" name="book"></input>
            {this.state.error && <p>{this.state.error}</p>}
            <button>Add New Book </button>
            </form>
            <button> What should I do ?</button>
            </div>
        )
    }
}

ReactDOM.render(<SellBooksToPeers />, document.getElementById('app'));