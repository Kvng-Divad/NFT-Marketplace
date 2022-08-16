import React from 'react'
import './Home.css'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import hero from '../../Assets/hero.png'
import heroText from '../../Assets/heroText.png'
import Button from '../Button/Button'

const Home = () => {
  return (
    <Section className='home'>
        <Navbar/>
        <div className='elipse'></div>

        <div className='hero-container grid'>

            <div className='hero-content flex'>
                <h1 className='hero-text'>
                    <span><img src={heroText} alt=''/></span>
                        Explore Our Digital NFT Market Place 
                    <span className='stop'>.</span>
                </h1>
                <p className='hero-description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>

                <div className='hero-btns grid'>
                    <Button text='Explore Now' btn=''/>
                    <Button text=' Create NFT' btn='btn'/>
                </div>

                <div className='data grid'>
                    <div className='data-tab grid'>
                        <h2>40<span>k</span></h2>
                        <h4>Artwork</h4>
                    </div>

                    <div className='data-tab grid'>
                        <h2>12<span>k</span></h2>
                        <h4>Auction</h4>
                    </div>

                    <div className='data-tab grid'>
                        <h2>20<span>k</span></h2>
                        <h4>Artist</h4>
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src={hero} alt='hero'/>
            </div>
        </div>

    </Section>
  )
}

export default Home;

const Section = styled.section`
    margin: .75rem;
    padding: 0 .5rem;
    border-radius: 1rem;
    min-height: 100vh;

    .stop{
        color: var(--skin-color);
        font-size: 2.5rem;
        font-weight:900;
    }
    .hero-container{
        gap:1.4rem;
        grid-template-columns: 1fr;
    }
    .hero-content{
        flex-direction:column;
        gap:1rem;
        text-align: left;
        padding: .5rem;
    }
    
    .hero-btns{
        justify-content: center;
        grid-template-columns: max-content;
        gap:1rem;
    }

    .data-tab{
        gap: .5rem;
        h2{
            font-size: var(--h2-size);
            font-weight: 600;
            color: var(--white-color);
            font-family: var( --bdy-font-family-alt2);
            span{
                margin-left:.15rem;
                font-size: var(--h3-size);
                font-weight: 600;
                color: var(--skin-color);
                font-family: var( --bdy-font-family-alt5);
            }
        }
        h4{
            font-size: var(--font-size-sm);
            font-weight: 600;
            color: var(--white-color-2);
            font-family: var( --bdy-font-family);
        }
    }

    .hero-image{
        width:95%;
        margin:0 auto
    }
    

    @media (min-width:960px){
        .hero-container{
            grid-template-columns: .35fr .65fr;
            padding: 1rem;
        }
        .hero-content{
            gap:1.5rem;
            padding: 1.5rem;
        }
        .hero-btns{
            justify-content: flex-start;
            grid-template-columns: repeat(2,max-content);
        }
    }
`;