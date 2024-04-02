
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  
  const handleMarkRead = time =>{
   const newReadTime =  readTime + time;
   setReadTime(newReadTime);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex justify-between max-w-7xl mx-auto'>
        <div className="border-2 border-red-500"><Blogs 
        handleMarkRead={handleMarkRead}
        handleBookmarks={handleBookmarks}></Blogs></div>
        <div className="border-2 border-blue-500"><Bookmarks readTime={readTime} bookmarks={bookmarks} ></Bookmarks></div>
      </div>

    </>
  )
}

export default App
