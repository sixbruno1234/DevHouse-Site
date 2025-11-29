import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'DevHouse - Desenvolvimento de Bots, Sites e Sistemas',
  description: 'Transformamos suas ideias em soluções digitais. Bots Discord, Sites sob medida, APIs, Plugins Minecraft/DayZ e muito mais.',
  keywords: ['desenvolvimento', 'bots discord', 'sites', 'sistemas', 'apis', 'minecraft', 'dayz', 'plugins', 'automação'],
  authors: [{ name: 'DevHouse' }],
  openGraph: {
    title: 'DevHouse - Desenvolvimento de Bots, Sites e Sistemas',
    description: 'Transformamos suas ideias em soluções digitais',
    url: 'https://devhouse.vercel.app',
    siteName: 'DevHouse',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevHouse',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevHouse - Desenvolvimento de Bots, Sites e Sistemas',
    description: 'Transformamos suas ideias em soluções digitais',
    images: ['/og-image.png'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-dark-900 text-white antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Background Gradient */}
          <div className="fixed inset-0 z-0 gradient-glow" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
