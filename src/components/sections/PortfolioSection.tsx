'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function PortfolioSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      },
    },
  };

  return (
    <section id="portfolio" className="section-padding bg-dark-800">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="heading-2 gradient-text mb-4">Nosso Portfólio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos com sucesso para nossos clientes.
          </p>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
