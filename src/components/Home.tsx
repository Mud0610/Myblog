import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Post />
    </div>
  );
};

export default Home;
