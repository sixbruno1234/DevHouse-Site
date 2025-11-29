'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends Project {}

const categoryColors = {
  bot: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  website: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  api: 'bg-green-500/10 text-green-400 border-green-500/30',
  plugin: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  server: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const categoryLabels = {
  bot: 'Bot Discord',
  website: 'Website',
  api: 'API',
  plugin: 'Plugin',
  server: 'Servidor',
};

export default function ProjectCard({
  title,
  description,
  category,
  image,
  technologies,
  features,
  link,
  github,
  highlighted,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        'relative group overflow-hidden rounded-xl bg-dark-800 border border-dark-700',
        highlighted && 'ring-2 ring-primary-500/50'
      )}
    >
      {/* Badge de Destaque */}
      {highlighted && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
          Destaque
        </div>
      )}

      {/* Imagem */}
      <div className="relative h-48 overflow-hidden bg-dark-700">
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-4xl mb-2">🖼️</div>
            <div className="text-sm">Imagem Placeholder</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Categoria */}
        <div className="mb-3">
          <span className={cn('inline-block px-3 py-1 text-xs font-medium rounded-full border', categoryColors[category])}>
            {categoryLabels[category]}
          </span>
        </div>

        {/* Título e Descrição */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Features */}
        <ul className="mb-4 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-gray-300">
              <div className="w-1 h-1 rounded-full bg-accent-cyan" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-dark-700 text-gray-300 rounded border border-dark-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-dark-700">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-500/50 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
