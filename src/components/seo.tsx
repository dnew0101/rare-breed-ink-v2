import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO: React.FC<{ title?: string; description?: string; url?: string; image?: string }> = ({
  title,
  description,
  url,
  image,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          canonicalUrl
          openGraph {
            type
            title
            description
            url
            image
            site_name
            locale
          }
        }
      }
    }
  `);

  const metaTitle = title || site.siteMetadata.openGraph.title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.openGraph.description || site.siteMetadata.description;
  const metaUrl = url || site.siteMetadata.openGraph.url || site.siteMetadata.siteUrl;
  const metaImage = image || site.siteMetadata.openGraph.image;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={site.siteMetadata.canonicalUrl} />
      <meta property="og:type" content={site.siteMetadata.openGraph.type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={site.siteMetadata.openGraph.site_name} />
      <meta property="og:locale" content={site.siteMetadata.openGraph.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;