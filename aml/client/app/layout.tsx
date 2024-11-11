import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FacebookIcon, InstagramIcon, LibraryIcon, TwitterIcon } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <LibraryIcon className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold">MediaLib</span>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/media/add" className="text-sm font-medium hover:text-primary transition-colors">Add Media</a></li>
                  <li><a href="#" className="text-sm font-medium hover:text-primary transition-colors">Media</a></li>
                  <li><a href="/media/contact/contact.tsx" className="text-sm font-medium hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-[1200px]">
          {children}
        </main>
        <footer className="bg-secondary text-secondary-foreground mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 MediaLib. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary transition-colors"><InstagramIcon className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
