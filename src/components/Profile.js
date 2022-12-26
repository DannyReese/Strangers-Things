
import { profile } from "../Api.fetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileCss from "../css/Profile.module.css"



const Profile = ({ change, setLocation, setPostId, setTitle, setPrice, setDescription }) => {

    const [userPosts, setUserPosts] = useState([])

    const { data } = userPosts

    const getPosts = async () => {
        const results = await profile()
        setUserPosts(results)
    }

    useEffect(() => { getPosts() }, [change])


    return (<div className={ProfileCss.profile}>

        {data ? <Link to='/users-messages'><button className={ProfileCss.messages}>messages</button></Link> : null}

        {data ? <div><h2>Welcome: {data.username}</h2></div> : null}

        {data ? data.posts.map(post => {

            return (

                <form onMouseOver={() => {
                    setPostId(post._id)
                    setDescription(post.description)
                    setLocation(post.location)
                    setPrice(post.price)
                    setTitle(post.title)
                }} className={ProfileCss.postdiv}
                    key={post._id}
                >
                    <div className={ProfileCss.headerdiv}>
                        <div className={post.active ? ProfileCss.actived : null}>
                            <div></div>
                        </div>
                        <div className={ProfileCss.header}><h3>{post.title}</h3></div>
                        <Link to='/edit'>edit</Link>
                    </div>
                    <div className={ProfileCss.description}>{post.description}</div>
                    <div className={ProfileCss.priceuser}>
                        <div className={ProfileCss.user}>{post.location}</div>
                        <div className={ProfileCss.price}>{post.price}</div>
                    </div>

                </form>
            )
        }) : null
        }

    </div>
    )
}



export default Profile


