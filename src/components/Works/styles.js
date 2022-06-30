import styled from 'styled-components'


export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


export const HeaderContainer = styled.div`
padding: 10px;
display: flex;
width: 100%;
justify-content: space-around;
margin-top: 20px;
button{
    border: none;
    background-color: var(--g3);
    text-align: center;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

}
h3{
    font-size: 16px;
}

`

export const Content = styled.div`
    width: 95%;
    height: 300px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    background-color: var(--g3);
    gap: 1rem;
    padding: 15px;
    margin-bottom: 10px;

`

export const WorkItem = styled.div`
    background-color: var(--g4);
    height: 110px;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    h4{
        color: var(--g0);
        text-align: center;
    }
    p{
        color: var(--g2);
    }
    .div-link-buttons{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        a{
        cursor: pointer;
        font-size: 14px;
        color: var(--primary);
    }
    div{
        width: 30%;
        
        display: flex;
        gap: 0.3rem;
        justify-content: flex-end;
        button{
            background-color: transparent;
            border: none;
        }
    }

    }
    


`