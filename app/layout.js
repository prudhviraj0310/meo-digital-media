import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meodigitalmedia.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MEO Digital Media - 360° Digital Marketing Agency | Chennai",
    template: "%s | MEO Digital Media",
  },
  description: "Leading digital marketing agency in Chennai offering branding, social media marketing, SEO, web development, influencer marketing, and creative services. Transform your brand with data-driven strategies.",
  keywords: [
    "digital marketing agency Chennai",
    "branding agency India",
    "social media marketing",
    "SEO services Chennai",
    "influencer marketing",
    "movie marketing",
    "content creation",
    "web development Chennai",
    "AI marketing",
    "e-commerce marketing",
    "creative agency",
    "360 degree marketing"
  ],
  authors: [{ name: "MEO Digital Media", url: siteUrl }],
  creator: "MEO Digital Media",
  publisher: "MEO Digital Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MEO Digital Media",
    title: "MEO Digital Media - 360° Digital Marketing Agency",
    description: "Leading digital marketing agency in Chennai. We craft performance-driven digital experiences that transform brands.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "MEO Digital Media - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEO Digital Media - 360° Digital Marketing Agency",
    description: "Leading digital marketing agency in Chennai. Transform your brand with data-driven strategies.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@meodigitalmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
