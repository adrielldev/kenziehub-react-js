import { Container, SelectContainer} from './styles'

const SelectTech = ({label,register,name,...rest}) => {

    return (
        <Container>

            <div>{label}</div>

            <SelectContainer>

        <select {...register(name)}>
            <option>
               Iniciante
            </option>
            <option>
              Intermediário
            </option>
            <option>
                Avançado
            </option>


        </select>

        </SelectContainer>

        </Container>
    )
}


export default SelectTech