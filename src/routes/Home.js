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


    return (<>
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
    </>
    )
}

export default Home