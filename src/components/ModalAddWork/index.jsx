import {Container} from './styles'

 import Input from '../Input'

 import {useForm} from 'react-hook-form'
 import * as yup from 'yup'
 import {yupResolver} from '@hookform/resolvers/yup'

 import api from '../../services/api'
import { toast } from 'react-toastify'

const ModalAddWork = ({worksUser,setWorksUser,showModalAddWork,setShowModalAddWork}) => {

    const schema = yup.object({
        
        title:yup.string().required('Campo obrigatório'),
        description:yup.string().required('Campo obrigatório'),
        deploy_url:yup.string().required('Campo Obrigatório')
    
    })
    

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmitFunction = (data) =>{
           api
          .post('/users/works',data, {headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
          .then(res=>{
             let arr = [...worksUser,res.data]
            setWorksUser(arr)
            return toast.success('Projeto adicionado com sucesso!')
          })
          .catch(res=>{
           
            toast.error('Projeto não adicionado!')
          })
          setShowModalAddWork(false)
        
    }

    
    if(!showModalAddWork){
        return null;
    }



    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h4>Adicionar Projeto</h4>
                    <button onClick={()=>setShowModalAddWork(false)}>x</button>

                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h4>Título Projeto</h4>
                        <Input name='title' register={register}/>

                        <h4>Descrição</h4>
                        <Input name='description' register={register}/>

                        <h4>Link</h4>
                        <Input name='deploy_url' register={register}/>
                        
                        <button className="cadastrar-button" type='submit' >Adicionar Projeto</button>
                    </form>


                </div>

                    


            </div>
            
             </div>
             </Container>
    )
}

export default ModalAddWork



// COMMUNITY ADICIOANR DOIS BOTÕES LADO A LADO PARA PASSAR PÁGIANS PRA FRENTE OU PRA TRÁS
// E CARREGAR MAIS USERS!