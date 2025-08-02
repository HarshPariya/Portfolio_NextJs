import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Harsh's Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
