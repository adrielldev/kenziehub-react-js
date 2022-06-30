import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
div{
        span{
            color: red;
            
        }
    }
`

export const Content = styled.div`

display:flex;

`

export const TextAreaContainer = styled.div`
background-color: var(--g2);
display: flex;


${props=>props.isErrored && css`
color: red;
`}

gap: 1rem;
padding: 2px;
padding-left: 10px;
padding-top: 10px;
margin-bottom: 8px;



textarea{
        width: 322px;
        height: 59px;
        resize: none;
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-family: 'Inter';
        color: var(--white);
    }
`