import "./globals.css";

//static meta data
export const metadata = {
  title: "IBM",
  description: "This is ibm site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
