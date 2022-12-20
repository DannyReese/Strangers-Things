import { search } from "../Api.fetch"
import { useState } from 'react'
import Post from "./Post"
import { Link } from "react-router-dom"
import Login from "./Login"
import '../css/Search.css'


const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [result, setResul] = useState('')


    const searchResult = async () => {
        const resp = await search(searchValue)
        console.log(resp)
        setResul(resp)

    }

    return (
        <div>
        
        <div className="title">

<div>
    <span className="cl">Craigs List</span>
    <span className="lite">.lite</span>
</div>

<div id="sign-up-container">
    <Link to='/create_account'>Sign-Up</Link>
</div>

</div>
    <div id='post-search-div'>
        <div>
        <Login/>
        <Post />
        </div>

           
        <div id='search-and-result'>
       
            <form className='search-form' onSubmit={(event) => {
                event.preventDefault()
                searchResult()

            }}>
                <label>Search</label>
                <div>
                    <input value={searchValue} id='search-input' onChange={event => setSearchValue(event.target.value)}></input>
                    <button>Search</button>
                </div>
            </form>

            <div id='search-results'>
                {
                    result ? result.map(post => {
                        return (
                            <div className="post" key={post._id} >
                                <div className="header">{post.title}</div>
                                <div className='description'>{post.description}</div>
                                <div className="price-user">
                                    <div className="user">{post.author.username}</div>
                                    <div>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                                    <div className="price">{post.price}</div>

                                </div>
                            </div>)
                    }) : null
                }
            </div>
        </div>
    </div>
    </div>
    )
}

export default Search