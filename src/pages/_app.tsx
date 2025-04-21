import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

// Initiera fonten
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter", // valfritt: gör den till CSS-variabel
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <SessionProvider session={pageProps.session}>
      <main className={inter.className}>
        {isLoginPage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </main>
    </SessionProvider>
  );
}
