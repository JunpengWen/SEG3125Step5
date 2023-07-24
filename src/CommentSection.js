import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, comment: 'This game is amazing!', rating: 4.5 },
    { id: 2, comment: 'Great storyline and graphics!', rating: 5 },
    { id: 3, comment: 'Highly recommended!', rating: 4.8 },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const randomRating = 5;
      setComments((prevComments) => [
        ...prevComments,
        { id: prevComments.length + 1, comment: newComment, rating: randomRating },
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="commentsection">
      <h2>Comments</h2>
      <form onSubmit={handleSubmitComment}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        ></textarea>
        <button type="submit" style={{ display: 'flex', justifyContent: 'center',textDecoration: 'none'}}>Submit</button>
      </form>
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>Rating: {comment.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentSection;
