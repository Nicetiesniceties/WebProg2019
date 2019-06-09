import React from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import {POSTS_QUERY} from '../../graphql'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import './post.css'

class PostPreview extends React.Component {
	state = {isfold: true}

	render() {
		return (
			<div>
				<Card onClick={e => this.setState(
          (state) => ({isfold: !state.isfold})
          )} className="PostPreview bigcar">
            <b>{this.props.name} posts: {this.props.posts.length}</b>
        </Card>
				<div className="post-container">
					{this.props.posts.map((title, key) => {
						if (!this.state.isfold) {
							return (
								<Query query={POSTS_QUERY} variables={{ query:title }}>
						          {({ loading, error, data, subscribeToMore }) => {
						            if (loading) return <p>Loading...</p>
						            if (error) return <p>Error :(((</p>

						            // console.log(data)
						            if (data.posts[0] !== undefined)
						            	return <Post data={data.posts[0]} key={key} />
						            return <div></div>
						          }}
						        </Query>
                )}
            else
						  return <div></div>
				    }
					)}
				</div>
			</div>
		)
	}
}

export default PostPreview