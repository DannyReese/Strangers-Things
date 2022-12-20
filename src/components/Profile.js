
import { profile } from "../Api.fetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../css/Profile.css"


const Profile = ({ setLocation, setPostId, setTitle, setPrice, setDescription }) => {

    const [userPosts, setUserPosts] = useState([])
    const { data } = userPosts
   


    const getPosts = async () => {
        const results = await profile()
        setUserPosts(results)
}

    useEffect(() => { getPosts() }, [])


    return (<div className="profile">
        {data ? <div><h2>Welcome: {data.username}</h2></div> : null}
        {data ? data.posts.map(post => {

            return (

                <form onMouseOver={() => {

                    setPostId(post._id)
                    setDescription(post.description)
                    setLocation(post.location)
                    setPrice(post.price)
                    setTitle(post.title)

                }} className='post-div' key={post._id}>
                    <div id="header-div">
                        <div id={post.active ? 'active-d' : null}>
                            <div></div>
                        </div>
                        <div id="header">{post.title}</div>
                        <Link to='/edit'>edit</Link>
                    </div>
                    <div className='description'>{post.description}</div>
                    <div className="price-user">
                        <div className="user">{post.location}</div>
                        <div className="price">{post.price}</div>
                    </div>

                </form>
            )
        }) : null
        }
    </div>
    )
}
export default Profile