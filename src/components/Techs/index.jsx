import {Container,HeaderContainer,Content,TechItem} from './styles'
import {FiPlus} from 'react-icons/fi'
import { RiDeleteBinLine} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'
import {useState,useEffect } from 'react'
import ModalAddTech from '../ModalAddTech'
import ModalDeleteTech from '../ModalDeleteTech'
import ModalEditTech from '../ModalEditTech'

const Techs = ({techs,setTechs,user}) => {
    const [showModalAddTech, setShowModalAddTech] = useState(false);
    const [showModalDeleteTech, setShowModalDeleteTech] = useState(false);
    const [showModalEditTech, setShowModalEditTech] = useState(false);
    const [target,setTarget] = useState()

    



    return (
       <Container>
           <HeaderContainer>
            <h3>Technologies</h3>

            <div>
                <button onClick={()=>setShowModalAddTech(true)}>
                    <FiPlus color='white'/>
                </button>
            </div>
           </HeaderContainer>

           <Content>
               {techs.map(item=>(
                    <TechItem key={item.id}>
                        <h4>{item.title}</h4>
                    <div>
                            <p>{item.status}</p>
                            <button onClick={()=>{setShowModalDeleteTech(true);setTarget(item)}}>
                                <RiDeleteBinLine color='red'/>
                            </button>
                            <button>
                            <AiFillEdit color='yellow' onClick={()=>{setShowModalEditTech(true);setTarget(item)}}/>
                        </button>
                        
                        <ModalDeleteTech tech={target?.id}  user={user} techs= {techs} setTechs= {setTechs} showModalDeleteTech={showModalDeleteTech} setShowModalDeleteTech={setShowModalDeleteTech}/>
                        <ModalEditTech tech={target?.id} name={target?.title}  user={user} techs= {techs} setTechs= {setTechs} showModalEditTech={showModalEditTech} setShowModalEditTech={setShowModalEditTech}/>
                    </div>
                   </TechItem>
               ))}
                <div className='div-modal-add'>
                    <ModalAddTech user={user} techs= {techs} setTechs= {setTechs} showModalAddTech={showModalAddTech} setShowModalAddTech={setShowModalAddTech}/>
                </div>
           </Content>
          

       </Container>
    )
}
export default Techs