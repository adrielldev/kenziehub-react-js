import styled from 'styled-components'


export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 60vh;
`



export const HeaderContainer = styled.div`
padding: 10px;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
margin-top: 20px;
h3{
    font-size: 16px;
}

.div-buttons{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 140px;
    button{
        padding: 5px;
        display:flex;
        border: none;
        background-color: transparent;
        color: var(--primary);
    }

}

`



export const Content = styled.div`
    width: 95%;
    align-items: center;
    height: 300px;
    justify-content: center;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--g3);
    gap: 1rem;
    padding: 15px;

    

`
export const UserItem = styled.div`
background-color: var(--g4);
height: 320px;
padding: 10px;
width: 300px;
border-radius: 8px;
display: flex;
flex-direction: column;
gap:3rem;

.div-img{
    text-align: center;
    img{
        width: 40px;
        height: 40px;
    }


}

.div-infos{
    display: flex;
    flex-direction: column;
    gap:0.5rem;


    .div-name-module{
        display: flex;
        width: 250px;
        height: 50px;
        gap: 4rem;
        justify-content: space-between;
        
        p{
            color: var(--g1);
        }
    }
    p{
        color: var(--g1);
        font-size: 14px;
    }
    .div-tecs-works{
        display: flex;
        width: 100%;
        margin-top: 19px;
        justify-content: space-between;
        span{
            color: var(--primary);
        }

    }
    a{
        color: var(--g1);
        text-decoration: underline;
    }
    span{
        margin-top: 6px;
    }
}
`