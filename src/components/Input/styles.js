import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
    ${props=>props.isErrored && css`
color: red;
`}

    div{
        span{
            color: red;
            
        }
    }
`

export const InputContainer = styled.div`

display: flex;
background-color: var(--g2);
align-items: center;
padding:8px;
padding-left: 15px;
margin-bottom: 20px;
margin-top: 5px;
${props=>props.isErrored && css`
color: red;
`}
input{
    border: none;
    color: var(--white);
    width: 250px;
    padding: 5px;
    background:var(--g2);
    
}
&::placeholder{
    color: black;
}


`