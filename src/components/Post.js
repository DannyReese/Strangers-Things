
import React from "react"
import '../css/Post.css'
import { fetchPosts } from "../Api.fetch"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { message } from "../Api.fetch";

const Post = ({ change, setLocation, setTitle, setPrice, setDescription,setPostId }) => {

    const [posts, setPosts] = useState([])
    const { data } = posts

    const [message, setMessage] = useState(false)

    const sendPostInfo = (title,location,price,description,id) => {
        setTitle(title)
        setLocation(location)
        setPrice(price)
        setDescription(description)
        setPostId(id)
    }


    const getPosts = async () => {
        const results = await fetchPosts()
        setPosts(results)
    }
    useEffect(() => { getPosts() }, [change])
    return (
        <aside className="posts">
            {
                data ? data.posts.map(post => {
                    return (

                        <div className="post" key={post._id} >
                            <Link to='/message'><button onClick={() => sendPostInfo(post.title,post.location,post.price,post.description,post._id)
                             }>message</button></Link>
                            <div className="header">{post.title}</div>
                            <div className='description'>{post.description}</div>
                            <div className="message">{message ? <form><textarea></textarea><button onClick={() => setMessage(false)}>submit</button></form> : null}</div>
                            <div className="price-user">
                                <div className="user">{post.author.username}</div>
                                <div>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                                <div className="price">{post.price}</div>

                            </div>
                        </div>)
                }) : null
            }
        </aside>
    )
}
export default Post