import {Title} from "../components/Title"
import {Edit} from "../components/Edit"

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
            <div className='home-container'>
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