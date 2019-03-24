import React, { Component } from 'react';

function TableRow(props) {
    let Tag = props.isHeader ? "th" : "td";
    return (
        <tr>
            {props.cells.map(element => {
                return <Tag>{element}</Tag>
            })}
        </tr>
    );
}

class Table extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.table.title;
        this.header = this.props.table.header;
        this.content = this.props.table.content;
    }
    render() {
        return (
            <table>
                <caption>{this.title}</caption>
                <TableRow isHeader={true} cells={this.header} />
                {this.content.map(element => {
                    return <TableRow isHeader={false} cells={element} />
                })}
            </table>
        );
    }
}

export default Table;