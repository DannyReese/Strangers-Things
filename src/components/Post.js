
import React from "react"
import '../css/Post.css'

const Post = ({ post }) => {

    const { data } = post


    return (
        <aside className="posts">
            {
                data.posts.map(post => {
                    return (
                        <div className="post" key={post._id} >
                            <div className="header">{post.title}</div>
                            <div className='description'>{post.description}</div>
                            <div className="price-user">
                                <div className="user">{post.author.username}</div>
                                <div className="price">{post.price}</div>
                            </div>
                        </div>)
                })
            }
        </aside>
    )
}
export default Post