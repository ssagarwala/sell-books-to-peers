'use strict';

var app = {
    title: 'Sell Books To Peers',
    subtitle: 'Sell Books To Peers'
};
var user = {
    name: 'abc',
    password: 'password',
    books: ['book1', 'book2', 'book3']
};

var getBooks = function getBooks(user) {
    return user.books.map(function (book) {
        return React.createElement(
            'li',
            { key: book },
            book
        );
    });
};

var appJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    user.password === 'password' && React.createElement(
        'strong',
        null,
        ' Welcome ',
        user.name,
        ' '
    ),
    user.books.length > 0 ? 'Here are your books' : 'You have no books',
    getBooks(user)
);
var appRoot = document.getElementById('app-root');

ReactDOM.render(appJSX, appRoot);
