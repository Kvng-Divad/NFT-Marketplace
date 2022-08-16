import React from 'react'
import styled from 'styled-components'
import choose from '../../Assets/choose.png'
import Button from "../Button/Button";

const Choose = () => {
  return (
    <Section className='grid'>
        <div className='choose-image'>
            <img src={choose} alt='choose'/>
        </div>

        <div className='content flex'>
            <h2>Why should you Choose Our Website ?</h2>
            <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.</p>
              </div>
            <Button text='Read More' btn='btn'/>  
        </div>
    </Section>
  )
}

export default Choose

const Section = styled.section`
    grid-template-columns: repeat(1fr);
    gap:2rem;
    padding:1rem;
    margin: 3rem 0;
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
    }



    @media (min-width:960px){
      grid-template-columns: repeat(2, 1fr);
      gap:4rem;
      padding:0;
      .content{
        gap:2rem;
      }
  }
`;