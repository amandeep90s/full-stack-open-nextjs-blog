import { createBlog } from "@/app/actions/blog";

const NewBlog = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium">Create New Blog</h1>

      <form
        action={createBlog}
        className="space-y-4 border border-gray-300 p-4 rounded"
      >
        <div>
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block mb-2">
            URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
