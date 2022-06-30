import {Container} from './styles'

 import Input from '../Input'
 import SelectTech from '../SelectTech'

 import {useForm} from 'react-hook-form'
 import * as yup from 'yup'
 import {yupResolver} from '@hookform/resolvers/yup'

 import api from '../../services/api'
import { toast } from 'react-toastify'

const ModalEditTech = ({tech,name,techs,setTechs,showModalEditTech,setShowModalEditTech}) => {
    const schema = yup.object({
        
        title:yup.string().required('Campo obrigatório'),
        status:yup.string().required('Campo obrigatório'),
        
    
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmitFunction = (data) =>{

         console.log(data)

           api
          .put(`/users/techs/${tech}`,data, {headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
          .then(res=>{
            let arr = techs.map(item=>item.title==data.title ?res.data : item);
            setTechs(arr)
            return toast.success('Tecnologia editada com sucesso!')
            
          })
          .catch(res=>{
           
            toast.error('Erro ao editar!')
          }) 

          
          setShowModalEditTech(false)
        
    }

    
    if(!showModalEditTech){
        return null;
    }



    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h4>Tecnologia Detalhes</h4>
                    <button onClick={()=>setShowModalEditTech(false)}>x</button>

                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h4>Nome</h4>
                        <Input name='title' register={register} value={name}/>
                        
                        <h4>Selecionar Status</h4>
                        <SelectTech name='status' register = {register}/>
                        <button className="cadastrar-button" type='submit' >Salvar alterações</button>
                    </form>


                </div>

                    


            </div>
            
             </div>
             </Container>
    )
}

export default ModalEditTech