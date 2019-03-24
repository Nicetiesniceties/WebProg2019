import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ArticleBoard from './App';

const title_list = [
    "Project First", 
    "Project Second", 
    "Project Third", 
    "Project Fourth"
  ]
const content = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.";
/*ReactDOM.render(<ArticleBoard title_list = {title_list}
                        content = {content}/>, document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
