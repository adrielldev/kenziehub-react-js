import { Container, HeaderContainer,MidContainer,HomeContainer} from './styles'

import { Navigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import DropdownMenu from '../../components/DropdownMenu'
import api from '../../services/api'
import Techs from '../../components/Techs'
import Works from '../../components/Works'
import Community from '../../components/Community'
import { useEffect,useState } from 'react'
import Profile from '../../components/Profile'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Dashboard = ({auth,setAuth}) => {
    const[user,setUser] = useState({})
    const [home,setHome] = useState(true);
    const [pageTech,setPageTech] = useState(false);
    const [pageWork,setPageWork] = useState(false);
    const [pageCom, setPageCom] = useState(false);
    const [pageProfile, setPageProfile] = useState(false);
    const [users,setUsers] = useState([])
    const[techs,setTechs] = useState([])
    const [works,setWorks] = useState([])
    const [countPage,setCountPage] = useState(1)
      
    useEffect(()=>{
    api
   .get(`/users/${window.localStorage.getItem('@Kenziehub:userId')}`)
   .then(res=>{
       setUser(res.data)
       setTechs(res.data.techs)
       setWorks(res.data.works)
   })
    },[])
    useEffect(()=>{
        api
        .get(
            `/users?perPage=20&page=${countPage}`
        )
        .then(
            res=>setUsers(res.data)
        )
        .catch(err=>console.log(err))
    }
       ,[countPage])


    if(!auth){
        return <Navigate to='../'/>
    }
   
   

    return (

        <Container>
            <HeaderContainer>
                <h3>Kenzie Hub</h3>

                <DropdownMenu setPageProfile={setPageProfile} setHome={setHome} setPageCom={setPageCom} setPageTech={setPageTech} setPageWork={setPageWork}/>
                <Navbar setPageProfile={setPageProfile} setHome={setHome} setPageCom={setPageCom} setPageTech={setPageTech} setPageWork={setPageWork}/>
                </HeaderContainer>
                <MidContainer>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </MidContainer>

        {  home && <HomeContainer>
                    <h1>Bem vindo ao <span>Kenzie Hub!</span></h1>
                        <p>
                            Não espere mais, comece a adicionar suas tecnologias,
                            ver seus projetos e acompanhar outros devs!

                        </p>
                </HomeContainer>
        }
        {pageTech && <Techs techs={techs} setTechs={setTechs} user={user}/>}
        {pageWork && <Works works={works} setWorks={setWorks} user={user}/>}
        {pageCom && <Community users={users} setCountPage={setCountPage} countPage={countPage}/>}
        {pageProfile && <Profile user={user}/>}
        <ToastContainer/>

        


           


        </Container>
    )
}

export default Dashboard