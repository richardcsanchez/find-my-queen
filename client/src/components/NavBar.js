import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () =>
  <div>
    <NavLink to="/drag_queens" exact style={link} activeStyle={{background: 'grey'}}>Home</NavLink>
    <NavLink to="/drag_queens/new" exact style={link} activeStyle={{ background: 'grey' }}>New Queen</NavLink>
  </div>;

export default NavBar
