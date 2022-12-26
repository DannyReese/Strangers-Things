import {Post} from "../components/Post";
import {Search} from "../components/Search";
import {LoggedOutNav} from "../components/LoggedOutNav";
import {Login} from "../components/Login";
import LoggedOutCss from '../css/LoggedOut.module.css'
const LoggedOut = () => {

    return (
        <>
            <LoggedOutNav />
            <div className={LoggedOutCss.homecontainer}>
                <div>
                    <Login />
                    <Search  />
                </div>
               <Post />
            </div>

        </>
    )
}

export default LoggedOut
