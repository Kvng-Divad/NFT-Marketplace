import React from 'react'
import './Navbar.css'
import styled from 'styled-components'
import logo from "../../Assets/logo.png"
import Button from '../Button/Button'


const Navbar = () => {
  return (
    <Nav className='nav flex'>
        <div className='brand'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='toggle'></div>
        <div className='links flex'>
            <ul className='flex'>
                <li><a href='#home' className='active'>Home</a></li>
                <li><a href='#home'>Marketplace</a></li>
                <li><a href='#home'>Sellers</a></li>
                <li><a href='#home'>Create</a></li>
            </ul>
        </div>
        <Button text='Contact' btn='btn'/>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
    padding: 1rem .5rem;
    justify-content: space-between;
    align-items: center;
    .toggle{
        display: none;
    }
    .links {
        height: 4rem;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 7rem;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    }
    @media (min-width:960px){
        margin: 0 2rem;
        padding: 0 1rem;
        justify-content: space-between;
    }
`;