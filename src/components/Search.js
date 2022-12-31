import { fetchPosts } from "../Api.fetch"
import { useEffect, useState } from 'react'
import SearchCss from '../css/Search.module.css'



export const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [result, setResul] = useState('')


    // console.log(searchValue)
    useEffect(() => {
        async function search() {
            const resp = await fetchPosts()
            const searchFilter = resp.data.posts.filter((p) => {
                return (
                    p.title.toLowerCase().includes(searchValue) ||
                    p.description.toLowerCase().includes(searchValue) ||
                    p.location.toLowerCase().includes(searchValue))
            })
            setResul(searchFilter)
        }
        search()
    }
        , [searchValue])

    return (<div className={SearchCss.searchandresult}>

        <form className={SearchCss.searchform} onSubmit={(event) => {
            event.preventDefault()


        }}>
        
            <div>
                <span class="material-symbols-outlined">
                    search
                </span>
                <input value={searchValue} className={SearchCss.searchinput} onChange={event => setSearchValue(event.target.value)}></input>

            </div>
        </form>

        <div className={SearchCss.searchresults}>
            {
                result ? result.map(post => {
                    return (
                        <div className={SearchCss.post} key={post._id} >
                            <div className={SearchCss.header}>{post.title}</div>
                            <div className={SearchCss.description}>{post.description}</div>
                            <div className={SearchCss.priceuser}>
                                <div className={SearchCss.user}>{post.author.username}</div>
                                <div className={SearchCss.location}>{(post.location === '[On Request]' || !post.location) ? null : post.location}</div>
                                <div className={SearchCss.price}>{post.price}</div>

                            </div>
                        </div>)
                }) : null
            }
        </div>
    </div>

    )

}

export default Search
