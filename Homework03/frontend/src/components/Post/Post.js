import React from 'react'

import { Button, Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap'
import "./post.css"
const Post = ({
  data: {
    title,
    body,
    author: { name },
    published
  }
}) => {
  return (
    /*<Card style={{ margin: '30px auto', width: '400px' }}>
     <CardHeader><b>Title: {title}</b></CardHeader>
       <CardBody>
         <CardText>a{body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}</CardText>
       </CardBody>
       <CardFooter>{`${name} - published: ${published}`}</CardFooter>
    </Card>*/
    <div class="car">
		  <div class="car-header">
		  	<h1 class="car-title">{title}</h1>
		  </div>
		  <div class="car-body">
		  	<p class="car-content">{body || <p style={{ opacity: 0.5 }}>No body for this post...</p>}</p>
		  </div>

      <div class="car-footer">
      	<Button color="danger" >Like </Button>
  		</div>
   	</div>

  )
}

export default Post
