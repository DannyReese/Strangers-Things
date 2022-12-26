
import React from "react"
import PostCss from '../css/Post.module.css'
import { fetchPosts } from "../Api.fetch"
import { useEffect, useState } from "react"




export const Post = () => {

    const [posts, setPosts] = useState([])
    const { data } = posts


    console.log(posts)



    const getPosts = async () => {
        const results = await fetchPosts()
        setPosts(results)
    }
    
    useEffect(() => {getPosts()}, [])
    return (
        <aside className={PostCss.posts}>
            {
                data ? data.posts.map(post => {
                    return (

                        <div className={PostCss.post} key={post._id} >

                            
                                <div className={PostCss.header}>{post.title}</div>
                                <div className={PostCss.description}>{post.description}</div>
                                <div className={PostCss.priceuser}>
                                    <div className={PostCss.user}>{post.author.username}</div>
                                    <div className={PostCss.location}>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                                    <div className={PostCss.price}>{post.price}</div>

                                </div>
                            
                        </div>)
                }) : null
            }
        </aside>
    )
}
export default Post