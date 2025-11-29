'use client';

import { Code, Zap, Users, Award } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

const features = [
  {
    icon: Code,
    title: 'Código de Qualidade',
    description: 'Desenvolvemos soluções com as melhores práticas e tecnologias modernas.',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description: 'Processos ágeis para entregar seu projeto no prazo combinado.',
  },
  {
    icon: Users,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento constante e suporte técnico sempre que precisar.',
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Anos de experiência atendendo clientes satisfeitos.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-dark-800">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="heading-2 gradient-text mb-4">Sobre a DevHouse</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Somos um grupo de desenvolvedores apaixonados por tecnologia, dedicados a criar soluções digitais que transformam ideias em realidade.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <SlideIn
              key={index}
              delay={index * 0.1}
              from={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="text-center p-6 bg-dark-700 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-colors">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
