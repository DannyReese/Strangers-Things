import Title from "../components/Title"
import Post from "../components/Post"
import CreatePost from "../components/CreatePost"
import CreateCss from "../css/Create.module.css"



const Create = () => {
    return (<div className={CreateCss.createpostcontainer}>
        {<Title />}
        <div className={CreateCss.createposts}>
            <div className={CreateCss.posts}>
                {<Post />}
            </div>
            <div className={CreateCss.textdiv}>
                {<CreatePost />}
            </div>
        </div>
    </div>
    )
}

export default Create