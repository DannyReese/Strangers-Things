import { useState } from "react"
import { creatPost } from '../Api.fetch'
import '../css/CreatePost.css'

const CreatePost = ({ setChange }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')


    return (<div className="create-post-container">

        <form className="create-post" onSubmit={async (event) => {

            event.preventDefault()
            try {
                const resp = await creatPost({ title, description, price, location })
                setChange(resp.data.post._id)
            } catch (e) {
                console.log(e)

            } finally {
                setTitle('')
                setDescription('')
                setPrice('')
                setLocation('')
            }
        }}>
            <input className="item-input"
                value={title}
                placeholder="Item.."
                onChange={event => setTitle(event.target.value)}
            >
            </input>

            <br></br>

            <textarea className="item-des"
                value={description}
                placeholder="Description.."
                onChange={event => setDescription(event.target.value)}
            >
            </textarea>

            <br></br>

            <input className="item-price"
                value={price} placeholder="Price.."
                onChange={event => setPrice(event.target.value)}
            >
            </input>

            <br></br>

            <input className="item-price"
                value={location}
                placeholder="location.."
                onChange={event => setLocation(event.target.value)}
            >
            </input>

            <br></br>

            <button>Submit</button>

        </form>
    </div>
    )
}

export default CreatePost