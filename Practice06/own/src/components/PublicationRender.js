import React from 'react';
import Publication from './Puclication'
import './../styles.css';

// class PublicationRender extends Component {
// 	render() {
// 		let publication_list = {}
// 		for (let i = 0; i < this.props.data.length; i++) {
// 			publication_list[this.props.data[i].title] = i
// 		}
// 		const {id} = this.props.match.params
// 		return id && Object.keys(publication_list).includes(id) ? (
//             <Publication item={this.props.data[publication_list[id]]} />
//         ) : (
//             <div>
//                 <h3>Error: Post #{id} NOT FOUND</h3>
//             </div>
//         );
// 	}
// }

export default ({data, match}) => {
	let publication_list = {}
	for (let i = 0; i < data.length; i++) {
		publication_list[data[i].title] = i
	}
	const {id} = match.params
	
	return id && Object.keys(publication_list).includes(id) ? (
        <Publication item={data[publication_list[id]]} />
    ) : (
        <div>
            <h3>Error: Post #{id} NOT FOUND</h3>
        </div>
    );
}