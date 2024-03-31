import React from "react";
import Comments from "@/components/Comments";
import FormComments from "@/components/form-comments";

const BlogDetails = () => {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <h1 className="text-3xl font-bold">Blog Post</h1>
      <p>Written by: jone doe</p>
      <div className="mt-4">
        <p>Loren ipsome textttt</p>
      </div>
      <Comments />
      <FormComments />
    </div>
  );
};
export default BlogDetails;
