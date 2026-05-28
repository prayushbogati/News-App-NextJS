import "../globals.css";

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="container w-7xl mx-auto my-10 px-15">
          {children}
        </div>
      </body>
    </html>
  );
}
