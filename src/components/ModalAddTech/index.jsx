import {Container} from './styles'

 import Input from '../Input'
 import SelectTech from '../SelectTech'

 import {useForm} from 'react-hook-form'
 import * as yup from 'yup'
 import {yupResolver} from '@hookform/resolvers/yup'

 import { FaReact } from 'react-icons/fa'

 import api from '../../services/api'
import { toast } from 'react-toastify'

const ModalAddTech = ({techs,setTechs,showModalAddTech,setShowModalAddTech}) => {

    const schema = yup.object({
        
        title:yup.string().required('Campo obrigatório'),
        status:yup.string().required('Campo obrigatório'),
        
    
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmitFunction = (data) =>{
          
          api
          .post('/users/techs',data, {headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
          .then(res=>{
             let arr = [...techs,res.data]
            
            setTechs(arr)
            return data.title == 'React' ? toast.info('Ótima escolha dev, esse site é feito em ReactJS!',{icon:()=><FaReact color='#24baff'/>}) : toast.success('Tecnologia adicionada com sucesso!')
          })
          .catch(res=>{
           
            toast.error('Tecnologia não adicionada')
          })

          
          setShowModalAddTech(false)
        
    }

    
    if(!showModalAddTech){
        return null;
    }



    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h4>Cadastrar tecnologia</h4>
                    <button onClick={()=>setShowModalAddTech(false)}>x</button>

                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h4>Nome</h4>
                        <Input name='title' register={register}/>
                        
                        <h4>Selecionar Status</h4>
                        <SelectTech name='status' register = {register}/>
                        <button className="cadastrar-button" type='submit' >Cadastrar tecnologia</button>
                    </form>


                </div>

                    


            </div>
            
             </div>
             </Container>
    )
}

export default ModalAddTech



// COMMUNITY ADICIOANR DOIS BOTÕES LADO A LADO PARA PASSAR PÁGIANS PRA FRENTE OU PRA TRÁS
// E CARREGAR MAIS USERS!