import { search } from "../Api.fetch"
import { useState } from 'react'
import SearchCss from '../css/Search.module.css'


export const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [result, setResul] = useState('')

    console.log(searchValue)

    const searchResult = async () => {
        const resp = await search(searchValue)
        console.log(resp)
        setResul(resp)

    }

    return (<div className={SearchCss.searchandresult}>

        <form className={SearchCss.searchform} onSubmit={(event) => {
            event.preventDefault()
            searchResult()

        }}>
            <label>Search</label>
            <div>
                <input value={searchValue} className={SearchCss.searchinput} onChange={event => setSearchValue(event.target.value)}></input>
                <button className={SearchCss.button}>Search</button>
            </div>
        </form>

        <div id='search-results'>
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
