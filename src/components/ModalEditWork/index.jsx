import {Container} from './styles'

 import Input from '../Input'

 import {useForm} from 'react-hook-form'
 import * as yup from 'yup'
 import {yupResolver} from '@hookform/resolvers/yup'

 import api from '../../services/api'
import { toast } from 'react-toastify'

const ModalEditWork = ({project,name,worksUser,setWorksUser,showModalEditWork,setShowModalEditWork}) => {
    const schema = yup.object({
        
        title:yup.string().required('Campo obrigatório'),
        description:yup.string().required('Campo obrigatório'),
        deploy_url:yup.string().required('Campo obrigatório')
        
    
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmitFunction = (data) =>{

           api
          .put(`/users/works/${project}`,data, {headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
          .then(res=>{
           getWorks();
           toast.success('Projeto editado com sucesso!')

            
          })
          .catch(res=>{
           
            toast.error('Erro ao editar!')
          })  

          setShowModalEditWork(false)
        
    }

    const getWorks = () => {
        const userId = window.localStorage.getItem('@Kenziehub:userId')
        
         api
        .get(`/users/${userId}`)
        .then(res=>{
            setWorksUser(res.data.works)
        })
        .catch(err=>console.log(err))  
    }

    
    if(!showModalEditWork){
        return null;
    }


    

    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h4>Projeto Detalhes</h4>
                    <button onClick={()=>setShowModalEditWork(false)}>x</button>

                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h4>Título Projeto</h4>
                        <Input name='title' register={register}/>
                        
                        <h4>Descrição</h4>
                        <Input name='description' register={register}/>

                        <h4>Link</h4>
                        <Input name='deploy_url' register={register}/>

                        
                        <button className="cadastrar-button" type='submit' >Salvar alterações</button>
                    </form>


                </div>

                    


            </div>
            
             </div>
             </Container>
    )
}

export default ModalEditWork