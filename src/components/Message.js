import MessageCss from '../css/Message.module.css'
import { useState } from 'react'
import { postMessage } from '../Api.fetch'
import { Link } from 'react-router-dom';



const Message = ({ title, description, othersUsername, location, price, postId }) => {
    const [message, setMessage] = useState('')


    return (<form className={MessageCss.messageform}>
    
        <div className={MessageCss.post} >
            <div className={MessageCss.header}>{title}</div>
            <div className={MessageCss.description}>{description}</div>
            <div className={MessageCss.priceuser}>
                <div className={MessageCss.user}>{othersUsername}</div>
                <div>{(location === '[On Request]' || !location) ? null :location}</div>
                <div className={MessageCss.price}>{price}</div>
            </div>
        </div>
        
            <textarea value={message} id='message-text' onChange={event => { setMessage(event.target.value) }}></textarea>
            <Link to="/home"><button onMouseDown={(event) => {
                event.preventDefault()
                postMessage(postId, message)
                setMessage('')
            }}>Submit</button></Link>
           
        </form>
   
    )
}

export default Message