

import { useEffect, useState } from "react"
import { profile } from "../Api.fetch"
import UserMessagePageCss from '../css/UsersMessagePage.module.css'
import Title from "../components/Title"

const SentMessages = () => {

    const username = localStorage.getItem('user')
    const [messages, getMessages] = useState([])
    const [sentMessages, setSentMessages] = useState([])
    console.log(messages)

    const getPosts = async () => {
        const resp = await profile()
        getMessages(resp.data.messages)
    }

    useEffect(() => { getPosts() }, [])

    useEffect(() => {

        const array = []
        messages.map(message => message.fromUser.username === username ? array.push(message) : null)
        return setSentMessages(array)
    }, [username, messages])

    return (<div className={UserMessagePageCss.page}>
        <Title className={UserMessagePageCss.title} />
        <div className={UserMessagePageCss.pagecontainer}>
            <div className={UserMessagePageCss.messagescontainer}>
                <div className={UserMessagePageCss.message}>
                    {sentMessages.length ? sentMessages.map(message => {
                        return (
                            <div className={UserMessagePageCss.post} key={message._id}>
                                <div className={UserMessagePageCss.title}>Refering to : {message.post.title.toUpperCase()}</div>
                                <div className={UserMessagePageCss.content}>{message.content}</div>
                            </div>)
                    })
                        : <div><h1> No Messages :\ </h1></div>}
                </div>
            </div>
        </div>
    </div>
    )
}

   
export default SentMessages
