import React from 'react';
import { Navbar, Nav, NavItem, NavItemLink, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export default React.createClass({
    handleSelect(event, selectedKey) {
        event.preventDefault();
        alert('selected ' + selectedKey);
    },

    render() {
        const {brand} = this.props;

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="navbar-brand" href="/">{brand ? brand() : 'logo'}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Items</NavItem>
                        <NavItem eventKey={2} href="/categories">Categories</NavItem>
                        <NavDropdown eventKey={3} title="Admin" id="basic-nav-dropdown">
                            <NavItem eventKey={3.1} href="/login">Login</NavItem>
                            <NavItem eventKey={3.2} href="/register">Register</NavItem>
                            <NavItem eventKey={3.3} href="/logout">Logout</NavItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">{Meteor.userId()}</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});
