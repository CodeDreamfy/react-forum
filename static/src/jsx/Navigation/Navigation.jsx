
  define([
  'jquery', 
  'react',
  'react-bootstrap/Navbar',
  'react-bootstrap/Nav',
  'react-bootstrap/NavItem',
  'react-bootstrap/DropdownButton',
  'react-bootstrap/MenuItem'  
], function(
   $, 
   React,
   Navbar,
   Nav,
   NavItem,
   DropdownButton,
   MenuItem
) {

  var Navigation = React.createClass({
    render: function() {
      return (
        <Navbar>
          <a className="navbar-brand" href="/">
              <img className="nav-logo" src="/dist/images/logo.svg" width="36" height="36"/>
              Reactjs 中文社区
          </a>
          <Nav>  
            <NavItem eventKey={1}>首页</NavItem>
            <NavItem eventKey={2}>话题</NavItem>
          </Nav>
        </Navbar>
      );
    }
  });

  return Navigation;
});