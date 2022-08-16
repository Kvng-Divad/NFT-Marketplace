import React from 'react'
import styled from 'styled-components'
import subscribe from '../../Assets/subscribe.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Subscribe = () => {
  return (
    <Section className='grid'>
        <div className='content flex'>
            <h2>Subscribe for  update on New Offers</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div className='input flex'>
                <input type='text' placeholder='Enter Email'/>
                <BsFillArrowRightCircleFill/>
            </div>
        </div>

        <div className='subcribe-image'>
            <img src={subscribe} alt='subscribe'/>
        </div>
    </Section>
  )
}

export default Subscribe;

const Section = styled.section`
    grid-template-columns: repeat(1fr);
    gap:3rem;
    padding:1rem;
    margin: 5rem 0;
    .content{
      flex-direction: column;
      gap:2rem;
      h2{
        font-size:var(--font-size-bggr);
        font-Weight:900;
        text-transform:uppercase;
        font-family:var(--bdy-font-family-alt3);
        margin: 3rem 0 0;
      }
      p{
        font-Weight:500;
        color:var(--white-color3);
      }
      .input{
        padding: 0 2rem;
        justify-content:center;
        align-items: center;
        width: max-content;
        gap: 1rem;
        border: 1px solid var(--skin-color);
        background: var(--white-color);
        border-radius: 50px;

      input {
        border: none;
        &:focus {
          outline: none;
        }
        padding:1rem 1rem 1rem 1rem;
        background: var(--white-color);
        color:var(--black-color);
        border-radius:50px;
      }
      svg{
        color:var(--skin-color);
        border: 1px solid var(--skin-color);
        font-size:2.5rem;
        border-radius:50px;
      }
      svg:hover{
        color:var(--body-color);
        border: 1px solid var(--skin-color);
      }
    }
    }    



    @media (min-width:960px){
      grid-template-columns: repeat(2, 1fr);
      gap:4rem;
      padding:0;
      .content{
        gap:2rem;
      }
      .input{
      }
  }
  @media (max-width:960px){
    .input{
        display:none;
    }
  }
`;