import {Container,InputContainer} from './styles'


const Input = ({label, icon:Icon,placeholder,register,name,value,error,...rest}) => {
    return (
        <Container>
            <div>{label} {!!error && <span> - {error}</span>}</div>

            <InputContainer isErrored={error}>
                {Icon && <Icon/>}
                <input value={value} { ...register(name)} placeholder={placeholder} type={rest.type} ></input>
            </InputContainer>
        </Container>
        
    )

}

export default Input