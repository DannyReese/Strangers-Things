import { useState } from "react"
import { creatPost } from '../Api.fetch'
import '../css/CreatePost.css'

const CreatePost = ({ setChange, token, setToken }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    return (<div className="create-post-container">

        <form className="create-post" onChange={() => {
            const currentToken = localStorage.getItem('token')
            setToken(currentToken)
        }} onSubmit={async (event) => {

            event.preventDefault()
            try {
                const resp = await creatPost({ title, description, price, token })

                setChange(resp.data.post._id)


            } catch (e) {
                console.log(e)

            }finally{
                setTitle('')
                    setDescription('')
                    setPrice('')
            }
        }}>
            <input className="item-input" value={title} placeholder="Item.." onChange={event => setTitle(event.target.value)}></input>
            <br></br>
            <textarea className="item-des" value={description} placeholder="Description.." onChange={event => setDescription(event.target.value)}></textarea>
            <br></br>
            <input className="item-price" value={price} placeholder="Price.." onChange={event => setPrice(`${event.target.value}`)} ></input>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default CreatePost