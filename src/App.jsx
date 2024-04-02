
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='md:flex justify-between max-w-7xl mx-auto'>
        <div className="border-2 border-red-500"><Blogs></Blogs></div>
        <div className="border-2 border-blue-500"><Bookmarks></Bookmarks></div>
      </div>

    </>
  )
}

export default App
