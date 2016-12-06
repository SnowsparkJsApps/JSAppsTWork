import React, { Component } from 'react';
import './BooksView.css'

export default class BooksView extends Component {
    render() {
        let bookRows = this.props.books.map(book =>
        <div key={book._id} className="News" onClick={this.props.articleView}>
            {console.log(book._id)}
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
                {this.getActions(book, this.props.userId)}

        </div>
        );

        return (
            <div >
            {bookRows}
            </div>
        );
    }

    getActions(book, userId) {
        if (book._acl.creator === userId)
            return (
                <div>
                    <input type="button" value="Edit"
                        onClick={this.props.editBookClicked.bind(this, book._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                       onClick={this.props.deleteBookClicked.bind(this, book._id)} />

                </div>
            );
        else
            return<div></div>;
    }
}
