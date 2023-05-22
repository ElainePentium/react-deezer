import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


   
    
function NavBarExample(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div>
        <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
                </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}

export default NavBarExample;
