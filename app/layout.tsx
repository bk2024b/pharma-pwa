import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PharmaLocator",
  description: "Trouve les pharmacies et médicaments proches de toi",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}