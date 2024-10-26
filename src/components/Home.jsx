import { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'; // Importing icons for Like, Comment, and Share actions
import { BiChevronDown } from 'react-icons/bi'; // Dropdown icon

const Home = () => {
  // State to hold posts data
  const [posts, setPosts] = useState([
    { id: 1, user: 'Yoel Adamson-Brown', content: 'New update on Using football to teach life skills to children.', date: '11th Dec 2023' },
    { id: 2, user: 'Yoel Adamson-Brown', content: 'Work on the organization demo with Sofia.', date: '11th Dec 2023' },
    { id: 3, user: 'Yoel Adamson-Brown', content: 'Teaching football to kids for skills improvement.', date: '11th Dec 2023' },
    { id: 4, user: 'Yoel Adamson-Brown', content: 'Skills enhancement workshop held on 4th Dec.', date: '11th Dec 2023' },
    { id: 5, user: 'Yoel Adamson-Brown', content: 'Final reporting session for life skills using football.', date: '11th Dec 2023' }
  ]);

  // State for new post content in the text area
  const [newPostContent, setNewPostContent] = useState('');
  
  // State to manage dropdown visibility for post creation options
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to handle submission of new posts
  const handlePostSubmit = () => {
    if (newPostContent) {
      const newPost = {
        id: posts.length + 1, // Unique post ID
        user: 'Yoel Adamson-Brown', // Simulating a logged-in user
        content: newPostContent,
        date: 'Today' // Current date for the new post
      };
      setPosts([newPost, ...posts]); // Add new post to the start of the posts array
      setNewPostContent(''); // Reset the text area
    }
  };

  return (
    <div className="z-10 w-full rounded-lg bg-gradient-to-r from-blue-100 via-green-100 to-red-100 h-[calc(100vh-92px)] shadow-lg p-4 space-y-4 text-[#333] overflow-y-auto">
      
      {/* Create Post Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-gray-300">
        <div className="flex items-center space-x-2 mb-2">
          {/* Avatar of the user */}
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
              </div>
            </div>
          </div>

          {/* Textarea for writing new posts */}
          <div className="flex-grow">
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 resize-none"
              rows="3"
              placeholder="What's on your mind?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button and Dropdown for Post Options */}
        <div className="flex justify-between">
          <button
            onClick={handlePostSubmit}
            className="bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {/* Dropdown for additional post options */}
          <div className="relative">
            <button
              className="flex items-center text-gray-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Post or Create <BiChevronDown className={`ml-1 ${dropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-1 p-2 border border-gray-300">
                <ul>
                  <li className="py-1 hover:bg-gray-200 cursor-pointer">Project</li>
                  <li className="py-1 hover:bg-gray-200 cursor-pointer">Board</li>
                  <li className="py-1 hover:bg-gray-200 cursor-pointer">Contact</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsfeed Section - Displaying all posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-4 border border-gray-300">
            {/* Post Header - Avatar and user info */}
            <div className="flex items-center mb-2">
              <div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-blue-300 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">{post.user}</h3>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-2">{post.content}</p>

            {/* Post Interaction Buttons - Like, Comment, Share */}
            <div className="flex space-x-4 text-gray-600">
              <button className="flex items-center space-x-1 hover:text-red-600">
                <FaHeart />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <FaComment />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-600">
                <FaShare />
                <span>Share</span>
              </button>
            </div>

            {/* Comment Section - Input field for adding comments */}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition">
                Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
