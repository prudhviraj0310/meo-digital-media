// SEO Utilities and Structured Data Helpers

/**
 * Generate JSON-LD structured data for Organization
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MEO Digital Media",
  "description": "360° Digital Marketing Agency specializing in branding, social media marketing, web development, and creative services",
  "url": "https://meodigitalmedia.com",
  "logo": "https://meodigitalmedia.com/logo-gold.png",
  "image": "https://meodigitalmedia.com/og-image.jpg",
  "telephone": "+919884721844",
  "email": "info@meodigitalmedia.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/meo-digital-media",
    "https://www.instagram.com/meodigitalmedia",
    "https://twitter.com/meodigitalmedia"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919884721844",
    "contactType": "customer service",
    "email": "info@meodigitalmedia.com",
    "availableLanguage": ["English", "Hindi", "Tamil"]
  }
});

/**
 * Generate JSON-LD structured data for Website
 */
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MEO Digital Media",
  "url": "https://meodigitalmedia.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://meodigitalmedia.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

/**
 * Generate JSON-LD structured data for Service
 */
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "MEO Digital Media"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": service.offerings?.map(offering => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": offering
      }
    }))
  }
});

/**
 * Generate JSON-LD structured data for Article/Blog Post
 */
export const getArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.publishedDate,
  "dateModified": article.modifiedDate || article.publishedDate,
  "author": {
    "@type": "Organization",
    "name": "MEO Digital Media"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MEO Digital Media",
    "logo": {
      "@type": "ImageObject",
      "url": "https://meodigitalmedia.com/logo-gold.png"
    }
  }
});

/**
 * Generate JSON-LD structured data for Project/Creative Work
 */
export const getCreativeWorkSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "image": project.image,
  "author": {
    "@type": "Organization",
    "name": "MEO Digital Media"
  },
  "dateCreated": project.completedDate,
  "keywords": project.tags?.join(", "),
  "genre": project.category
});

/**
 * Generate JSON-LD structured data for Breadcrumbs
 */
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Generate JSON-LD structured data for FAQPage
 */
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

/**
 * Generate Open Graph meta tags
 */
export const getOpenGraphTags = ({ 
  title, 
  description, 
  url, 
  image,
  type = 'website' 
}) => ({
  'og:title': title,
  'og:description': description,
  'og:url': url,
  'og:image': image || 'https://meodigitalmedia.com/og-image.jpg',
  'og:type': type,
  'og:site_name': 'MEO Digital Media',
  'og:locale': 'en_IN',
});

/**
 * Generate Twitter Card meta tags
 */
export const getTwitterTags = ({ 
  title, 
  description, 
  image 
}) => ({
  'twitter:card': 'summary_large_image',
  'twitter:site': '@meodigitalmedia',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': image || 'https://meodigitalmedia.com/og-image.jpg',
});

/**
 * Generate complete meta tags for a page
 */
export const generateMetaTags = ({
  title,
  description,
  keywords,
  url,
  image,
  type = 'website',
  noindex = false
}) => {
  const fullTitle = `${title} | MEO Digital Media`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    ...(!noindex && {
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }),
    openGraph: getOpenGraphTags({ title: fullTitle, description, url, image, type }),
    twitter: getTwitterTags({ title: fullTitle, description, image }),
    alternates: {
      canonical: url,
    },
  };
};
