import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://botto.is"),
  title: {
    default: "Botto Capital — Operator-led family office",
    template: "%s · Botto Capital",
  },
  description:
    "Operator-led family office building and backing category-defining tech companies across Latin America. Founded by Angel Celis Botto and Stivens Gómez Botto.",
  keywords: [
    "Botto Capital",
    "Family Office",
    "Venture Capital",
    "LatAm",
    "Angel Botto",
    "Stivens Gómez Botto",
    "Liftit",
  ],
  authors: [{ name: "Angel Celis Botto" }, { name: "Stivens Gómez Botto" }],
  openGraph: {
    type: "website",
    title: "Botto Capital",
    description: "Operator-led family office building the future from Latin America.",
    url: "https://botto.is",
    siteName: "Botto Capital",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bottico",
    creator: "@bottico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050010",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          defer
          src="https://analytics.botto.is/script.js"
          data-website-id="3e293261-1640-480e-87b3-83aeeee70a92"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
