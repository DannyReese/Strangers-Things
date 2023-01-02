
import {Search} from "../components/Search";
import {LoggedOutNav} from "../components/LoggedOutNav";
import {Login} from "../components/Login";
import LoggedOutCss from '../css/LoggedOut.module.css'
const LoggedOut = () => {

    return (
        <div className={LoggedOutCss.Page}>
            <LoggedOutNav />
            <div className={LoggedOutCss.homecontainer}>
                <div className={LoggedOutCss.loginsearch}>
                    <Login />
                    <Search  />
                </div>
            </div>

        </div>
    )
}

export default LoggedOut
