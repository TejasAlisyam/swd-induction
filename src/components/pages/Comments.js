import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Comment = () => {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    loadComments();
  }, []);
  const { id } = useParams();
  const loadComments = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setComment(result.data);
    console.log(result.data);
  };
  return (
    <div className="container">
      {comments.map((comment, index) =>
        album.userId == id ? <h1>{comment.name}</h1> : null
      )}
    </div>
  );
};

export default Comment;
