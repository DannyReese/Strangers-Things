import { editPost } from "../Api.fetch";
import '../css/Edit.css'

const Edit = ({ setChange, postId, title, description, price, location, setTitle, setDescription, setPrice, setLocation }) => {

    return (<div>
        <form>
            <input id='title' value={title} placeholder="item" type='text' onChange={(event) => setTitle(event.target.value)}></input>

            <textarea id='description' value={description} placeholder='descripton' type='text' onChange={(event) => setDescription(event.target.value)}></textarea>
            <div id='price-loc'>
                <input id='location' value={location} placeholder="location" type='text' onChange={(event) => setLocation(event.target.value)}></input>

                <input id='price' value={price} placeholder='price' type='text' onChange={(event) => setPrice(event.target.value)}></input>
            </div>


            <button onMouseDown={() => {

                editPost(postId, title, description, price, location).then(setChange(false))

            }}>Submit Changes</button>
        </form>
    </div>
    )
}

export default Edit