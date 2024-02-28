import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from "../lib/utils"

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : ['400','500','600','700'],
  variable : '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Image.AI",
  description: "AI-Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: {colorPrimary : '#624cf5'}}}publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} >
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
        </body>
    </html>
    </ClerkProvider>

  );
}
