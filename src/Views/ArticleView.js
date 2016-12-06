import React, {Component} from 'react';
import './ArticleView.css'
export default class ArticleView extends Component {
    render() {
        return (
            <div id="Article">
                <h1>Article Title here</h1>
                <h4>Author here</h4>
                <p>Article Here</p>
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