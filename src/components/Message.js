import '../css/Message.css'
import { useState } from 'react'
import { postMessage } from '../Api.fetch'

const Message = ({ title, description, username, location, price, postId }) => {
    const [message, setMessage] = useState('')


    return (<div>
        <div className="post" >
            <div className="header">{title}</div>
            <div className='description'>{description}</div>
            <div className="price-user">
                <div className="user">{username}</div>
                <div>{location}</div>
                <div className="price">{price}</div>
            </div>
        </div>
        <form onSubmit={(event) => {
            event.preventDefault()
            postMessage(postId, message)
            setMessage('')
        }}>
            <textarea value={message} id='message-text' onChange={event => { setMessage(event.target.value) }}></textarea>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Message