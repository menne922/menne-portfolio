import '../styles/globals.css';
export const metadata = { title: 'Menne Portfolio', description: 'Senior Full Stack Engineer Portfolio' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}