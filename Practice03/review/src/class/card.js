import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="polaroid">
                <img src={this.props.img} alt="a cat" />
                <div className="container">
                    <p><a href={this.props.img} target="_blank" rel="noopener noreferrer">{this.props.text}</a></p>
                </div>
            </div>
        );
    }
}

export default Card;