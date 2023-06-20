import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";

export const metadata = {
  title: "Laksamana 2023",
  description: "Lomba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-red-400">{children}</body>
    </html>
  );
}
