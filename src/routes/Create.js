import Title from "../components/Title"
import Post from "../components/Post"
import CreatePost from "../components/CreatePost"
import CreateCss from "../css/Create.module.css"



const Create = () => {
    return (<>
        {<Title />}
        <div className={CreateCss.createposts}>
            {<Post />}
            <div className='text-div'>
                {<CreatePost  />}
            </div>
        </div>
    </>
    )
}

export default Create