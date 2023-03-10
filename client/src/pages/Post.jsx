import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then(response => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then(response => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3001/comments", {
        commentBody: newComment,
        PostId: id,
      })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment("");
      });
  };
  return (
    <div className="postPage">
      <div className="leftSide">
        <div
          className="post"
          id="individual"
        >
          <div className="title">{postObject.title}</div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={event => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => (
            <div
              key={key}
              className="comment"
            >
              {comment.commentBody}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
