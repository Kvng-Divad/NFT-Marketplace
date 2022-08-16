import React from 'react'

import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import styled from 'styled-components'
import marketplace1 from '../../Assets/marketplace1.png'
import marketplace2 from '../../Assets/marketplace2.png'
import marketplace3 from '../../Assets/marketplace3.png'
import marketplace4 from '../../Assets/marketplace4.png'
import marketplace5 from '../../Assets/marketplace5.png'
import marketplace6 from '../../Assets/marketplace6.png'
import marketplace7 from '../../Assets/marketplace7.png'
import marketplace8 from '../../Assets/marketplace8.png'
import Button from "../Button/Button";




const Marketplace = () => {
    const marketPlaceData = [
        {
          image: marketplace1,
          name: "Aiboi-meta",
        },
        {
          image: marketplace2,
          name: "Pedram-mohamm...",
        },
        {
          image: marketplace3,
          name: "Eduardo-pena",
        },
        {
          image: marketplace4,
          name: "Daeho-cha",
        },
        {
          image: marketplace5,
          name: "Justine-florentino",
        },
        {
          image: marketplace6,
          name: "Hoang-l-p-solan",
        },
        {
          image: marketplace7,
          name: "Joshua-jay",
        },
        {
          image: marketplace8,
          name: "Joshua-jay",
        },
      ];
      const marketPlaceType = [
        {
        text:"All",
        btn: "btn",        
        },
        {
        text:"Art",
        btn: ""
        },
        {
        text:"Generic",
        btn: "",
        },
        {
        text:"Common",
        btn: "",
        },
        {
        text:"Trading",
        btn: "",
        },
        {
        text:"Rare",
        btn: "",
        }
      ];
  return (
    <Section className='grid'>

        <div className="title grid">
            <h2>NFT Marketplace</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
            </p>
      </div>

      <div className="mkp-nav grid">
        {marketPlaceType.map(({text, btn},index) => {
          return (
            <Button text={text} btn={btn} key={index}/>
          )
        })}
      </div>

      <div className="marketPlaces grid">
        {marketPlaceData.map(({ image, name }) => {
          return (
            <div className="marketplace grid">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>

              <div className="name flex">
                <h4>{name}</h4>
                <BsThreeDots />
              </div>

              <h6 className="username">@Divad</h6>

              <div className="price-container flex">
                <h5 className="price">3.75ETH</h5>
                <FaEthereum />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  )
}

export default Marketplace

const Section = styled.section`
    padding:1rem;
    margin: 3rem 0;
    gap:5rem;
    .title{
        justify-items:center;
        gap: 2rem;
        h2{
            font-size:var(--h1-size);
            padding: 1rem;
            font-Weight:900;
            text-transform:capitalize;
            font-family:var(--bdy-font-family-alt2);
        } 
        p{
            font-size:var(--font-size-nr);
            font-Weight:500;
            text-transform: capitalize;
            font-family:var(--bdy-font-family-alt3);
            color:var(--white-color-2);
        }
    }
    .mkp-nav{
        gap:1rem .5rem;
        grid-template-columns: repeat(3, max-content);
        justify-items:center;
    }
    .marketPlaces{
        gap:3rem 2rem;
        grid-template-columns: repeat(1fr);
        justify-items:center;
    }
    .marketplace{
        gap: .75rem;
        padding:.5rem;
        border-radius:15px;
        grid-template-columns: repeat(1fr);
        background:var(--card-color);
        opacity:.8;
        .image{
            box-shadow:var(--box-shadow);
            border-radius:15px;
        }
        .name{
            justify-content:space-between;
            align-items: center;
            font-size:1.25rem;
            padding: 0 .75rem;
            h4{
                font-size:1.15rem;
                font-Weight:700;
                text-transform: capitalize;
                font-family:var(--bdy-font-family-alt3);
            }
        }
        .username{
            padding: .75rem;
            font-size:1rem;
            font-Weight:600;
            text-transform: capitalize;
            font-family:var(--bdy-font-family-alt2);
        }
        .price-container{
            justify-content:space-between;
            align-items: center;
            padding: 0 .75rem;
            color:var(--skin-color4);
            h5{
                font-size:1rem;
                font-Weight:700;
                text-transform: capitalize;
                font-family:var(--bdy-font-family-alt2);
                color:var(--white-color);
            }
        }
    }
    .marketplace:hover{
        box-shadow:var(--box-shadow);
        opacity:1;
    }

    @media (min-width:960px){
        padding:0rem;
        margin: 5rem 0;
        .title{
            h2{
              font-size:var(--font-size-bg);
            }
        }
        .mkp-nav{
            gap:1rem .5rem;
            grid-template-columns: repeat(6, 1fr);
            padding: 1rem 9rem;
        }
        .marketPlaces{
            gap:2rem 1.25rem;
            grid-template-columns: repeat(4, 1fr);
            justify-items:center;
        }
        
    }
`;