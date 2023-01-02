import Title from '../components/Title'
import Profile from '../components/Profile'
import WelcomeCss from '../css/Welcome.module.css'

const Welcome = ({
  change,
  setLocation,
  setTitle,
  setPrice,
  setDescription,
  setPostId,
  username,
  setUsername,
  setIsLoggedIn
}) => {

  return (<div className={WelcomeCss.WelcomeContainer}>

    {<Title />}

    <div className={WelcomeCss.homecontainer}>

      <Profile
        change={change}
        username={username}
        setUsername={setUsername}
        setIsLoggedIn={setIsLoggedIn}
        setLocation={setLocation}
        setDescription={setDescription}
        setPrice={setPrice}
        setTitle={setTitle}
        setPostId={setPostId} />

    </div>

  </div>
  )
}

export default Welcome
