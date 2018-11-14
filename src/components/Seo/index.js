import React from "react";
import { Helmet } from "react-helmet";

export default ({
  itemtype,
  title,
  description,
  image,
  url,
  site,
  author,
  ogtype
}) => (
  <Helmet>
    {itemtype && <html itemscope itemtype={itemtype} />}

    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}

    {/* <!-- Schema.org markup for Google+ --> */}
    {title && <meta itemprop="name" content={title} />}
    {description && <meta itemprop="description" content={description} />}
    {image && <meta itemprop="image" content={image} />}

    {/* <!-- Twitter Card data --> */}
    {image && <meta name="twitter:card" content="summary_large_image" />}
    {site && <meta name="twitter:site" content={`@${site}`} />}
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {author && <meta name="twitter:creator" content={`@${author}`} />}
    {image && <meta name="twitter:image:src" content={image} />}

    {/* <!-- Open Graph data --> */}
    {title && <meta property="og:title" content={title} />}
    {ogtype && <meta property="og:type" content={ogtype} />}
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}
    {description && <meta property="og:description" content={description} />}
    {site && <meta property="og:site_name" content={site} />}
  </Helmet>
);
