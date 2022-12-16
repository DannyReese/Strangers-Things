
import './css/App.css';
import React from 'react';

import { useState } from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Post from './components/Post'
import Title from './components/Title'
import CreatePost from './components/CreatePost';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Profile from './components/Profile';
import Edit from './components/Edit'


const App = () => {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [postId, setPostId] = useState('')
  const [change, setChange] = useState('')
  const [token, setToken] = useState('')
  
  return (
    <HashRouter>

      <div id='container'>

        <Route exact path='/'>
          <div>
            {<Login setToken={setToken} />}
          </div>
        </Route>

        <Route path='/home'>
          <div>
            {<Title />}
            <div className='home-container'>
              {<Post change={change} />}
              {<Profile
                setLocation={setLocation}
                setDescription={setDescription}
                setPrice={setPrice}
                setTitle={setTitle}
                setPostId={setPostId} />}
            </div>
          </div>
        </Route>

        <Route path="/edit">
          <div>
            {<Title />}

            <div className='home-container'>
              {<Post change={change} />}
           
              {<Edit
                setChange={setChange}
                postId={postId}
                title={title} setTitle={setTitle}
                price={price} setPrice={setPrice}
                description={description} setDescription={setDescription}
                location={location} setLocation={setLocation}
              />}
            </div>
          </div>
        </Route>

        <Route path='/create_post'>
          {<Title />}
          <div className="create-posts">
            {<Post change={change} />}
            <div className='text-div'>
              {<CreatePost setToken={setToken} token={token} setChange={setChange} />}
            </div>
          </div>
        </Route>

        <Route path='/create_account'>
          <div>
            {<CreateAccount />}
          </div>
        </Route>

      </div>

    </HashRouter>
  )
}
export default App;
