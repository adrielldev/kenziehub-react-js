import {Container,DropdownItem} from './styles'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsArrowRight,BsFillPeopleFill} from 'react-icons/bs'
import { BiLogOut,BiUser } from 'react-icons/bi'
import { SiJavascript} from 'react-icons/si'
import { GrWorkshop } from 'react-icons/gr';
import { MdOutlineWork } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import ModalLogout from '../ModalLogout'

const DropdownMenu = ({setPageTech,setPageWork,setPageCom,setHome,setPageProfile}) =>{

    const [showModalLogout,setShowModalLogout] = useState(false)

    return(
        <Container>
            <div className="dropdown">
            <span><GiHamburgerMenu/></span>
            <div className="dropdown-content">
                <DropdownItem>
                    
                    <button onClick={()=>{setPageTech(false); setHome(false);setPageCom(false);setPageWork(false); setPageProfile(true)}}>
                        <BiUser color='green'/>
                        <p>Profile</p>
                    </button>

                </DropdownItem>
                <DropdownItem>
                    <button onClick={()=>{setPageTech(true); setHome(false);setPageCom(false);setPageWork(false); setPageProfile(false)}}>
                        <SiJavascript color='yellow'/>
                        <p>Techs</p>
                    </button>
                </DropdownItem>
                <DropdownItem>
                    <button onClick={()=>{setPageWork(true);setHome(false);setPageTech(false);setPageCom(false);setPageProfile(false)}}>
                        <MdOutlineWork color='brown'/>
                        <p>Works</p>
                    </button>
                </DropdownItem>
                <DropdownItem>
                    <button onClick={()=>{setPageCom(true);setHome(false);setPageWork(false);setPageTech(false);setPageProfile(false)}}>
                        <BsFillPeopleFill color='lightblue'/>
                        <p>Community</p>
                    </button>
                </DropdownItem>
                <DropdownItem>
                    <button onClick={()=>setShowModalLogout(true)}>
                        <BiLogOut color='red'/>
                        <p>Logout</p>
                    </button>
                </DropdownItem>



            </div>
        </div>
        <ModalLogout showModalLogout={showModalLogout} setShowModalLogout={setShowModalLogout}/>

      </Container>
    )
}

export default DropdownMenu