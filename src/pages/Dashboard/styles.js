import styled from "styled-components";

// testar com ai magem e depois testar com o fundo pedido no canvas

export const Container = styled.div`
height: 100vh;
background-color: var(--g4);
display: flex;
flex-direction: column;



// a partir do tablet vira nav normal o user vira o dropdown // se profile / edit profile
`
export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
align-items: center;
padding: 10px;
h3{
    color: var(--primary);
}



`

export const MidContainer = styled.div`
display: flex;
height: 60px;
h2{
    font-size: 18px;

}
p{
    color: var(--g1);
    font-size: 13px;
}
margin-top: 80px;
padding: 15px;
justify-content: space-around;
align-items: center;
width: 100%;
border-top: 1px solid var(--g1);
border-bottom: 1px solid var(--g1);
`

export const HomeContainer = styled.div`
    margin-top: 45px;
    padding: 20px;
    text-align: center;
    
    span{
        color: var(--primary);
    }
    p{
        margin-top: 20px;
        font-size: 13px;
        color: var(--g1);
    }


`