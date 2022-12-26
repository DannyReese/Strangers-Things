import { Link } from "react-router-dom"
export const LoggedOutNav =()=>{

    return(
        <div className="title">
        <div>
            <span className="cl">Craigs List</span>
            <span className="lite">.lite</span>
        </div>
            <Link to='/create_account'>Sign Up</Link>
        </div>
    )
}

export default LoggedOutNav

