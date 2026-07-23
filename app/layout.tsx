import Link from "next/link";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen p-4">
        <nav className="mb-4 border-b border-gray-300 pb-2">
          <Link href="/" className="text-blue-500 px-4 hover:text-white">
            Home
          </Link>
          {" | "}
          <Link href="/blogs" className="text-blue-500 px-4 hover:text-white">
            Blogs
          </Link>
          {" | "}
          <Link
            href="/blogs/new"
            className="text-blue-500 px-4 hover:text-white"
          >
            Add New
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
