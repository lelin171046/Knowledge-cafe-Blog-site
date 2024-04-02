

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="text-center  text-2xl font-semibold border-2 border-red-500">
            {
                <h1>{title}</h1>
            }
        </div>
    );
};

export default Bookmark;