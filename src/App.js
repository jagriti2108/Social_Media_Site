import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Posts from './components/Posts';
import login from './Pages/login';
function App() {
  const [posts, setPosts] = useState([
    {
    username: "_._.bliss._",
    caption: "Just good vibes",
    imageUrl:"https://source.unsplash.com/random/?img=1"
    },
    {
      username: "_._.bliss",
      caption: "Just good vibes",
      imageUrl:"https://source.unsplash.com/random/?img=1"
    },
  ]);
  return (
    <>
    <Navbar/>
    <Stories/>
    
    {
      posts.map(post => (
        <Posts key={post.username} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
      )) 
    }

    <Posts username="_._.bliss._" caption="Just good vibes" imageUrl="https://source.unsplash.com/random/?img=1"/>
    <Posts username="jatin_kshatriya" caption="I wish" imageUrl="https://source.unsplash.com/random/?img=2"/>
    <Posts username="scribbledstories" caption="some stories never end" imageUrl="https://source.unsplash.com/random/?img=3"/>
    </>
  );
}

export default App;
