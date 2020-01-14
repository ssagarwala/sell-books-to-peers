const app = {
    title: 'Sell Books To Peers',
    subtitle : 'Sell Books To Peers'
}
const user = {
    name: 'abc',
    password : 'password',
    books: [
           'book1',
           'book2',
           'book3'
    ]
}

const getBooks = (user)=>{
    return  user.books.map((book)=>{
            return <li key={book}>{book}</li>;
        });
}
 
const appJSX = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.subtitle}</h2>
            {user.password === 'password' && <strong> Welcome {user.name} </strong>}
            {user.books.length>0 ? 'Here are your books': 'You have no books'}
            {getBooks(user)}
        </div>
)
const appRoot = document.getElementById('app-root');

ReactDOM.render(appJSX,appRoot);