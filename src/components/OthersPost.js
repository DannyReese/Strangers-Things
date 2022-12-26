
import { useEffect, useState } from "react"
import { fetchPosts } from "../Api.fetch"
import { Link } from "react-router-dom"
import OtherUsersPostCss from '../css/OtherUserPost.module.css'


export const OtherUserPosts = ({ setOthersUsername, setTitle, setLocation, setPrice, setDescription, setPostId }) => {
    const username = localStorage.getItem('user')
    const [otherUserPosts, setOtherUserPosts] = useState([])
   
    const { data } = otherUserPosts



    const getPosts = async () => {
        const resp = await fetchPosts()
        setOtherUserPosts(resp)

    };

    const sendPostInfo = (title, location, price, description, username, id) => {
        setTitle(title)
        setLocation(location)
        setPrice(price)
        setDescription(description)
        setOthersUsername(username)
        setPostId(id)
    }

    useEffect(() => { getPosts() }, [])

    return (

        <div className={OtherUsersPostCss.othersposts}>
            {data ? data.posts.map(post => post.author.username === username ? null :
                <div
                    onClick={() =>
                        sendPostInfo(
                            post.title,
                            post.location,
                            post.price,
                            post.description,
                            post.author.username,
                            post._id)}
                    key={post._id}

                >
                    <div className={OtherUsersPostCss.otherspost}>
                        <div className={OtherUsersPostCss.headerdiv}>
                        <div className={OtherUsersPostCss.header}><h2>{post.title}</h2></div>
                        <Link to='message' className={OtherUsersPostCss.messagelink} >message</Link>
                        </div>
                        <div className={OtherUsersPostCss.description}>{post.description}</div>
                        <div className={OtherUsersPostCss.priceuser}>
                            <div className={OtherUsersPostCss.user}>{post.author.username}</div>
                            <div>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                            <div className={OtherUsersPostCss.price}>{post.price}</div>

                        </div>
                        
                    </div>
                </div>
            ) : null}
        </div>

    )
}

export default OtherUserPosts