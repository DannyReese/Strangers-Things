import { editPost, deletePost } from "../Api.fetch";
import { Link } from "react-router-dom";
import EditCss from '../css/Edit.module.css'

export const Edit = ({
    setChange,
    postId,
    title,
    description,
    price,
    location,
    setTitle,
    setDescription,
    setPrice,
    setLocation }) => {

    return (<div className={EditCss.page}>
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

            <div className={EditCss.priceloc}>

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
            <div className={EditCss.links}>
                <Link to='/welcome' onMouseDown={() => {
                    editPost(
                        postId,
                        title,
                        description,
                        price,
                        location
                    )
                    setChange(Math.random() * 1)
                }} className={EditCss.SubmitChange}> Submit Changes</Link>

                <Link to='/welcome' onMouseDown={() => {
                    deletePost(postId)
                    setChange(Math.random() * 1)
                }} className={EditCss.Delete}>Delete</Link>
            </div>
        </form>
</div>
    )
}






export default Edit