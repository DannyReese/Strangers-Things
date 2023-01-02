
import Title from "../components/Title"
import Message from "../components/Message"
import MessagePageCss from "../css/MessagePage.module.css"


const MessagePage = ({
    othersUsername,
    title,
    location,
    price,
    description,
    postId, }) => {


    return (
        <div className={MessagePageCss.page}>
            <Title />
            <div className={MessagePageCss.messagepage}>
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
      
    )
}
export default MessagePage

