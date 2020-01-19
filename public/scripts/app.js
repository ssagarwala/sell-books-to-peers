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
        _this.handleAddBook = _this.handleAddBook.bind(_this);
        _this.state = {
            books: ['abc', 'def', 'ghi', 'jkl']
        };
        return _this;
    }

    _createClass(SellBooksToPeers, [{
        key: 'handleAddBook',
        value: function handleAddBook(book) {
            if (!book) {
                return 'Please enter valid book name';
            } else if (this.state.books.indexOf(book) > -1) {
                return 'book already exists';
            }
            this.setState(function (prevState) {
                return {
                    books: prevState.books.concat([book])
                    //or book: prevState.books.concat(book)
                };
            });
        }
    }, {
        key: 'handleDeleteAllBooks',
        value: function handleDeleteAllBooks() {
            this.setState(function () {
                return {
                    books: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title, subTitle: this.subTitle }),
                React.createElement(Books, { books: this.state.books, handleDeleteAllBooks: this.handleDeleteAllBooks }),
                React.createElement(AddBook, { handleAddBook: this.handleAddBook })
            );
        }
    }]);

    return SellBooksToPeers;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.title,
                this.props.subTitle
            );
        }
    }]);

    return Header;
}(React.Component);

var Books = function (_React$Component3) {
    _inherits(Books, _React$Component3);

    function Books() {
        _classCallCheck(this, Books);

        return _possibleConstructorReturn(this, (Books.__proto__ || Object.getPrototypeOf(Books)).apply(this, arguments));
    }

    _createClass(Books, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteAllBooks },
                    'Remove All'
                ),
                this.props.books.length,
                this.props.books.map(function (book) {
                    return React.createElement(Book, { key: book, bookText: book });
                })
            );
        }
    }]);

    return Books;
}(React.Component);

var Book = function (_React$Component4) {
    _inherits(Book, _React$Component4);

    function Book() {
        _classCallCheck(this, Book);

        return _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).apply(this, arguments));
    }

    _createClass(Book, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.bookText
            );
        }
    }]);

    return Book;
}(React.Component);

var AddBook = function (_React$Component5) {
    _inherits(AddBook, _React$Component5);

    function AddBook(props) {
        _classCallCheck(this, AddBook);

        var _this5 = _possibleConstructorReturn(this, (AddBook.__proto__ || Object.getPrototypeOf(AddBook)).call(this, props));

        _this5.handleAddBook = _this5.handleAddBook.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(AddBook, [{
        key: 'handleAddBook',
        value: function handleAddBook(e) {
            e.preventDefault();
            var book = e.target.elements.book.value.trim();
            var error = this.props.handleAddBook(book);
            this.setState(function () {
                return {
                    error: error
                };
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
                ),
                React.createElement(
                    'button',
                    null,
                    ' What should I do ?'
                )
            );
        }
    }]);

    return AddBook;
}(React.Component);

ReactDOM.render(React.createElement(SellBooksToPeers, null), document.getElementById('app'));
