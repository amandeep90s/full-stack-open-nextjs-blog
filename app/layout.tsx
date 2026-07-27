import Navbar from "@/app/components/Navbar";
import Notification from "@/app/components/Notification";
import { NotificationProvider } from "@/app/components/NotificationContext";
import AuthSessionProvider from "@/app/components/SessionProvider";
import Footer from "./components/Footer";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyBlog App",
  description: "A simple blogs application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthSessionProvider>
          <NotificationProvider>
            <Navbar />
            <div className="grow p-4">
              <Notification />
              {children}
            </div>
            <Footer />
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
