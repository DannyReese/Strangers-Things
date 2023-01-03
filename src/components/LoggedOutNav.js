import { Link } from "react-router-dom"
import LoggedOutNavCss from '../css/LoggedOutNav.module.css'

export const LoggedOutNav = () => {

    return (
        <div className={LoggedOutNavCss.title}>
            <div className={LoggedOutNavCss.cllite}>
                <span className={LoggedOutNavCss.cl}><h2>Strangers</h2></span>
                <span className={LoggedOutNavCss.lite}>.things</span>
            </div>
            <Link to='/create_account' className={LoggedOutNavCss.signup}>Sign Up</Link>
        </div>
    )
}

export default LoggedOutNav

