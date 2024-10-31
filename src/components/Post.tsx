import React from "react";
import DevOps from "./DevOps";
import DevSecOps from "./DevSecOps";
import Conclusion from "./Conclusion";

const Post: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 max-w-2xl w-full">
        <h1 className="text-6xl font-bold mb-2 text-center">DevSecOps Blog</h1>
        {/* <div className="p-5 text-left"> */}
        <p className="text-gray-900 text-lg">
          To understand what DevSecOps is, let's first break down DevOps.
        </p>
        <DevOps />
        <DevSecOps />
        <Conclusion />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Post;
