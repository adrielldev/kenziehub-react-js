import styled from "styled-components";


export const Container = styled.div`








`

export const SelectContainer = styled.div`


overflow-y:auto;
border: none;
background-color: var(--g2);
display: flex;
padding: 20px;
gap:0.2rem;

select{
    overflow-y: scroll;
    background-color: transparent;
    color: var(--white);
    border: none;
    font-size: 16px;
    top: 100%;
    bottom: auto;
    option{
        color: var(--g3);
    }
}
`