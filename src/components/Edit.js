import { editPost } from "../Api.fetch";
import { Link } from "react-router-dom";
import EditCss from '../css/Edit.module.css'

export const Edit = ({ postId, setChange, title, description, price, location, setTitle, setDescription, setPrice, setLocation }) => {

    return (<div>
        <form className={EditCss.editform}>
            <input className={EditCss.title}
                value={title}
                placeholder="item"
                type='text'
                onChange={(event) => setTitle(event.target.value)}
            >
            </input>


            <textarea className={EditCss.description}
                value={description}
                placeholder='descripton'
                type='text'
                onChange={(event) => setDescription(event.target.value)}
            >
            </textarea>

            <div id='price-loc'>

                <input className={EditCss.location}
                    value={location}
                    placeholder="location"
                    type='text'
                    onChange={(event) => setLocation(event.target.value)}
                >
                </input>

                <input className={EditCss.price}
                    value={price}
                    placeholder='price'
                    type='text'
                    onChange={(event) => setPrice(event.target.value)}
                >
                </input>

            </div>

            <Link to='/welcome'><button className={EditCss.subbutton} onMouseDown={() => {
                editPost(
                    postId,
                    title,
                    description,
                    price,
                    location
                ).then(setChange(Math.random() * 1))
            }}>Submit Changes</button></Link>
        </form>
    </div>
    )
}






export default Edit