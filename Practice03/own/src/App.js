import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

class ArticleBoard extends Component {
  render() {
    return (
      <div class="fh5co-portfolio-item ">
        <div class="fh5co-portfolio-figure animate-box" style="background-image: url(images/work_1.jpg);"></div>
          <div class="fh5co-portfolio-description">
            <h2>Project First</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" class="btn btn-primary">Read the casestudy</a></p>
        </div>
      </div>  
      );
  }
}

export default ArticleBoard;
