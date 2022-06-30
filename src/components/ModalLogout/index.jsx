import {Container} from './styles'

import api from '../../services/api'

import { toast } from 'react-toastify'

import Button from '../Button'


const ModalLogout= ({showModalLogout,setShowModalLogout}) =>{
    if(!showModalLogout){
        return null;
    }

    const logout = () => {
        
        window.localStorage.clear();
        window.location.reload();
    
    }

    
    
    return (

        <Container>

       
        <div className="modal">
            <div className="modal-content">
                
                <h2>Deseja mesmo sair do Kenzie hub?</h2>

                <div className="modal-body">
                <div className='div-buttons'>
                        <Button className='button-yes' onClick={logout}>
                                Sim
                        </Button>
                        <Button className='button-no' onClick={() => setShowModalLogout(false)}>
                            Não
                        </Button>
                    </div>
                    
                    </div>
                    


                </div>

                    


            </div>
            
           
             </Container>
    )


}
export default ModalLogout