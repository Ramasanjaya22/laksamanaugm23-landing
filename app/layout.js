import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import ClientComponent from "./ClientComponent";
import "react-responsive-modal/styles.css";

export const metadata = {
  title: "Laksamana UGM 2023",
  description:
    "Laksamana UGM merupakan sebuah rangkaian acara yang dilaksanakan oleh Korps Mahasiswa Komunikasi UGM. Laksamana digelar untuk menyalurkan ide dan mengembangkan potensi siswa siswi SMA/ Sederajat di seluruh Indonesia dalam bidang Ilmu Komunikasi melalui berbagai bentuk kompetisi, baik secara lisan maupun tertulis.",
  openGraph: {
    title: "Laksamana UGM 2023",
    canonical: '/',
    description:
      "Laksamana UGM merupakan sebuah rangkaian acara yang dilaksanakan oleh Korps Mahasiswa Komunikasi UGM. Laksamana digelar untuk menyalurkan ide dan mengembangkan potensi siswa siswi SMA/ Sederajat di seluruh Indonesia dalam bidang Ilmu Komunikasi melalui berbagai bentuk kompetisi, baik secara lisan maupun tertulis.",
    url: "https://www.laksamanaugm.com/",
    referrer: 'origin-when-cross-origin',
    keywords: ['Lomba', 'UGM', 'laksamana ugm','lomba kampus','laksamana'],
    siteName: "Laksamana UGM",
    images: [
      {
        title: "Laksamana UGM 2023",
        url: "/logo-laksamana.png",
        alt: "Thumbnail laksamana",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-lime-300">
        <ClientComponent>
          {children}
          <Analytics />
        </ClientComponent>
      </body>
    </html>
  );
}
