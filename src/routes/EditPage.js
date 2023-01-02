import {Title} from "../components/Title"
import {Edit} from "../components/Edit"
import EditCss from "../css/EditPage.module.css"

const EditPage = ({
    setChange,
    postId,
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    location,
    setLocation }) => {

    return (
        <div>
            {<Title />}
            <div className={EditCss.homecontainer}>
                {<Edit
                    setChange={setChange}
                    postId={postId}
                    title={title}
                    setTitle={setTitle}
                    price={price}
                    setPrice={setPrice}
                    description={description}
                    setDescription={setDescription}
                    location={location}
                    setLocation={setLocation}
                />}
            </div>
        </div>
    )
}

export default EditPage