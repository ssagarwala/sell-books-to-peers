class SellBooksToPeers extends React.Component{
    render(){
        const title = 'Sell Books To Peers';
        const subTitle = 'Sell Books To Peers';
        const books = ['abc','def','ghi','jkl'];
        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Books books={books} />
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
    render(){
        return (
           <div>
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
    render(){
        return (
            <div>
            <button> What should I do ?</button>
            </div>
        )
    }
}

ReactDOM.render(<SellBooksToPeers />, document.getElementById('app'));