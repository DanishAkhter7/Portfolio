import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { profile } from "@/data/siteConfig";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
  keywords: ["portfolio", "developer", "javascript", "react", "next.js"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
