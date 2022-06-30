import styled from "styled-components";

export const Container = styled.button`

    background-color: ${props=>props.light?'var(--primary)':'var(--primary-negative)'};
    color: var(--white);
    border: 1px solid transparent;
    padding: 9px;
    width: 150px;
    cursor: pointer;
    text-decoration: none;
    transition: 1s;

    &:hover{
        border:1px solid var(--g4);

    }

`