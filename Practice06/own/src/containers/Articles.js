import React, { Component } from 'react';
import "../css/style.css"
import "../css/animate.css"
import { NavLink } from "react-router-dom";
function articleObj(title, content, image) {
  this.title = title;
  this.content = content;
  this.image = image;
}
const template_content  = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."; 

var article_list = [
  new articleObj("Project 1", template_content, "../images/work_1.jpg"),
  new articleObj("Project 2", template_content, "../images/work_4.jpg"), 
  new articleObj("Project 3", template_content, "../images/work_1.jpg"),
  new articleObj("Project 4", template_content, "../images/work_4.jpg"),
];

class Articles extends Component {
  render() {
    return (
      <div id="fh5co-main">
        <div class="fh5co-intro text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="intro-lead">Write something you love</h1>
                        <p class="">100% Free HTML5 Template by <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div id = "fh5co-portfolio">
          {article_list.map(e => 
            <div class={"fh5co-portfolio-item" + 
              ((article_list.indexOf(e) % 2 == 0) ? (" fh5co-img-right"): (""))}>
              <div class="fh5co-portfolio-figure animate-box" 
                style={{backgroundImage: 'url(' + e.image + ')'}}></div>
              <div class="fh5co-portfolio-description">
                <h2> {e.title}</h2>
                <p>{e.content}</p>
                <p><a>
                <NavLink key={article_list.indexOf(e) + 1} to={"/Articles/" + (article_list.indexOf(e) + 1)} class="btn btn-primary">Read the Casestudy</NavLink>
                </a></p>
              </div>
            </div>  
          )}
          </div>
       </div>
        
     );
  }
}

export default Articles;
