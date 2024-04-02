// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs);
    return (
        <div className="justify-start md:w-2/3 text-4xl font-bold">
            <h2>Blogs length:{blogs.length} </h2>
            {
                blogs.map((blog, Idx) => <Blog key={Idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;