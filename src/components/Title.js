import { Link } from 'react-router-dom';
import '../css/Title.css'

export const Title = () => {

    return (
        <div className="title">
            <div className='craigslist'>
                <span className="cl"><h2>Strangers</h2></span>
                <span className="lite">.things</span>
            </div>
            <div className='butt'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/welcome'>Profile</Link>
                <Link className='link' to='/create_post'>Create</Link>
                <Link className='link' to='/'>logout</Link>
            </div>
        </div>
    )
}


export default Title

