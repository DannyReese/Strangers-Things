import {Title} from "../components/Title"
import {OtherUserPosts} from "../components/OthersPost" 
import HomeCss from '../css/Home.module.css'


const Home = ({
  
    setOthersUsername,
    setLocation,
    setTitle,
    setPrice,
    setDescription,
    setPostId,
    username }) => {


    return (<div className={HomeCss.page}>
        <Title />
        <div className={HomeCss.homecontainer}>
            {<OtherUserPosts
                setOthersUsername={setOthersUsername}
                setLocation={setLocation}
                setTitle={setTitle}
                setPrice={setPrice}
                setDescription={setDescription}
                setPostId={setPostId}
                username={username} />}

        </div>
    </div>
    )
}

export default Home