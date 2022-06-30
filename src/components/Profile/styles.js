import styled from 'styled-components'



export const Container = styled.div`

display: flex;
flex-direction: column;



`
export const Content = styled.div`
background-color: var(--g3);
height: 410px;
padding: 25px;
display: flex;

justify-content: center;

`
export const UserItem = styled.div`
background-color: var(--g4);
height: 320px;
padding: 10px;
width: 300px;
border-radius: 8px;
margin-bottom:15px;
display: flex;
flex-direction: column;
gap:3rem;

.div-img{
    text-align: center;
    img{
        width: 40px;
        height: 40px;
    }
    border-radius: 15px;
    



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