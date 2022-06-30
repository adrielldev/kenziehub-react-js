import styled from "styled-components";
import { css } from 'styled-components'


export const Container = styled.div`

.dropdown{
    position: relative;
    display: inline-block;

}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: -80px;
}

.dropdown:hover .dropdown-content {
  display: block;
  
}

@media (min-width:599px){
  .dropdown{
    display: none;
  }
}
`

export const DropdownItem = styled.div`
background-color: red;
padding: 5px;
text-align: left;
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
color: var(--white);
height: 35px;
width: 100px;
border-bottom: 1px solid var(--white);
background-color: var(--g2);
button{
  border: none;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  p{
    color: var(--white);
  }
}

p{
    font-size: 13px;
}

`