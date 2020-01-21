class SellBooksToPeers extends React.Component{
    constructor(props){
        super(props);
        const title = 'Sell Books To Peers';
        const subTitle = 'Sell Books To Peers';
        this.handleDeleteAllBooks=this.handleDeleteAllBooks.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.handleAddBook=this.handleAddBook.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state={
            books:[]
        }
    }
    componentDidMount(){
        try{
            const stringOfBooks = localStorage.getItem("books");
            const objectOfBooks = JSON.parse(stringOfBooks);
            if(objectOfBooks){
                this.setState(()=>(
                    {books:jsonOfBooks} ))
            }
        }
        catch(e){}
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.books.length !== this.state.books.length)
        {
            localStorage.setItem("books",JSON.stringify(this.state.books))
            console.log("saving data");
        }
    }
    componentWillUnmount(){

    }
    handleDeleteBook(bookName){ 
        this.setState((prevState)=>({  
            books:prevState.books.filter((book)=>{
                return book !== bookName;
            })
         })
        )}
    handleAddBook(book){
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
    }
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.books.length);
        const book = this.state.books[randomNumber];
        alert(book);
    }
    handleDeleteAllBooks(){
        this.setState(()=>({ books: [] }));
    }
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
}


const Header = (props) => {
        return (
            <div>
            {props.title}
            {props.subTitle}
            </div>
        )
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasBooks}
            >
            What should I do ??
            </button>   
        </div>
    )
}


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
const Book = (props) => {
        return (
            <div>
             {props.bookText}
             <button onClick={(e) =>{
                 props.handleDeleteBook(props.bookText)}}
                 > Delete Book </button>
            </div>
        )

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
        // this.setState(()=>{
        //   return {
        //          error:error
        //      };
        // });
        this.setState(()=>({error:error}))
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAddBook}>
            <input type="text" name="book"></input>
            {this.state.error && <p>{this.state.error}</p>}
            <button>Add New Book </button>
            </form>

            </div>
        )
    }
}

ReactDOM.render(<SellBooksToPeers  />, document.getElementById('app'));