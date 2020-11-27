import NextHead from 'next/head';

interface HeadProps {
  page?: string;
  title?: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({ title, page, description }): JSX.Element => {
  const STRUCTURED_DATA = {
    "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Pablo Sabater",
      "url": "https://pabloosabater.dev/",
      "image": "https://pabloosabater.dev/me.jpg",
      "sameAs": [
        "https://twitter.com/Pabloosabaterr",
        "https://github.com/Blopaa",
        "https://www.linkedin.com/in/pablo-sabater-jimenez/"
      ],
    "jobTitle": "Software Developer"
  }

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#222831" />

      <title>{title || (page ? `${page} | Pablo Sabater` : 'Pablo Sabater')}</title>
      <meta name="description" content={description || 'I am a young man who likes to program every day, I love to learn new technologies and methods to improve myself and do things in the best way'} />

      <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
      <link rel="manifest" href="manifest.json" crossOrigin="use-credentials" />
      <link rel="apple-touch-icon" href="favicon.png" />

      <meta name="twitter:creator" content="@Pabloosabaterr" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pablosabater.dev/" />
      <meta property="og:title" content="Pablo Sabater | Portfolio" />
      {/* <meta property="og:image" content="https://pablosabater.dev/preview.png" /> */}
      <meta property="og:description" content="I am a young man who likes to program every day, I love to learn new technologies and methods to improve myself and do things in the best way" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(STRUCTURED_DATA)}}>
      </script>
    </NextHead>
  );
};

export default Head;
