import Navbar from "@/app/components/Navbar";
import Notification from "@/app/components/Notification";
import { NotificationProvider } from "@/app/components/NotificationContext";
import AuthSessionProvider from "@/app/components/SessionProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen p-4">
        <AuthSessionProvider>
          <NotificationProvider>
            <Navbar />
            <Notification />
            {children}
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
