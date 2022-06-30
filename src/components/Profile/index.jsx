import {Container,Content, UserItem} from './styles'

import UserImage from '../../assets/penguim.png';
import api from '../../services/api';
import { useEffect,useState } from 'react';



const Profile = () => {
        const [user,setUser] = useState({})
        const [showModalEditProfile,setShowModalEditProfile] = useState(false)

        useEffect(()=>{
            const userId = window.localStorage.getItem('@Kenziehub:userId')
            api
            .get(`/users/${userId}`)
            .then(res=>{
                setUser(res.data);
            })
            .catch(err=>console.log(err))
        },)
    
//
    return (


        <Container>

            <Content>
                <UserItem>
                <div className='div-img'>
                        <img src={user.avatar_url ? user.avatar_url : 'https://cdn-icons-png.flaticon.com/512/518/518713.png'}></img>
                        </div>
                        <div className='div-infos'>

                        <div className='div-name-module'>
                            <h4>{user.name && user.name}</h4>
                            <p>{user.course_module && user.course_module}</p>
                        </div>
                        <p>Bio: {user && user.bio}</p>
                        <div className='div-tecs-works'>
                            <p>Technologies: <span>{user.techs && user.techs.length}</span></p>
                            <p>Works: <span>{user.works && user.works.length}</span></p>
                        </div>
                        <span> Contato: <span>  </span>
                        <a href={user && user.contact}>{user && user.contact}</a>
                        </span>
                    </div>
                </UserItem>
            </Content>
            
        </Container>
    )
}

export default Profile