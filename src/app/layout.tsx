import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.scss";

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
  metadataBase: new URL("https://www.zeyinart.com"),
  title: {
    default: "Sinan Bingol Coldwell Banker Gayrimenkul Danismani",
    template: `%s | Sinan Bingol Coldwell Banker Gayrimenkul Danismani`,
  },
  description:
    "Sinan Bingöl, Coldwell Banker Gayrimenkul Danışmanı, uzman gayrimenkul danışmanlığı ile ev, iş yeri ve yatırım fırsatlarında profesyonel çözümler sunuyor. Doğru yatırımlar ve güvenilir hizmet anlayışıyla hayallerinizi gerçeğe dönüştürmeye yardımcı oluyor. İstanbul'da ev alım satımı ve yatırım tavsiyeleri için yanınızda.",
  verification: {
    google: "google-site-verification=123243",
  },
  applicationName: "Coldwell Banker",
  keywords: [
    "Sinan Bingol",
    "Coldwell Banker",
    "Gayrimenkul",
    "Gayrimenkul Danismani",
    "Yatirim",
  ],
  creator: "Yilmaz Bingol",
  publisher: "Yilmaz Bingol",
  openGraph: {
    url: "https://dminhvu.com",
    type: "website",
    title:
      "Sinan Bingöl - Coldwell Banker Gayrimenkul Danışmanı | Uzman Gayrimenkul Çözümleri",
    description:
      "Sinan Bingöl, Coldwell Banker Gayrimenkul Danışmanı, İstanbul’da ev alım satımı ve yatırım fırsatları için profesyonel gayrimenkul çözümleri sunuyor. Doğru yatırımlar ile hayallerinizi gerçeğe dönüştürmek için yanınızda.",
    images: [
      {
        url: "https://dminhvu.com/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sinan Bingol",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    // twitter username of Sinan Bingol
    site: "@dminhvu02",
    creator: "Yilmaz Bingol",
    title:
      "Sinan Bingöl | Coldwell Banker Gayrimenkul Danışmanı - Doğru Yatırımlarla Hayallerinizi Gerçekleştirin",
    description:
      "Sinan Bingöl, Coldwell Banker Gayrimenkul Danışmanı olarak İstanbul’da ev alım satım ve yatırım fırsatları için güvenilir çözümler sunuyor. Hayalinizdeki eve bir adım daha yaklaşın!",
    images: [
      {
        url: `https://ik.imagekit.io/dminhvu/assets/thumbnail.png?tr=f-png`,
        width: 1024,
        height: 576,
        alt: "Sinan Bingol",
      },
    ],
  },
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
        <Header />
        {children}
      </body>
    </html>
  );
}
