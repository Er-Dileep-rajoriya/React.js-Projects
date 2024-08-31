import React, { useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
    },
    {
      id: 2,
      title: "Another Blog Post",
      content: "Here is some more content for the second post.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    setBlogs([{ id: blogs.length + 1, title, content }, ...blogs]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Form for submitting a blog post */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Submit Your Article
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter your title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                placeholder="Enter your content here"
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Blog list */}
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700">{blog.content}</p>
              </div>
              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-500 hover:text-red-700 font-semibold ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
