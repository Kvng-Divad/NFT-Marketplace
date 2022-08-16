import React from 'react'
import './Clients.css'
import styled from 'styled-components'
import client1 from '../../Assets/client1.png'
import client2 from '../../Assets/client2.png'
import client3 from '../../Assets/client3.png'
import client4 from '../../Assets/client4.png'
import client5 from '../../Assets/client5.png'
import client6 from '../../Assets/client6.png'


const Clients = () => {
    const Client= [client1, client2, client3, client4, client5, client6 ];

  return (
    <Section >
        {Client.map((client, index)=>{
            return <div className='client grid' key={index}>
                <img src={client} alt='client'/>
            </div>
        })}
    </Section>
  )
}

export default Clients;

const Section = styled.section`
    display:grid;
    padding:2rem;
    margin:2rem 0;
    grid-template-columns: repeat(1fr);
    justify-content: center;
    .client{
        grid-template-columns: repeat(1fr);
        justify-content: center;
        opacity:.7;
    }
    .client:hover{
        opacity:1;
    }
    @media (min-width:960px){
        margin:3rem 0;
        grid-template-columns: repeat(6, 1fr);
        justify-content: center;
    }

`;