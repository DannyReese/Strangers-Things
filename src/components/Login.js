import { useState } from 'react'
import { login } from "../Api.fetch"
import { Link } from 'react-router-dom'
import '../css/Login.css';


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(false)
    const [isMember, setIsMember] = useState(false)



    return (

        <div>

           
            <form id='login-form' onSubmit={() => isMember ? null : setMessage(true)}>

                <input id="input1"
                    type='text'
                    placeholder='username..'
                    onChange={event => setUsername(event.target.value)}
                >
                </input>

                <input id='input2'
                    type='password'
                    placeholder='password..'
                    onChange={event => setPassword(event.target.value)}
                >
                </input>

                <div id="button"
                    onMouseOver={
                        async (event) => {
                            event.preventDefault()
                            try {
                                const resp = await login(username, password)
                                setIsMember(resp.success)
                            } catch (e) {
                              
                            }
                        }}>
                    {isMember ? <Link className='login-button' to='/home'><button>Login</button></Link> : <button>Login</button>}
                </div>
                <div>
                {message ? <div id='incorrect-password'>Incorrect username or password</div> : null}
            </div>
            </form>

         
</div>
        
    )
}
export default Login




