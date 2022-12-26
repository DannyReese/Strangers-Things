
import OtherUserPosts from "../components/OthersPost"
import Title from "../components/Title"
import Message from "../components/Message"
import MessagePageCss from "../css/MessagePage.module.css"


const MessagePage = ({
    othersUsername,
    setOthersUsername,
    setLocation,
    setTitle,
    setPrice,
    setDescription,
    setPostId,
    username,
    title,
    location,
    price,
    description,
    postId, }) => {


    return (
        <>
            <Title />
            <div className={MessagePageCss.messagepage}>

                <div>
                    <OtherUserPosts
                        setOthersUsername={setOthersUsername}
                        setLocation={setLocation}
                        setTitle={setTitle}
                        setPrice={setPrice}
                        setDescription={setDescription}
                        setPostId={setPostId}
                        username={username} />
                </div>


                <div className={MessagePageCss.messagediv}>
                    <Message
                        othersUsername={othersUsername}
                        title={title}
                        location={location}
                        price={price}
                        description={description}
                        postId={postId}
                    />
                </div>
            </div>
        </>
    )
}
export default MessagePage

