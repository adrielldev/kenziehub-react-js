import {Container} from './styles'


 import api from '../../services/api'
import { toast } from 'react-toastify'

const ModalDeleteWork = ({project,worksUser,setWorksUser,showModalDeleteWork,setShowModalDeleteWork}) => {


  
    if(!showModalDeleteWork){
        return null;
    }

    const deleteWork = () => {
        api
        .delete(`/users/works/${project}`,{headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
        .then(res=>{
            const arr = worksUser.filter(item=>item.id!==project); 
            setWorksUser(arr)
            toast.success('Projeto apagado com sucesso!')
        })
        .catch(err=>console.log(err)); 
        
        setShowModalDeleteWork(false);
    
    }


    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h4>Remover Projeto</h4>
                </div>

                <div className="modal-body">
                    <button className='button-yes' onClick={()=>deleteWork()}>Sim</button>
                    <button onClick={()=>setShowModalDeleteWork(false)} className='button-no'>Não</button>
                </div>

                    


            </div>
            
             </div>
             </Container>
    )
}

export default ModalDeleteWork
