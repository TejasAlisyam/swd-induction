import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Avatar, Grid, Paper } from "@mui/material";

const Comment = () => {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    loadComments();
  }, []);
  const { id } = useParams();
  const loadComments = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComment(result.data);
    console.log(result.data);
  };
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>
      {comments.map((comment, index) =>
        comment.postId == id ? (
          <div>
            <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="Remy Sharp" />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    {comment.name}
                  </h4>
                  <h6 style={{ margin: 0, textAlign: "left" }}>
                    {comment.email}
                  </h6>
                  <p style={{ textAlign: "left" }}>{comment.body}</p>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Comment;

// {comments.map((comment, index) =>
//   comment.postId == id ? (
//     <div>
//       <h3>NAME :{comment.name}</h3>
//       <h3>EMAIL :{comment.email}</h3>
//       <h3>BODY :{comment.body}</h3>
//     </div>
//   ) : null
