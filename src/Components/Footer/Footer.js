import React from 'react'
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import logo from "../../Assets/logo.png";


const Footer = () => {
    const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
    const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
    const contactInfo = [
        {
        icon: <MdEmail />,
        value: "davidoluwaseyi@gmail.com",
        },
        {
        icon: <MdPhoneInTalk />,
        value: "+234 815-5501-073",
        },
        {
        icon: <IoLocationSharp />,
        value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        },
    ];
    const socialIcons = [
        <AiFillFacebook />,
        <FaTwitterSquare />,
        <BsLinkedin />,
        <FaInstagramSquare />,
    ];
  return (
    <Container>
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        <div className="social-icons">
          {socialIcons.map((icon) => {
            return <div className="icon">{icon}</div>;
          })}
        </div>
      </div>
      <div className="row">
        <h3>Our Services</h3>
        <ul className="list">
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Company</h3>
        <ul className="list">
          {companyLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Contact Us</h3>
        <ul>
          {contactInfo.map(({ icon, value }) => {
            return (
              <li>
                <div className="icon">{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.section`
    background: var(--bg-color-2);
    display: grid;
    grid-template-columns: repeat(1fr);
    padding: 4rem 1rem;
    gap: 3rem;

    .row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .brand {
    }
    h3 {
        font-size:var(--h3-size);
        color: var(--white-color);
        font-family: var(--bdy-font-family-alt2);
        font-weight: 700;
    }
    .description {
        color: var(--white-color);
    }
    .social-icons {
        display: flex;
        gap: 1rem;

        .icon {
        border: 1px solid var(--skin-color);
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;

        svg {
            color: var(--skin-color);
            font-size: 1.5rem;
        }
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
        display: flex;
        gap: 2rem;
        align-items: center;
        .icon {
            border: 1px solid var(--skin-color);
            padding: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.3rem;
            cursor: pointer;
            svg {
            color: var(--skin-color);
            font-size: 1.5rem;
            }
        }
        }
    }
    }
    @media (min-width:960px){
        grid-template-columns: repeat(4, 1fr);
        padding: 8rem;
        gap: 7rem;
    }
`;