import { Link } from 'react-router-dom';
import '../css/Title.css'

const Title = ({isLoggedIn,setIsLoggedIn}) => {

    return (
        <div className="title">
            <div>
                <span className="cl">Craigs List</span>
                <span className="lite">.lite</span>
            </div>
         <div className='butt'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/create_post'>Create Post</Link>
                <Link className='link' to='/'>logout</Link>
            
            </div>
        </div>
    )
}

export default Title
