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

    .div-modal-add{
        background-color: red;
    button{
        background-color: transparent;
        border: none;
    }

}

`

export const TechItem = styled.div`

background-color:var(--g4);
display: flex;
justify-content: space-around;
padding: 15px;
h4{
    font-size: 15px;
}
div{
    p{
        color: var(--g1);
    }
    display: flex;
    gap: 1rem;
    button{
        background-color: transparent;
        border: none;
    }
}


`