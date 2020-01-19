class SellBooksToPeers extends React.Component{
    constructor(props){
        super(props);
        const title = 'Sell Books To Peers';
        const subTitle = 'Sell Books To Peers';
        this.state={
            books: ['abc','def','ghi','jkl']
        }
    }
    render(){
        return(
            <div>
                <Header title={this.title} subTitle={this.subTitle}/>
                <Books books={this.state.books} />
                <AddBook />
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
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.books);
    }
    render(){
        return (
           <div>
           <button onClick={this.handleRemoveAll}>Remove All</button>
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
    addNewBook(e){
        e.preventDefault();
        const book = e.target.elements.book.value.trim();
        if(book){
            alert(book);
        }
    }
    render(){
        return (
            <div>
            <form onSubmit={this.addNewBook}>
            <input type="text" name="book"></input>
            <button>Add New Book </button>
            </form>
            <button> What should I do ?</button>
            </div>
        )
    }
}

ReactDOM.render(<SellBooksToPeers />, document.getElementById('app'));