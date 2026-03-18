import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <header className="border-b">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold">{siteConfig.business.name}</a>
            <nav className="hidden gap-6 md:flex">
              {siteConfig.navigation.map((item: { label: string; href: string }) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-black">{item.label}</a>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-gray-50 px-6 py-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.business.name}
        </footer>
      </body>
    </html>
  );
}
