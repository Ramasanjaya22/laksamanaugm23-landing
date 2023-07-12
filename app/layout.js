import "@/styles/globals.css";
import ClientComponent from "./ClientComponent";
import 'react-responsive-modal/styles.css';
export const metadata = {
  title: "Laksamana 2023",
  description: "Lomba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-lime-300">
        <ClientComponent>{children}</ClientComponent>
      </body>
    </html>
  );
}
