import HomeImage from '../assets/home.png'
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    
   --c1:#03274D;
   --c2:#033979;
   --c3:#0B57CC;
   --c4:#B0D5EF;
   --c5:#EE6467;
   --c6:#4B8CC8;
   --primary:#FF577F;
   --primary-negative:#59323F;
   --g4:#121214;
   --g3:#212529;
   --g2:#343B41;
   --g1:#868E96;
   --g0:#F8F9FA;

   --black:#000;
   --white:#fff;
   --gray:#ccc;




}


body{
    height: 100vh;
    background-image:url(${HomeImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: white;


}

body,input,button{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
}

h1,h2,h3,h4,h5,h6{
    font-weight: 700;
}

button{
    cursor: pointer;
}
a{
    text-decoration: none;
}

`

