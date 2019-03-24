import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <div className="crop">
                <blockquote>
                    {this.props.text}
                </blockquote>
            </div>
        );
    }
}

export default Article;