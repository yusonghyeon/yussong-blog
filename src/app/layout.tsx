import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={
          "flex justify-center min-h-screen antialiased font-[family-name:var(--font-geist-sans)]"
        }
      >
        <div className="w-full max-w-3xl flex flex-col min-h-screen px-4">
          <Header />
          <main className="flex-grow py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
