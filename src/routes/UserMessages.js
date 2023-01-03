

import { useEffect, useState } from "react"
import { profile } from "../Api.fetch"
import UserMessagePageCss from '../css/UsersMessagePage.module.css'
import Title from "../components/Title"

const UserMessages = () => {

    const username = localStorage.getItem('user')
    const [messages, getMessages] = useState([])
    const [inbox, setInbox] = useState([])


    const getPosts = async () => {
        const resp = await profile()
        getMessages(resp.data.messages)
    }

    useEffect(() => { getPosts() }, [])

    useEffect(() => {

        const array = []
        messages.map(message => message.fromUser.username === username ? null : array.push(message))
        return setInbox(array)
    }, [username, messages])

    return (<div className={UserMessagePageCss.page}>
        <Title className={UserMessagePageCss.title} />
        <div className={UserMessagePageCss.pagecontainer}>
            <div className={UserMessagePageCss.messagescontainer}>
                <div className={UserMessagePageCss.message}>
                    {inbox.length ? inbox.map(message => {
                        return (
                            <div className={UserMessagePageCss.post} key={message._id}>
                                <div className={UserMessagePageCss.title}>Refering to : {message.post.title.toUpperCase()}</div>
                                <div className={UserMessagePageCss.content}>{message.content}</div>
                                <div className={UserMessagePageCss.user}> From : {message.fromUser.username.toUpperCase()}</div>
                            </div>)
                    })
                        : <div><h1> No Messages :\ </h1></div>}
                </div>
            </div>
        </div>
    </div>
    )
}
export default UserMessages




