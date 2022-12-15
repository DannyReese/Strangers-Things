import React, { useState } from "react"
import { creatAccount } from "../Api.fetch"
import { Link } from "react-router-dom"

const CreateAccount = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div>
        <div className="title">
            <div>
                <span className="cl">Craigs List</span>
                <span className="lite">.lite</span>
            </div>
            <button><Link to="/">go to login</Link></button>
        </div>
        <form onSubmit={async (event) => {
            event.preventDefault()
            try {
                console.log(username)
                const resp = await creatAccount(username, password)
                const data = await resp.json()
                console.log(data)
            } catch (e) {
                console.log('didnt work')
            }
        }}>
            <input placeholder='username..' onChange={event => setUsername(event.target.value)}></input>
            <input placeholder='password..' onChange={event => setPassword(event.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default CreateAccount