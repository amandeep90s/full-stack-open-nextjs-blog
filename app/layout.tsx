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
          <Link
            href="/"
            className="text-emerald-500 px-4 hover:text-emerald-300"
          >
            Home
          </Link>
          {" | "}
          <Link
            href="/blogs"
            className="text-emerald-500 px-4 hover:text-emerald-300"
          >
            Blogs
          </Link>
          {" | "}
          <Link
            href="/users"
            className="text-emerald-500 px-4 hover:text-emerald-300"
          >
            Users
          </Link>
          {" | "}
          <Link
            href="/blogs/new"
            className="text-emerald-500 px-4 hover:text-emerald-300"
          >
            Add New
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
