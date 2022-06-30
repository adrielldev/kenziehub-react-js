import {Container} from './styles'

import api from '../../services/api'

import { toast } from 'react-toastify'

import Button from '../Button'


const ModalDeleteTech = ({tech,techs,setTechs,showModalDeleteTech,setShowModalDeleteTech}) =>{
    if(!showModalDeleteTech){
        return null;
    }
    
    

    

    const deleteTech = () =>{

         api
        .delete(`/users/techs/${tech}`,{headers: { Authorization: `Bearer ${window.localStorage.getItem('@Kenziehub:token')}`}})
        .then(res=>{
            const arr = techs.filter(item=>item.id!==tech); 
            setTechs(arr)
            toast.success('Tecnologia apagada com sucesso!')
        })
        .catch(err=>console.log(err)); 
        
        setShowModalDeleteTech(false);
    }
    
    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <h2>Deseja mesmo excluir a tecnologia?</h2>

                <div className="modal-body">
                    <div className='div-buttons'>
                        <Button className='button-yes' onClick={() => deleteTech()}>
                                Sim
                        </Button>
                        <Button className='button-no' onClick={() => setShowModalDeleteTech(false)}>
                            Não
                        </Button>
                    </div>
                    


                </div>

                    


            </div>
            
             </div>
             </Container>
    )


}

export default ModalDeleteTech