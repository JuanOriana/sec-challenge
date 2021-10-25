import Head from "next/head";
import Navbar from "../Navbar";

const Layout = ({ children, router }) => {
  // Usar Contexts de React puede llegar a tener mas sentido en una pagina grande que esta solucion
  // pero la consigna pide soluciones simples
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Siempre en Casa Project" />
        <meta name="author" content="Juan Pablo Oriana" />
        <link rel="icon" href="/images/chicken-dark.png" type="image/x-icon" />
        <title>Siempre en Casa - Project</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Siempre en Casa - Project" />
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
