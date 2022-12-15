
import React from "react"
import '../css/Post.css'
import { fetchPosts } from "../Api.fetch"
import { useEffect , useState } from "react"

const Post = ({change}) => {

    const [posts, setPosts] = useState([])
    const { data } = posts
   

    const getPosts = async()=>{
        const results = await fetchPosts()
        setPosts(results)
    }
    useEffect(() =>{getPosts()}, [change])
    return (
        <aside className="posts">
            { 
               data? data.posts.map(post => {
                    return (
                        <div className="post" key={post._id} >
                            <div className="header">{post.title}</div>
                            <div className='description'>{post.description}</div>
                            <div className="price-user">
                                <div className="user">{post.author.username}</div>
                                <div className="price">{post.price}</div>
                            </div>
                        </div>)
                }):null
            }
        </aside>
    )
}
export default Post