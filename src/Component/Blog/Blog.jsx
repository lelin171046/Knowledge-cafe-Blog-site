import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, authorImg, postedDate, readingTime } = blog;
    console.log(blog);
    return (
        <div className='text-left mb-20'>
            <img src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between ml-6 border-2 border-red-500'>
               
                <div className='mb-8 flex text-left border-2 border-red-500 '>
                     <img className='w-16 border-2 border-gray-300 rounded-full' src={authorImg} alt="" />
                  <div className='mb-4'> 
                    <h3 className='text-xl '>{author}</h3>
                    <p className='text-sm'>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} Min read </span>
                    <button className="text-blue-500 ml-2"><FaRegBookmark /></button>
                </div>
            </div>
            <div className=""><h2 className='text-2xl'>{title}.</h2></div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}
export default Blog;