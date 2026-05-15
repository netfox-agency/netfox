import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page introuvable — NETFOX</title>
        <meta name="description" content="La page que vous cherchez n'existe pas. Retournez à l'accueil de NETFOX, maison digitale de luxe." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="/404" />
        <meta property="og:title" content="Page introuvable — NETFOX" />
        <meta property="og:description" content="La page que vous cherchez n'existe pas." />
        <meta property="og:url" content="/404" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops ! Page introuvable</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Retour à l'accueil
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
