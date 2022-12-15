import { useState } from 'react'
import { login } from "../Api.fetch"
import { Link } from 'react-router-dom'
import '../css/Login.css';

const Login = ({ setToken }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isMember, setIsMember] = useState(false)
    const userToken = localStorage.getItem('token')


    return (

        <div>
            <div className="title">
                <div>
                    <span className="cl">Craigs List</span>
                    <span className="lite">.lite</span>
                </div>
                <div id="sign-up-container">
                    <Link to='/create_account'>Sign-Up</Link>
                </div>
            </div>
            <form >
                <input id="input1" type='text' placeholder='username..' onChange={event => setUsername(event.target.value)}></input>
                <input id='input2' type='password' placeholder='password..' onChange={event => setPassword(event.target.value)}></input>

                <button id="button" onMouseOver={
                    async (event) => {
                        event.preventDefault()
                        try {

                            const resp = await login(username, password)
                            setIsMember(resp.success)
                            setToken(userToken)


                        } catch (e) {
                            console.log('didnt work')
                        }
                    }}>{isMember ? <Link to='/home'>Login</Link> : "Login"}</button>

            </form>
        </div>
    )
}

export default Login