/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import Bookmark from '../Bookmark/Bookmark'

// eslint-disable-next-line react/prop-types
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 rounded-xl">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center mt-3'>Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propsType ={
    bookmarks:PropTypes.object.isRequired,
    readingTime:PropTypes.number
}

export default Bookmarks;