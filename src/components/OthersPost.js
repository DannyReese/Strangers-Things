
import { useEffect, useState } from "react"
import { fetchPosts } from "../Api.fetch"
import { Link } from "react-router-dom"
import { DateTime } from "luxon"
import OtherUsersPostCss from '../css/OtherUserPost.module.css'


export const OtherUserPosts = ({

    setOthersUsername,
    setTitle,
    setLocation,
    setPrice,
    setDescription,
    setPostId }) => {

    const username = localStorage.getItem('user')
    const [otherUserPosts, setOtherUserPosts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [result, setResul] = useState([])

    const sendPostInfo = (title, location, price, description, username, id) => {
        setTitle(title)
        setLocation(location)
        setPrice(price)
        setDescription(description)
        setOthersUsername(username)
        setPostId(id)
    }

    useEffect(() => {
        const getPosts = async () => {
            const array = []
            const resp = await fetchPosts()
            resp.data.posts.map(post => post.author.username === username ? null : array.push(post))
            const results = array.reverse()
            setOtherUserPosts(results)
        };
        getPosts()
    }, [username])

    useEffect(() => {
        const searchFilter = otherUserPosts.filter((p) => {
            return (
                p.title.toLowerCase().includes(searchValue) ||
                p.description.toLowerCase().includes(searchValue) ||
                p.location.toLowerCase().includes(searchValue))
        })
        setResul(searchFilter)
    },
        [searchValue, otherUserPosts]
    )
    return (

        <div className={OtherUsersPostCss.othersposts}>


            <form className={OtherUsersPostCss.searchform} onSubmit={(event) => {
                event.preventDefault()


            }}>

                <div>
                    <div className={OtherUsersPostCss.searchbar}>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <input value={searchValue} placeholder="what are you looking for?" className={OtherUsersPostCss.searchinput} onChange={event => setSearchValue(event.target.value)}></input>
                    </div>
                </div>
            </form>
            {result ? result.map(post =>
                <div
                    onClick={() => {
                        sendPostInfo(
                            post.title,
                            post.location,
                            post.price,
                            post.description,
                            post.author.username,
                            post._id)
                    }}
                    key={post._id}
                >
                    <Link to="message" replace className={OtherUsersPostCss.otherspost}>
                        <div className={OtherUsersPostCss.time}>{DateTime.fromISO(post.createdAt).toLocaleString(DateTime.DATE_MED)}</div>
                        <div className={OtherUsersPostCss.headerdiv}>
                            <div className={OtherUsersPostCss.header}><h2>{post.title}</h2></div>

                        </div>
                        <div className={OtherUsersPostCss.description}>{post.description}</div>
                        <div className={OtherUsersPostCss.priceuser}>
                            <div className={OtherUsersPostCss.user}>{post.author.username}</div>
                            <div>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                            <div className={OtherUsersPostCss.price}>{post.price}</div>

                        </div>

                    </Link>
                </div>
            ) : null}
        </div>

    )
}

export default OtherUserPosts