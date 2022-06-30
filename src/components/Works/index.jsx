import { Container,HeaderContainer,Content,WorkItem } from "./styles"
import {FiPlus} from 'react-icons/fi'
import { RiDeleteBinLine} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'
import ModalAddWork from "../ModalAddWork"

import {useState } from 'react'
import ModalDeleteWork from "../ModalDeleteWork"
import ModalEditWork from "../ModalEditWork"

const Works = ({works,setWorks}) =>{

    const [worksUser,setWorksUser] = useState(works)
    const [showModalAddWork, setShowModalAddWork] = useState(false);
    const [showModalDeleteWork, setShowModalDeleteWork] = useState(false);
    const [showModalEditWork, setShowModalEditWork] = useState(false);
    const [target,setTarget] = useState()


    return (
        <Container>
            <HeaderContainer>
            <h3>Works</h3>

            <div>
                <button onClick={()=>setShowModalAddWork(true)}>
                    <FiPlus color='white'/>
                </button>
            </div>
           </HeaderContainer>

           <Content>

               {worksUser.map(item=>(
                   
                    <WorkItem key={item.id}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="div-link-buttons">
                    <a href={item.deploy_url}>Link projeto</a>
                    <div>
                    <button onClick={()=>{setShowModalDeleteWork(true);setTarget(item)}}>
                                    <RiDeleteBinLine color='red'/>
                                </button>
                                <button onClick={()=>{setShowModalEditWork(true);setTarget(item)}}>
                                <AiFillEdit color='yellow'/>
                            </button>
                            </div>
                        </div>
                        <ModalDeleteWork project={target?.id} worksUser={worksUser} setWorksUser={setWorksUser} setShowModalDeleteWork={setShowModalDeleteWork} showModalDeleteWork={showModalDeleteWork}/>
                        <ModalEditWork project={target?.id} worksUser={worksUser} setWorksUser={setWorksUser} setShowModalEditWork={setShowModalEditWork} showModalEditWork={showModalEditWork}/>
                        
                    </WorkItem>

               ))}
              
           </Content>
           <ModalAddWork  worksUser= {worksUser} setWorksUser= {setWorksUser} showModalAddWork={showModalAddWork} setShowModalAddWork={setShowModalAddWork}/>

        </Container>
    )

}

export default Works