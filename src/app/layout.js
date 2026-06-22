import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
// import { ThemeProvider } from "./providers/theame-provider";

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >

      <body
        cz-shortcut-listen="true"       // demo only
      >
        {/* <ThemeProvider> */}
          {/* Progress */}
          <ScrollProgress />

          {/* ── NAV ── */}
          <Navbar />
          <main>

            {children}
          </main>

          {/* ── FOOTER ── */}
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}