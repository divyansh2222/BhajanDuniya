import React, { useState } from 'react';

function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment(""); // Clear input after submission
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">{comments.length} टिप्पणी</h3>
      
      {/* Comment Input Section */}
      <div className="flex items-start space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          className="flex-grow border border-gray-300 rounded-md p-2 resize-none focus:ring-2 focus:ring-blue-400"
          rows="2"
          placeholder="कोई टिप्पणी जोड़ें..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      {/* Post Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 disabled:opacity-50 w-full sm:w-auto"
        onClick={handleCommentSubmit}
        disabled={!comment.trim()}
      >
        पोस्ट करें
      </button>

      {/* Display Comments */}
      <div className="mt-4">
        {comments.length > 0 && <h4 className="font-semibold">सभी टिप्पणियाँ:</h4>}
        {comments.map((cmt, index) => (
          <div key={index} className="p-2 border-b border-gray-200 mt-2">
            <p>{cmt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
