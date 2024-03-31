import React from "react";
import { posts } from "@/data/post";
import Link from "next/link";
const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blogs/${post.id}`}
            className="bg-white rounded-md p-3 shadow-md"
          >
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
