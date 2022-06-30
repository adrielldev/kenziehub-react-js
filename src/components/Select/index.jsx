import { Container, SelectContainer} from './styles'

const Select = ({label,icon:Icon,register,name,...rest}) => {

    return (
        <Container>

            <div>{label}</div>

            <SelectContainer>
            {Icon && <Icon/>}
        <select {...register(name)}>
            <option>
               Primeiro Módulo
            </option>
            <option>
              Segundo Módulo
            </option>
            <option>
                Terceiro Módulo
            </option>
            <option>
                Quarto Módulo
            </option>


        </select>

        </SelectContainer>

        </Container>
    )
}


export default Select