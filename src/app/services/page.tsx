import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: "Our Services - Software Engineering, AI & Product Design Solutions",
  description: "Comprehensive technology solutions: Software Engineering, Product Design, AI & Automation, and Interior Design. Transform your business with scalable, innovative digital solutions and expert guidance.",
  keywords: ["software engineering services", "product design", "AI solutions", "AI automation", "machine learning", "interior design", "AutoCAD", "3D visualization", "UX UI design", "digital transformation"],
  openGraph: {
    title: "TechDrive Services - Complete Technology Solutions Portfolio",
    description: "Discover our full range of services: Software Engineering, Product Design, AI & Automation, and Interior Design.",
    url: "https://techdrive.com/services",
    images: [
      {
        url: "/img/hero-slide-1.png",
        width: 1200,
        height: 630,
        alt: "TechDrive Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechDrive Services - Complete Technology Solutions Portfolio",
    description: "Discover our full range of services: Software Engineering, Product Design, AI & Automation, and Interior Design.",
    images: ["/img/hero-slide-1.png"],
  },
  alternates: {
    canonical: "https://techdrive.com/services",
  },
};

export default function Services() {
  return <ServicesContent />;
}


