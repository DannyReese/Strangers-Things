
import { profile } from "../Api.fetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileCss from "../css/Profile.module.css"



const Profile = ({ setLocation, setPostId, setTitle, setPrice, setDescription }) => {

    const [userPosts, setUserPosts] = useState([])
    const [posts, setPosts] = useState([])

    const { data } = userPosts

    const getPosts = async () => {
        const results = await profile()
        const data = results.data.posts.reverse()
        console.log(data)
        setPosts(data)
        setUserPosts(results)
    }

    useEffect(() => { getPosts() }, [])


    return (<div className={ProfileCss.profile}>

        {data ? <Link to='/users-messages'><button className={ProfileCss.messages}>messages</button></Link> : null}

        {data ? <div><h1><b>Welcome: {data.username}</b></h1></div> : null}

        {data ? posts.map( post => post.active === false ? null :

            

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
                       
                        <div className={ProfileCss.header}><h3>{post.title.toUpperCase()}</h3></div>
                        <Link to='/edit' className={ProfileCss.edit}>edit</Link>
                    </div>
                    <div className={ProfileCss.description}>{post.description}</div>
                    <div className={ProfileCss.priceuser}>
                        <div className={ProfileCss.user}>{post.location}</div>
                        <div className={ProfileCss.price}>{post.price}</div>
                    </div>

                </form>
            
        ) : null
        }

    </div>
    )
}



export default Profile


