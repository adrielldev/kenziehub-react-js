import { Container,TextAreaContainer,Content} from "./styles"

const Textarea = ({label,icon:Icon,placeholder,register,name,error,...rest}) =>{

   
    return (
        <Container>
            <Content>
            <div>{label} {!!error && <span> - {error}</span>}</div>
            
            </Content>

            <TextAreaContainer isErrored={error}>      
                {Icon && <Icon/>}
                
            <textarea placeholder={placeholder} {...register(name)} >
                
            </textarea>
            </TextAreaContainer>   
        </Container>
    )
}

export default Textarea;