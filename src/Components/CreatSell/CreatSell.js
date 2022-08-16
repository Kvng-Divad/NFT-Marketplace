import React from 'react'
import styled from 'styled-components'
import sell1 from "../../Assets/sell1.png";
import sell2 from "../../Assets/sell2.png";
import sell3 from "../../Assets/sell3.png";
import Button from "../Button/Button";


const CreatSell = () => {

  const data = [
    {
      image: sell1,
      title: "Create your collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Create",
      btn: "btn",
    },
    {
      image: sell2,
      title: "Add your NFTs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Add NFT",
      btn: "",
    },
    {
      image: sell3,
      title: "List them for sale",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Sell Now",
      btn: "btn",
    },
  ];
  return (
    <Section className='grid'>
        <div className='title'>
          <h2>Create and Sell your NFTs</h2>
        </div>
        <div className='cs-container'>
          <div className='content grid'>
            {
              data.map(({image, description,title, buttonText, btn}, index) =>{
                return(
                  <div className='CreateSell grid' key={index}>
                    <div className='cs-image flex'>
                      <img src={image} alt='C&S'/>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button text={buttonText} btn={btn}/>
                  </div>
                )
              })
            }
          </div>
        </div>
    </Section>
  )
}

export default CreatSell;

const Section = styled.section`
    text-align:center;
    margin: 3rem 0;
    .title{
      h2{
        font-size:var(--h1-size);
        padding: 1rem;
        font-Weight:900;
        text-transform:capitalize;
        font-family:var(--bdy-font-family-alt2);
      }
    }
    .cs-container{
      background:var(--body-color);
      margin:3rem 1rem;
      padding: .5rem .25rem;
      border-radius:15px;
      box-shadow: var(--box-shadow);
    }
    .content{
      padding:1.5rem;
      gap:1.5rem;
      grid-template-columns: repeat(1fr);
    }
    .CreateSell{
      padding:1.5rem;
      gap:1.25rem;
      background:var(--bg-color-3);
      box-shadow: var(--box-shadow);
      border-radius:15px;
      h3{
        font-size:var(--h3-size);
        font-Weight:700;
        text-transform: capitalize;
        font-family:var(--bdy-font-family-alt2);
      }
      p{
        font-size:var(--font-size-nr);
        font-Weight:500;
        text-transform: capitalize;
        font-family:var(--bdy-font-family);
        color:var(--white-color3);
      }
    }
    .cs-image{
      width:4rem;
      height:4rem;
      justify-content:center;
      align-items:center;
      border-radius:50%;
      background: var(--skin-color2);
      margin: auto;
      img{
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    @media (min-width:960px){
      .cs-container{
        margin:4rem 0;
        padding:2rem;
      }
      .title{
        h2{
          font-size:var(--font-size-bg);
        }
      }
      .content{
        grid-template-columns: repeat(3, 1fr);
        padding:3rem;
      }
  }
`;