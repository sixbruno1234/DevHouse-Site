'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-dark-900">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="heading-2 gradient-text mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de desenvolvimento para atender todas as suas necessidades tecnológicas.
          </p>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
