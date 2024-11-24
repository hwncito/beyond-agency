import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/jost';

export const metadata: Metadata = {
  title: "Explore & Beyond",
  description: "Luxury travel agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
