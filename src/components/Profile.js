
import { profile } from "../Api.fetch"
import { useEffect, useState } from "react"

const Profile = () => {
    const [userPosts, setUserPosts] = useState([])
    const { data } = userPosts
    
    const getPosts = async()=>{
        const results = await profile()
        setUserPosts(results)
    }
    useEffect(() =>{getPosts()}, [])
    
    
    return (<div className="profile">
            { 
                data ? data.posts.map(post=>{
                    return(  <div key={post._id}>
                            <div className="header">{post.title}</div>
                            <div className='description'>{post.description}</div>
                            <div className="price-user">
                                <div className="user">{post.author.username}</div>
                                <div className="price">{post.price}</div>
                        </div>
                        </div>
                    )
                }):null
                }
        </div>
        
    )
}
export default Profile