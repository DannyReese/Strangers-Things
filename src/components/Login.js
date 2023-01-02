import { useState } from 'react'
import { login } from "../Api.fetch"
import { Link } from 'react-router-dom'
import LoginCss from '../css/Login.module.css';


export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(false)
    const [isMember, setIsMember] = useState(false)

   

    return (

        <div>


            <form className={LoginCss.loginform} onSubmit={() => isMember ? null : setMessage(true)}>

                <input className={LoginCss.input1}
                    type='text'
                    placeholder='username..'
                    onChange={event=>setUsername(event.target.value)}
                >
                </input>

                <input className={LoginCss.input2}
                    type='password'
                    placeholder='password..'
                    onChange={event=>setPassword(event.target.value)}
                >
                </input>

                <div className={LoginCss.buttondiv}
                    onMouseOver={
                        async (event) => {
                            event.preventDefault()
                            try {
                                const resp = await login(username, password)
                                setIsMember(resp)
                            } catch (e) {

                            }
                        }}>
                    {isMember ? <Link className={LoginCss.loginbutton} to='/welcome'>Login</Link> : <Link className={LoginCss.loginbutton} onClick={()=>setMessage(true)} to='/'>Login</Link>}
                </div>
                <div>
                    {message ? <div id='incorrect-password'>Incorrect username or password</div> : null}
                </div>
            </form>


        </div>

    )
}
export default Login





