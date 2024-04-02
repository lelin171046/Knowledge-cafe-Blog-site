// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleMarkRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs);
    return (
        <div className="justify-start md:w-2/3 text-4xl font-bold max-w-7xl mx-auto">
            <h2>Blogs length:{blogs.length} </h2>
            {
                blogs.map((blog, Idx) => <Blog handleMarkRead={handleMarkRead} handleBookmarks={handleBookmarks} key={Idx} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleMarkRead:  PropTypes.func
}

export default Blogs;