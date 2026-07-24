const blogs = [
  {
    id: 1,
    title: "Blog 1",
    author: "Author 1",
    url: "http://example.com/blog1",
    likes: 10,
  },
  {
    id: 2,
    title: "Blog 2",
    author: "Author 2",
    url: "http://example.com/blog2",
    likes: 20,
  },
  {
    id: 3,
    title: "Blog 3",
    author: "Author 3",
    url: "http://example.com/blog3",
    likes: 30,
  },
];

let nextBlogId = 4;

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({
    id: nextBlogId++,
    title,
    author,
    url,
    likes: 0,
  });
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};
