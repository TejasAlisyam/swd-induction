import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Album = () => {
  const [albums, setAlbum] = useState([]);
  useEffect(() => {
    loadAlbums();
  }, []);
  const { id } = useParams();
  const loadAlbums = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setAlbum(result.data);
    console.log(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) =>
              album.userId == id ? (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{album.title} </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Album;
