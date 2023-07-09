import "@/styles/globals.css";
import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "Laksamana 2023",
  description: "Lomba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientComponent>{children}</ClientComponent>
      </body>
    </html>
  );
}
