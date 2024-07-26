import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import RootLayout from "./layout";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <RootLayout>
        <Component key={router.route} {...pageProps} />
      </RootLayout>
    </AnimatePresence>
  );
}
