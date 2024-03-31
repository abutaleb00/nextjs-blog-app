"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { commentData } from "@/types/blog";

const inputClass =
  "w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

const FormComments = () => {
  const [commentData, setCommentData] = useState<commentData>({
    comment: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };
  const submitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("comment", commentData);
  };
  return (
    <form className="max-w-4xl mx-auto py-2" onSubmit={submitData}>
      <div className="mt-2">
        <label className="font-blod text-gray-600 mb-3" htmlFor="comment">Add Comment</label>
        <input
          type="text"
          className={inputClass}
          placeholder="Enter comments"
          name="comment"
          value={commentData.comment}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 rounded-md px-3 py-1 mt-2 text-white hover:bg-blue-600"
      >
        Submit Comment
      </button>
    </form>
  );
};
export default FormComments;
