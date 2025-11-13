import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: {
    default: "MEO Digital Media - 360° Digital Marketing Agency",
    template: "%s | MEO Digital Media",
  },
  description: "From strategy to storytelling, we craft performance-driven digital journeys that make your brand unforgettable. Your 360° digital partner.",
  keywords: ["digital marketing", "branding", "social media marketing", "SEO", "influencer marketing", "movie marketing", "content creation", "web development", "AI marketing"],
  authors: [{ name: "MEO Digital Media" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://meodigitalmedia.com",
    siteName: "MEO Digital Media",
    title: "MEO Digital Media - Transforming Brands into Digital Experiences",
    description: "From strategy to storytelling, we craft performance-driven digital journeys that make your brand unforgettable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
