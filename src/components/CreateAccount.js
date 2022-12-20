import React, { useState } from "react"
import { creatAccount } from "../Api.fetch"
import { Link } from "react-router-dom"
import '../css/CreateAccount.css'

const CreateAccount = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div>

        <div className="title">

            <div>
                <span className="cl">Craigs List</span>
                <span className="lite">.lite</span>
            </div>

            <div id='login-container'>
                <Link to="/">login</Link>
            </div>

        </div>

        <form className="login-form" onSubmit={async (event) => {
            event.preventDefault()
            try {
                console.log(username)
                const resp = await creatAccount(username, password)
                const data = await resp.json()
                console.log(data)
            } catch (e) {
                
            }
        }}>
            <input className="input1"
                placeholder='username..'
                onChange={event => setUsername(event.target.value)}
            >
            </input>

            <input className='input2'
                placeholder='password..'
                onChange={event => setPassword(event.target.value)}
            >
            </input>

            <button>Submit</button>

        </form>

    </div>
    )
}

export default CreateAccount