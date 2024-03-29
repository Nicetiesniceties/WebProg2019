import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "../css/style.css"
import HomeRender from "../components/HomeRender" 
import ArticleRender from "../components/ArticleRender" 
import Articles from "../containers/Articles" 
export default class Blog extends Component {
    render() {
        return (
            <div>
                <header id="fh5co-header" role="banner">
                    <nav class="navbar navbar-default" role="navigation">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="navbar-header"> 
                                        <NavLink to="/home" class="navbar-brand">IBlog</NavLink>
                                    </div>
                                    <div id="fh5co-navbar">
                                        <ul class="nav navbar-nav navbar-right">
                                            <li><a href=""><span><NavLink to="/home">Home</NavLink> <span class="border"></span></span></a></li>
                                            <li><a href=""><span><NavLink to="/articles">Articles</NavLink> <span class="border"></span></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                
                {/* <!-- END .header --> */}
                <Switch>
                    <Route exact path="/articles" component={Articles} />
                    <Route path="/articles/:id?" component={ArticleRender} />
                    <Route path="/home" component={HomeRender} />
                    <Redirect from="/" to="/home" />
                </Switch>

                <footer id="fh5co-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 text-center">
                                <p>&copy; Clean Free HTML5. All Rights Reserved. <br/>Created by <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> Images: <a href="http://pexels.com/" target="_blank">Pexels</a></p>
                            </div>
                        </div>
                    </div>
                </footer>

                
                {/* <!-- jQuery --> */}
                <script src="js/jquery.min.js"></script>
                {/* <!-- jQuery Easing --> */}
                <script src="js/jquery.easing.1.3.js"></script>
                {/* <!-- Bootstrap --> */}
                <script src="js/bootstrap.min.js"></script>
                {/* <!-- Waypoints --> */}
                <script src="js/jquery.waypoints.min.js"></script>
                {/* <!-- Main JS --> */}
                <script src="js/main.js"></script>
            </div>
        );
    }
}
