import styled from 'styled-components'

export const Container = styled.div`


nav{
    display: flex;
    gap: 1.5rem;
}

@media (max-width:600px){
    display: none
}



`

export const NavItem = styled.div`
    background-color: var(--g3);
    color: var(--g0);
    display: flex;
    padding: 10px;
    width: 140px;
    justify-content: space-between;

    button{
        border: none;
        background-color: var(--g3);
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: var(--g0);
    }
    @media (max-width:1024px){
        width: fit-content;
        h4{
            display: none;
        }
    }

`

