import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Cards from './components/cardpreviews';
import Card from './components/card';
import Create from './components/create';
import data from './data';

var container = document.getElementById('container');

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'login'   : 'login',
    'register': 'register',
    'create'  : 'create',
    'cards'   : 'cards',
    'card/:id': 'card',
},
  home(){
    ReactDom.render(<Home/>, container);
  },
  login(){
    ReactDom.render(<Login/>, container);
  },
  register(){
    ReactDom.render(<Register/>, container);
  },
  create(){
    ReactDom.render(<Create />, container);
  },
  cards(){
    ReactDom.render(<Cards data={data}/>, container);
  },
  card(name){
    ReactDom.render(<Card data="{data[0]}"/>, container);
  },
});

const router = new Router();
export default router;
