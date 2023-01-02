import MessageCss from '../css/Message.module.css'
import { useState } from 'react'
import { postMessage } from '../Api.fetch'
import { Link } from 'react-router-dom';



const Message = ({ setIsOnMessagePage,title, description, othersUsername, location, price, postId }) => {
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
        
            <textarea value={message} placeholder="What do you want to say?"className={MessageCss.messagetext} onChange={event => { setMessage(event.target.value) }}></textarea>
            <Link to="/home" onMouseDown={(event) => {
                event.preventDefault()
                postMessage(postId, message)
               
                setMessage('')}
            }className={MessageCss.submit} >Submit</Link>
           
        </form>
   
    )
}

export default Message