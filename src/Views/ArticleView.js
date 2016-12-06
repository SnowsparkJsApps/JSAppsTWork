import React, {Component} from 'react';
import './ArticleView.css'
export default class ArticleView extends Component {
    render() {
        return (
            <div id="Article">
                <h1>{this.props.book.title}</h1>
                <h4>{this.props.book.author}</h4>
                <p>{this.props.book.description}</p>
                <ul>
                    <li>CommentOne</li>
                    <li>CommentTwo</li>
                    <li>CommentThree</li>
                    <li>CommentFour</li>
                </ul>
                <textarea>Add Comments here</textarea>
            </div>

        )
    }
}