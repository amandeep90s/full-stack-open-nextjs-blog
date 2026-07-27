const Footer = () => {
  return (
    <nav className="w-full border-t border-gray-300">
      <div className="container mx-auto text-sm flex items-center justify-center py-3 px-6">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </nav>
  );
};

export default Footer;
