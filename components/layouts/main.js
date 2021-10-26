import Head from "next/head";
import Navbar from "../Navbar";

const Layout = ({ children, router }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SEC - Challenge" />
        <meta name="author" content="Juan Pablo Oriana" />
        <link rel="icon" href="/carrito.png" type="image/png" />
        <title>SEC - Challenge</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SEC - Challenge" />
      </Head>
      <Navbar />
      <div>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: Open Sans, sans-serif;
            background: white;
            overflow-x: hidden;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
};

export default Layout;
