

import React from 'react';
import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import CreateAccount from './components/CreateAccount';
import EditPage from './routes/EditPage'
import LoggedOut from './routes/LoggedOut'
import Welcome from './routes/Welcome'
import MessagePage from './routes/MessagePage';
import UserMessages from './routes/UserMessages';
import Home from './routes/Home';
import Create from './routes/Create';
import SentMessages from './routes/SentMessages';

const App = () => {

  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [postId, setPostId] = useState('')
  const [change, setChange] = useState('')
  const [username, setUsername] = useState('')
  const [othersUsername, setOthersUsername] = useState('')


  return (<div >
    <HashRouter>
      <Switch>

        <Route exact path='/'>
          <LoggedOut />
        </Route>

        <Route path='/welcome'>

          {<Welcome
            change={change}
            setUsername={setUsername}
            setLocation={setLocation}
            setTitle={setTitle}
            setPrice={setPrice}
            setDescription={setDescription}
            setPostId={setPostId} />}

        </Route>

        <Route path='/home'>

          {<Home
            othersUsername={othersUsername}
            setOthersUsername={setOthersUsername}
            setLocation={setLocation}
            setTitle={setTitle}
            setPrice={setPrice}
            setDescription={setDescription}
            setPostId={setPostId}
            username={username} />}

        </Route>

        <Route path="/message">

          {<MessagePage
            othersUsername={othersUsername}
            title={title}
            location={location}
            price={price}
            description={description}
            postId={postId}
          />}

        </Route>

        <Route path='/users-messages'>

          {<UserMessages username={username} />}

        </Route>

        <Route path='/sent-messages'>
          {<SentMessages username={username} />}
        </Route>

        <Route path="/edit">

          {<EditPage
            setChange={setChange}
            postId={postId}
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            location={location}
            setLocation={setLocation} />}


        </Route>

        <Route path='/create_post'>

          {<Create />}

        </Route>

        <Route path='/create_account'>

          {<CreateAccount />}

        </Route>

      </Switch>
    </HashRouter>
  </div>)
}
export default App;












