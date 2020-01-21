// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  const [commentStat, setCommentStat] = useState(props.comments);
  return (
    <div>
      {props.comments.map((item, index) => (
        <Comment key={props.postId.slice(0, index + 1)} comment={item} />
      ))}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
