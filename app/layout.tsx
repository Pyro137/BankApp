import type { Metadata } from "next";
import { Inter,IBM_Plex_Sans} from "next/font/google";


const inter =Inter({
  subsets: ["latin"],
  variable:'--font-inter',
  weight: ["400"],
})
const ibmPlexSans =IBM_Plex_Sans({
  subsets: ["latin"],
  variable:'--font-ibm-plex-sans',
  weight: ["400","700"],
})
export const metadata: Metadata = {
  title: "Horizon",
  description: "Modern Bank App",
  icons: ["/icons/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
