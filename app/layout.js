import "@/styles/globals.css";
import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "Laksamana 2023",
  description: "Lomba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-200">
        <ClientComponent>{children}</ClientComponent>
      </body>
    </html>
  );
}
