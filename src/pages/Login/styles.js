import styled, { keyframes } from 'styled-components'
import SigupImage from '../../assets/signup.jpg'

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);

    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }


`

export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    `








export const Content = styled.div`





animation:${appearFromRight} 1.5s;

`




export const FormContainer = styled.div`
    background-color: var(--g3);
    display: flex;
    flex-direction: column;
    gap: 20rem;
    padding: 16px;
    .div-input{
        
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        padding: 10px;
        text-align: left;
       
    }

    .div-button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 1rem;

        p{
            color: var(--g1);
            font-size: 14px;
        }
        button:nth-of-type(2){
            background-color: var(--g1);
            
        }
        a{
            color: white;
        }
    }
    


`



export const HeaderContainer = styled.div`
    h1{
        color: var(--primary);
    }

`

export const FormHeaderContainer = styled.div`
margin-bottom: 20px;
text-align: center;

`
