import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
                <Link to="/">
                    <img src={logo} alt="phone" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </nav>
        </>
    )
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
padding: 0.2rem 0.5rem;
border-radius: 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`

export default Navbar;