import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto space-y-16 py-12">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to <span className="text-emerald-600">MyBlog</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Discover and share interesting articles from writers around the world.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/blogs"
            className="bg-emerald-600 text-white py-3 px-6 rounded-sm hover:bg-emerald-700 transition-colors font-medium"
          >
            Browse Blogs
          </Link>
          <Link
            href="/register"
            className="border border-emerald-600 text-emerald-600 py-3 px-6 rounded-sm hover:bg-emerald-50 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="border border-gray-200 rounded p-6 space-y-2">
          <h2 className="text-xl font-semibold">Read</h2>
          <p className="text-gray-500">
            Browse a growing collection of blogs on any topic you enjoy.
          </p>
        </div>
        <div className="border border-gray-200 rounded p-6 space-y-2">
          <h2 className="text-xl font-semibold">Write</h2>
          <p className="text-gray-500">
            Share your ideas by publishing your own blog posts with a single
            click.
          </p>
        </div>
        <div className="border border-gray-200 rounded p-6 space-y-2">
          <h2 className="text-xl font-semibold">Connect</h2>
          <p className="text-gray-500">
            Discover writers, follow their work, and like the posts you love.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
