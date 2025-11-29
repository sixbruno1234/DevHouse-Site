'use client';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { DISCORD_INVITE_URL } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6 font-heading">
            DevHouse
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
            Tecnologia, Automação e Desenvolvimento sob Medida
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transformamos suas ideias em soluções digitais. Especialistas em bots Discord, desenvolvimento web, APIs e muito mais.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" onClick={() => window.open(DISCORD_INVITE_URL, '_blank')}>
              <MessageCircle className="w-5 h-5 mr-2" />Junte-se ao Discord
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contato')}>
              Entre em Contato
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} className="mt-16">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-primary-400 transition-colors animate-bounce" aria-label="Scroll">
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
