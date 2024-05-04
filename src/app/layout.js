import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tickmark",
  description: "Welcome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* user provider is for authetication (login /logout) component given by Auth0  */}
      <UserProvider>
      <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
