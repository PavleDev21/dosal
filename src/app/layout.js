import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://dosal.rs'),
  title: "Dosal",
  description: "Luksuzne porcelanske ploče za svaki prostor – elegancija i dugotrajnost u jednom.",
  openGraph: {
    images: '/og-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        {children}
      </body>
    </html>
  );
}
