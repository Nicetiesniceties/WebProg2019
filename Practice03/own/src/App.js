import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import bg from './images/work_1.jpg'

class ArticleBoard extends Component {
  render() {
    return (
     <div class = "fh5co-portfolio">
      {this.props.article_list.map(e => 
        <div class={"fh5co-portfolio-item" + 
          ((this.props.article_list.indexOf(e) % 2 == 0) ? (" fh5co-img-right"): (""))}>
          <div class="fh5co-portfolio-figure animate-box" 
            style={{backgroundImage: 'url(' + e.image + ')'}}></div>
          <div class="fh5co-portfolio-description">
            <h2> {e.title}</h2>
            <p>{e.content}</p>
            <p><a href="#" class="btn btn-primary">Read the casestudy</a></p>
          </div>
         </div>  
        )}
      </div>
     );
  }
}

export default ArticleBoard;
