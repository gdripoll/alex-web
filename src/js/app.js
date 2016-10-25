/* jshint esversion:6 */
//require('../css/_variables.scss');
//require('../css/_bootswatch.scss');
//require('../css/home.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
// import Todos from "./pages/Todos";
// import Settings from "./pages/Settings";

const app = document.getElementById('app');

const a=2;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app);


// <Route path="favorites" component={Favorites}></Route>
// <Route path="settings" component={Settings}></Route>
