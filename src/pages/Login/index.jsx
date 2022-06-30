import {Container, Background,FormContainer,HeaderContainer,Content,FormHeaderContainer} from './styles'
import {FiMail,FiUser,FiLock,FiEdit,FiPhone,FiList} from 'react-icons/fi'
import {FaUserFriends} from 'react-icons/fa'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import {Link,useNavigate,Navigate} from 'react-router-dom';

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import api from '../../services/api';

import { toast } from 'react-toastify';


// mudar fontes e paleta de cores fidedignas ao figma
// colocar imagens no fundo, cadastro e login


const Login = ({auth,setAuth}) =>{

    const navigate = useNavigate();

    const schema = yup.object({
        
        email:yup.string().email('Formato de email inválido').required('Campo obrigatório'),
        password:yup.string().required('Campo obrigatório'),
        
    
    })

     // regex senha colocar dps .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'8 chars, letras maiusculas e minusculas e numeros')
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
// email: teste45@mail.com pass: 123456
    const onSubmitFunction = (data) =>{
        const user = {
            email:data.email,
            password:data.password,
        }

        api
        .post('/sessions',user)
        .then(res=>{
            const token = res.data.token;
            const userId = res.data.user.id;
            localStorage.setItem('@Kenziehub:token',token);
            localStorage.setItem('@Kenziehub:userId',userId);
            setAuth(true);
            toast.success('Logado com sucesso!')
            
            return navigate('../dashboard');
        }) 
        .catch(err=>{
            
            return toast.error('Falha ao logar!');
        })
    }
    if(auth){
        return <Navigate to='/dashboard'/>
    }
        



    return (
       <Container>

       
        
        <Content>
            <HeaderContainer>
                    <h1>Kenzie Hub</h1>
                   
                </HeaderContainer>
        <FormContainer>
            
            
                
                <form  onSubmit={handleSubmit(onSubmitFunction)}>
                    <FormHeaderContainer>
                    <div className='div-form-header'>
                        <h2>Login</h2>
                    </div>
                    </FormHeaderContainer>
                <div className='div-input'>
                    <Input label='Email' icon={FiMail} placeholder='Digite aqui seu email' type='mail' name='email' register={register} error={errors.email?.message}></Input>
                    <Input label='Senha' icon={FiLock} placeholder= 'Digite aqui sua senha' type='password' name='password' register={register} error={errors.password?.message}></Input>
                    </div>

                    <div className='div-button'>
                        <Button light type='submit'>Entrar</Button>
                        <p>Ainda não possui uma conta?</p>
                        <Button><Link to='../signup'>Cadastre-se</Link></Button>
                    </div>
                </form>

            </FormContainer>
        </Content>


       </Container>
    )
}

export default Login
