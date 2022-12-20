
import './css/App.css';
import React from 'react';
import { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Post from './components/Post'
import Title from './components/Title'
import CreatePost from './components/CreatePost';
import CreateAccount from './components/CreateAccount';

import Profile from './components/Profile';
import Edit from './components/Edit'
import Search from './components/Search';
import Message from './components/Message'




const App = () => {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [postId, setPostId] = useState('')
  const [change, setChange] = useState('')


  return (
    <HashRouter>

      <div id='container'>

        <Route exact path='/'>
          <Search location={location} />
        </Route>

        <Route path='/home'>
          <div>
            {<Title />}
            <div className='home-container'>
              {<Post change={change}
                setLocation={setLocation}
                setTitle={setTitle}
                setPrice={setPrice}
                setDescription={setDescription}
                setPostId={setPostId}
              />}
              {<Profile
                setLocation={setLocation}
                setDescription={setDescription}
                setPrice={setPrice}
                setTitle={setTitle}
                setPostId={setPostId} />}
            </div>
          </div>
        </Route>

        <Route path="/message">
          {<Title />}
          <div id='message-page'>

            <div>
            {<Post change={change}
                setLocation={setLocation}
                setTitle={setTitle}
                setPrice={setPrice}
                setDescription={setDescription}
                setPostId={setPostId}
              />}
            </div>
            <div id='message-div'>
              {<Message title={title}
                location={location}
                price={price}
                description={description} 
                postId={postId}
                />}
              
            </div>
          </div>
        </Route>

        <Route path="/edit">
          <div>
            {<Title />}

            <div className='home-container'>
            {<Post change={change}
                setLocation={setLocation}
                setTitle={setTitle}
                setPrice={setPrice}
                setDescription={setDescription}
                setPostId={setPostId}
              />}

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
            {<Post change={change}
              setLocation={setLocation}
              setTitle={setTitle}
              setPrice={setPrice}
              setPostId={setPostId}
            />}
            <div className='text-div'>
              {<CreatePost setChange={setChange} />}
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
