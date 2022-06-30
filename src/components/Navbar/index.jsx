import { Container,NavItem,DropdownItem } from "./styles"
import {BsFillPeopleFill,BsPencil} from 'react-icons/bs'
import { BiLogOut,BiUser } from 'react-icons/bi'
import { SiJavascript} from 'react-icons/si'
import { MdOutlineWork } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import ModalLogout from '../../components/ModalLogout'
 import { useState } from "react";


const Navbar = ({setPageProfile,setPageTech,setPageWork,setPageCom,setHome}) => {
    const [showModalLogout,setShowModalLogout] = useState(false)

    return (
        <Container>
            <nav>
                <NavItem>
                    <button  onClick={()=>{setPageCom(true);setHome(false);setPageWork(false);setPageTech(false);setPageProfile(false)}}>
                        <BsFillPeopleFill color="lightblue"/>
                        <h4>Community</h4>
                    </button>
                </NavItem>

                <NavItem>
                    <button  onClick={()=>{setPageWork(true);setHome(false);setPageTech(false);setPageCom(false);setPageProfile(false)}}>
                        <MdOutlineWork color="brown"/>
                        <h4>Works</h4>
                    </button>
                </NavItem>

                <NavItem>
                    <button  onClick={()=>{setPageTech(true); setHome(false);setPageCom(false);setPageWork(false); setPageProfile(false)}}>
                        <SiJavascript color="yellow"/>
                        <h4>Techs</h4>
                    </button>
                </NavItem>

                <NavItem>

                        <button   onClick={()=>{setPageTech(false); setHome(false);setPageCom(false);setPageWork(false); setPageProfile(true)}}>
                            <CgProfile color="lightgreen"/>
                            <h4>Profile</h4>
                        </button>
                    
                </NavItem>

                <NavItem>
                    <button onClick={()=>setShowModalLogout(true)}>
                        <BiLogOut color="red"/>
                        <h4>Logout</h4>
                    </button>
                </NavItem>
                

                
            </nav>
            <ModalLogout showModalLogout={showModalLogout} setShowModalLogout={setShowModalLogout}/>


            
        </Container>
       
    )
}

export default Navbar