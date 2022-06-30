import styled, { keyframes } from "styled-components";


const appearItems = keyframes`
    from{
        opacity: 0;
        transform: translateY(100px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }


`

export const Container = styled.div`
display: flex;
opacity: 1;
flex-direction: column;
align-items: center;
gap: 15rem;
padding: 25px;
height: 100vh;


`

export const Header = styled.div`

h1{
    text-align: center;
    border-radius: 15px;
    font-size: 1rem;
    background-color: var(--g2);
    padding: 15px;
    font-weight: 700;
    animation: ${appearItems} 1.5s;
    span{
        color: var(--primary);
        text-decoration: underline;
    }

}


`





export const Content = styled.div`

display: flex;
border-radius: 20px;
padding: 12px;
flex-direction:column;
justify-content: center;
width: 70%;
align-items: center;
gap:1rem;
animation: ${appearItems} 2.5s;

p{
    span{
        color: var(--primary);
        font-weight: 700;
    }
}

.title-div{
    color:var(--black);
    text-align: center;
    font-size: 1.5rem;
}
.button-div{
    text-decoration: none;
    display: flex;
    padding: 15px;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
}

`