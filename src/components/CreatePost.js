import { useState } from "react"
import { creatPost } from '../Api.fetch'
import { Link } from "react-router-dom"
import CreatePostCss from '../css/CreatePost.module.css'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')


    return (<div id='page'>
    <div className={CreatePostCss.createpostcontainer}>

        <form className={CreatePostCss.createpost} >
            <input className={CreatePostCss.iteminput}
                value={title}
                placeholder="Item.."
                onChange={event => setTitle(event.target.value)}
            >
            </input>

            <br></br>

            <textarea className={CreatePostCss.itemdes}
                value={description}
                placeholder="Description.."
                onChange={event => setDescription(event.target.value)}
            >
            </textarea>

            <br></br>

            <input className={CreatePostCss.itemprice}
                value={price} placeholder="Price.."
                onChange={event => setPrice(event.target.value)}
            >
            </input>

            <br></br>

            <input className={CreatePostCss.itemprice}
                value={location}
                placeholder="location.."
                onChange={event => setLocation(event.target.value)}
            >
            </input>

            <br></br>

            <Link to='/home' onMouseDown={async (event) => {

                event.preventDefault()
                try {
                    await creatPost({ title, description, price, location })
                   
                } catch (e) {
                    console.log(e)

                } finally {
                    setTitle('')
                    setDescription('')
                    setPrice('')
                    setLocation('')
                }
            }}>Submit</Link>

        </form>
    </div>
    </div>
    )
}

export default CreatePost