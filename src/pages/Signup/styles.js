import styled, { keyframes } from 'styled-components'
import SigupImage from '../../assets/signup.jpg'

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);

    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }


`

export const Container = styled.div`
height: fit-content;
display: flex;
align-items: center;
justify-items: center;
flex-direction: column;
`

export const Content = styled.div`

display: flex;
flex-direction: column;
align-items: center;

width: 100%;


@media (min-width:1100px) {
    width: 50%;
    
}
animation:${appearFromLeft} 1.5s;

`




export const FormContainer = styled.div`
    background-color: var(--g3);
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    .div-button{
        text-align: center;
    }




`



export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        color: var(--white);
    }
    h1{
        font-size: 22px;
        color:var(--c5);
        font-weight: 700;
    }
    button{
        background-color: var(--g3);
    }
    height: 90px;
    padding: 15px;
    gap: 1rem;

`

export const FormHeaderContainer = styled.div`
    margin-bottom: 15px;
    text-align: center;
    p{
        font-size: 15px;
        color: var(--gray)
    }
    h2{
        font-size: 19px;
    }


`
