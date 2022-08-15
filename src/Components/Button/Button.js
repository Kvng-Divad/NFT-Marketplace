import React from 'react'
import './Button.css'
import styled from 'styled-components'


const Button = ({text , btn = 'btn-alt' }) => {
  return (
    <Btn>
        <button className={ `${btn ? "btn" : "btn-alt"}`}>
            {text}
        </button>
    </Btn>
   
  )
}

export default Button;

const Btn = styled.button`
    background:transparent;

    button {
        border-radius: 50px;
        padding: .5rem 1rem;
        :not(.btn){
          background: transparent;
          border: 1px solid var(--skin-color);
          color: var(--white-color);
          font-family: var(--bdy-font-family-alt2);
          font-weight: 500;
        }
        :not(.btn):hover{
          background: var(--skin-color);
        }
    }
`;