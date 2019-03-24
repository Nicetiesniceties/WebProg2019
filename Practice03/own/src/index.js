import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ArticleBoard from './App';

function articleObj(title, content, image) {
  this.title = title;
  this.content = content;
  this.image = image;
}
const template_content  = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."; 

var article_list = [
  new articleObj("Project First", template_content, "./images/work_1.jpg"),
  new articleObj("Project Second", template_content, "./images/work_4.jpg"), 
  new articleObj("Project Third", template_content, "./images/work_1.jpg"),
  new articleObj("Project Fourth", template_content, "./images/work_4.jpg"),
];

ReactDOM.render(<ArticleBoard article_list = {article_list}/>, 
                        document.getElementById('fh5co-portfolio'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
