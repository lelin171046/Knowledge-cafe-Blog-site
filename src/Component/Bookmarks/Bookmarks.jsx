import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className="bg-slate-400 rounded-xl md:w-1/3">
            <h3>Total Reading Time{readTime}</h3>
            <h2 className="text-3xl">Bookmarked Bolgs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;