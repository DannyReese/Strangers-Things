
import './css/App.css';
import React from 'react';

import { useState, useEffect } from 'react';
import { fetchPosts } from "./Api.fetch"
import { HashRouter, Route } from 'react-router-dom';

import Post from './components/Post'
import Title from './components/Title'
import CreatePost from './components/CreatePost';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Profile from './components/Profile';


const App = () => {

  const [post, setPost] = useState([])
  const [isReady, setIsReady] = useState(false)
  const [change, setChange] = useState('')
  const [token, setToken] = useState('')




  const showPost = async () => {
    const result = await fetchPosts()
    setPost(result)
    setIsReady(true)
  }

  useEffect(() => { showPost() }, [change])

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
              {isReady ? <Post post={post} /> : null}
              {<Profile />}
            </div>
          </div>
        </Route>

        <Route path='/create_post'>
          {<Title />}
          <div className="create-posts">
            {isReady ? <Post post={post} /> : null}
            <div className='text-div'>
              {<CreatePost setToken={setToken} token={token} setChange={setChange} post={post} setPost={setPost} />}
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
