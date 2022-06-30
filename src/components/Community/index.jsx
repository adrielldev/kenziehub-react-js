import {Container, HeaderContainer,Content, UserItem} from './styles'
import UserImage from '../../assets/penguim.png';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

const Community = ({countPage,setCountPage,users}) =>{

    return (
        <Container>
            <HeaderContainer>
                <h3>Community</h3>

                <div className='div-buttons'>
                    <button onClick={()=>setCountPage(countPage-1)} className='left-button' isFirstPage={1}><AiOutlineArrowLeft/></button>
                    <button className='right-button' onClick={()=>setCountPage(countPage+1)}><AiOutlineArrowRight/></button>
                </div>
            </HeaderContainer>

            <Content>
                {users.map(user=>(
                    <UserItem key={user.id}>
                        <div className='div-img'>
                    <img src={user.avatar_url ? user.avatar_url : 'https://cdn-icons-png.flaticon.com/512/518/518713.png'}></img>
                     </div>
                     <div className='div-infos'>

                    <div className='div-name-module'>
                        <h4>{user.name.length > 10 ? user.name.slice(0,8) + '...' : user.name}</h4>
                        <p>{user.course_module}</p>
                    </div>
                    <p>Bio: {user.bio}</p>
                    <div className='div-tecs-works'>
                        <p>Technologies: <span>{user.techs.length}</span></p>
                        <p>Works: <span>{user.works.length}</span></p>
                    </div>
                    <span> Contato: <span>  </span>
                     <a href={user.contact}>{user.contact}</a>
                    </span>
                </div>
                        

                    </UserItem>
                ))}

                
                
                

            </Content>

        </Container>
    )
}

export default Community