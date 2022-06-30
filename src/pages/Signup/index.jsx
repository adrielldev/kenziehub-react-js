import {Container,FormContainer,HeaderContainer,Content,FormHeaderContainer} from './styles'
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

// font do text area
// mudar fontes e paleta de cores fidedignas ao figma
// colocar imagens no fundo, cadastro e login


const Signup = ({auth}) =>{

    const navigate = useNavigate();

    const schema = yup.object({
        name:yup.string().required('Campo obrigatório'),
        email:yup.string().email('Formato de email inválido').required('Campo obrigatório'),
        password:yup.string().required('Campo obrigatório'),
        confPassword:yup.string().required('Campo obrigatório').oneOf([yup.ref('password'),null],'Senhas precisam ser iguais'), 
        contact:yup.string().required('Campo obrigatório'),
        bio:yup.string().required('Campo obrigatório').max(156,'máximo de 156 caracteres')
    
    })

     // regex senha colocar dps .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'8 chars, letras maiusculas e minusculas e numeros')
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmitFunction = (data) =>{
        const user = {
            name:data.name,
            email:data.email,
            password:data.password,
            bio:data.bio,
            contact:data.contact,
            course_module:data.modulo
        }
        console.log(user);

        api
        .post('/users',user)
        .then(res=>{
            navigate('../login');
            return toast.success('Parabéns dev! Conta criada com sucesso.')
        }) 
        .catch(err=>{
            return toast.error('Ops! Algo deu errado.')
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
                    <Button><Link to='../'>Voltar</Link></Button>
                </HeaderContainer>
        <FormContainer>
            
            
                
                <form  onSubmit={handleSubmit(onSubmitFunction)}>
                    <FormHeaderContainer>
                    <div className='div-form-header'>
                        <h2>Crie sua conta</h2>
                        <p>Rápido e grátis, vamos nessa</p>
                    </div>
                    </FormHeaderContainer>
                    <Input label='Nome' icon={FiUser} placeholder='Digite aqui seu nome' type='text' name='name' register={register} error={errors.name?.message}></Input>
                    <Input label='Email' icon={FiMail} placeholder='Digite aqui seu email' type='mail' name='email' register={register} error={errors.email?.message}></Input>
                    <Input label='Senha' icon={FiLock} placeholder= 'Digite aqui sua senha' type='password' name='password' register={register} error={errors.password?.message}></Input>
                    <Input label='Confirmar senha' icon={FiLock} placeholder='Digite novamente sua senha' type='password' name='confPassword'register={register} error={errors.confPassword?.message}></Input>

                   
                    <Textarea placeholder='Fale sobre você' icon={FiEdit} label='Bio' name='bio' register={register} error={errors.bio?.message}/>
                    <Input label='Contato' icon={FaUserFriends} placeholder='Digite aqui seu contato' name='contact' register={register} error={errors.tel?.message}></Input>
                    <Select label='Selecionar Módulo' icon={FiList} name='modulo' register={register}/>
                    <br></br>
                    <div className='div-button'>
                    <Button type='submit'>Cadastrar </Button>
                    </div>

                </form>

            </FormContainer>
        </Content>


       </Container>
    )
}

export default Signup