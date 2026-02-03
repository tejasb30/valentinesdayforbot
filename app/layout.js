import "./globals.css";

export const metadata = {
  title: "I love you Anoushka ❤️😘",
  description: "Happy Valentines Day!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}