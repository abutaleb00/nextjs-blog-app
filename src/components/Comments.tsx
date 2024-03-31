import React from "react";

const Comments = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        <li className="bg-slate-300 mb-4 p-2 rounded-md">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-2">Jone Doe</div>
            <div className="text-gray-500">12 Nov 2024</div>
          </div>
          <p className="text-black">Welcome to awosome commnet section</p>
        </li>
      </ul>
    </div>
  );
};
export default Comments;
