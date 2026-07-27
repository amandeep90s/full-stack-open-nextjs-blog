const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto text-sm flex items-center justify-center py-3 px-6 text-gray-400">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
