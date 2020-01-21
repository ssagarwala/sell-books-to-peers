'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SellBooksToPeers = function (_React$Component) {
    _inherits(SellBooksToPeers, _React$Component);

    function SellBooksToPeers(props) {
        _classCallCheck(this, SellBooksToPeers);

        var _this = _possibleConstructorReturn(this, (SellBooksToPeers.__proto__ || Object.getPrototypeOf(SellBooksToPeers)).call(this, props));

        var title = 'Sell Books To Peers';
        var subTitle = 'Sell Books To Peers';
        _this.handleDeleteAllBooks = _this.handleDeleteAllBooks.bind(_this);
        _this.handleDeleteBook = _this.handleDeleteBook.bind(_this);
        _this.handleAddBook = _this.handleAddBook.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            books: []
        };
        return _this;
    }

    _createClass(SellBooksToPeers, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var stringOfBooks = localStorage.getItem("books");
                var objectOfBooks = JSON.parse(stringOfBooks);
                if (objectOfBooks) {
                    this.setState(function () {
                        return { books: jsonOfBooks };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.books.length !== this.state.books.length) {
                localStorage.setItem("books", JSON.stringify(this.state.books));
                console.log("saving data");
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'handleDeleteBook',
        value: function handleDeleteBook(bookName) {
            this.setState(function (prevState) {
                return {
                    books: prevState.books.filter(function (book) {
                        return book !== bookName;
                    })
                };
            });
        }
    }, {
        key: 'handleAddBook',
        value: function handleAddBook(book) {
            if (!book) {
                return 'Please enter valid book name';
            } else if (this.state.books.indexOf(book) > -1) {
                return 'book already exists';
            }
            //or book: prevState.books.concat(book)
            this.setState(function (prevState) {
                return {
                    books: prevState.books.concat([book])

                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.books.length);
            var book = this.state.books[randomNumber];
            alert(book);
        }
    }, {
        key: 'handleDeleteAllBooks',
        value: function handleDeleteAllBooks() {
            this.setState(function () {
                return { books: [] };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title, subTitle: this.subTitle }),
                React.createElement(Books, { books: this.state.books, handleDeleteAllBooks: this.handleDeleteAllBooks, handleDeleteBook: this.handleDeleteBook }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasBooks: this.state.books.length > 0
                }),
                React.createElement(AddBook, { handleAddBook: this.handleAddBook })
            );
        }
    }]);

    return SellBooksToPeers;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        props.title,
        props.subTitle
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasBooks
            },
            'What should I do ??'
        )
    );
};

var Books = function Books(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteAllBooks },
            'Remove All'
        ),
        props.books.length,
        props.books.map(function (book) {
            return React.createElement(Book, { key: book, bookText: book, handleDeleteBook: props.handleDeleteBook });
        })
    );
};
var Book = function Book(props) {
    return React.createElement(
        'div',
        null,
        props.bookText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteBook(props.bookText);
                }
            },
            ' Delete Book '
        )
    );
};

var AddBook = function (_React$Component2) {
    _inherits(AddBook, _React$Component2);

    function AddBook(props) {
        _classCallCheck(this, AddBook);

        var _this2 = _possibleConstructorReturn(this, (AddBook.__proto__ || Object.getPrototypeOf(AddBook)).call(this, props));

        _this2.handleAddBook = _this2.handleAddBook.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddBook, [{
        key: 'handleAddBook',
        value: function handleAddBook(e) {
            e.preventDefault();
            var book = e.target.elements.book.value.trim();
            var error = this.props.handleAddBook(book);
            // this.setState(()=>{
            //   return {
            //          error:error
            //      };
            // });
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddBook },
                    React.createElement('input', { type: 'text', name: 'book' }),
                    this.state.error && React.createElement(
                        'p',
                        null,
                        this.state.error
                    ),
                    React.createElement(
                        'button',
                        null,
                        'Add New Book '
                    )
                )
            );
        }
    }]);

    return AddBook;
}(React.Component);

ReactDOM.render(React.createElement(SellBooksToPeers, null), document.getElementById('app'));
