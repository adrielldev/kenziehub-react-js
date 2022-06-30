import { Container } from "./styles"

const Button = ({children,light,...rest}) =>{

    return (

        <Container light={light} type='button' {...rest}>
            {children}
        </Container>
    )
}

export default Button