import { Container, Content,Header } from './styles.js'
import Button from '../../components/Button'
import {useNavigate, Navigate} from  'react-router-dom'

const Home = ({auth}) => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {


        return navigate(path)
    }

    if(auth){
        return <Navigate to='/dashboard'/>
    }
       

    return(
        <Container>
            <Header>
            <h1>Que tal um ambiente onde podemos compartilhar e registrar nossos avanços em <span>tecnologias?</span></h1>

            </Header>

            <Content>
            
            <div className='title-div'>
            <p>Bem vindo ao <span>Kenzie Hub!</span></p>
            </div>
            
            <div className='button-div'>
                <Button light='true' onClick={()=>handleNavigation('/login')}>Login</Button>
                <Button onClick={()=>handleNavigation('/signup')}>Cadastrar </Button>
            </div>

            </Content>

        </Container>
    )
}

export default Home