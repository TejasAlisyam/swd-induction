import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "500",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const Post = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    loadPosts();
  }, []);
  const { id } = useParams();
  const loadPosts = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPost(result.data);
    console.log(result.data);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post, index) =>
        post.userId == id ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              maxWidth: 300,
              borderRadius: 1,
            }}
          >
            <Item>
              {index + 1}.<h3>{post.title}</h3> <p> {post.body}</p>
              <Link to={`/posts/${post.id}`}>Comments</Link>{" "}
            </Item>
          </Box>
        ) : null
      )}
    </div>
  );
};

export default Post;
