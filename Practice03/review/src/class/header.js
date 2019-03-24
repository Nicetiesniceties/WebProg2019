import React, { Component } from 'react';

class Header extends Component {
    render() {
        const Tag = `h${this.props.priority}`;
        return <Tag><span className="hilight">{this.props.text}</span></Tag>;
    }
}

export default Header;