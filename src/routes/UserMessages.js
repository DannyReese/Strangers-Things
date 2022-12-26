

import { useEffect, useState } from "react"
import { profile } from "../Api.fetch"
import MessagePageCss from '../css/UsersMessagePage.module.css'

import Title from "../components/Title"

const UserMessages = () => {
    const username = localStorage.getItem('user')
    const [messages, getMessages] = useState([])
    const [inbox, setInbox] = useState([])
    console.log(messages)
    console.log(inbox)

    const getPosts = async () => {
        const resp = await profile()

        getMessages(resp.data.messages)

    }


    useEffect(() => { getPosts() }, [])

    useEffect(() => {
       
        const array = []
        messages.map(message => message.fromUser.username === username ? null : array.push(message))
        return setInbox(array)
    }, [username,messages])

    return (<>
        <Title />
        <div className={MessagePageCss.page}>
            <div className={MessagePageCss.messagescontainer}>
                <div className={MessagePageCss.message}>
                    {inbox ? inbox.map(message => {
                        return (
                            <div className={MessagePageCss.post} key={message._id}>
                                <div className={MessagePageCss.user}>{message.fromUser.username}</div>
                                <div>{message.content}</div>
                            </div>)
                    })
                        : <div><h1> No Messages :\ </h1></div>}
                </div>
            </div>
        </div>
    </>
    )
}
export default UserMessages

