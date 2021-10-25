import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { ThemeProvider } from "@emotion/react";
import { CartProvider } from "../contexts/CartContext";
const theme = {
  colors: {
    brand: {
      primarydark: "#253C78",
      primary: "#2B59C3",
      secondary: "#D36582",
      beige: "#FFEECF",
      platinum: "#EBEBEB",
    },
  },
};

const Website = ({ Component, pageProps, router }) => {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    </CartProvider>
  );
};

export default Website;
