'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '@/types/services';

interface ServiceCardProps extends Service {}

export default function ServiceCard({
  title,
  shortDescription,
  icon,
  features,
  technologies,
  pricing,
}: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      
      <div className="relative bg-dark-800 border border-dark-700 rounded-xl p-6 h-full flex flex-col">
        {/* Ícone */}
        <div className="mb-4">
          <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
            {IconComponent && <IconComponent className="w-7 h-7 text-primary-400" />}
          </div>
        </div>

        {/* Título e Descrição */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{shortDescription}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature, index) => {
            const FeatureIcon = feature.icon ? Icons[feature.icon as keyof typeof Icons] as LucideIcon : null;
            return (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                {FeatureIcon && <FeatureIcon className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />}
                <span>{feature.text}</span>
              </li>
            );
          })}
        </ul>

        {/* Tecnologias */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-dark-700 text-accent-cyan rounded-md border border-dark-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Preço */}
        {pricing && (
          <div className="pt-4 border-t border-dark-700">
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gray-400">A partir de</span>
              <span className="text-2xl font-bold text-primary-400">
                R$ {pricing.starting}
              </span>
            </div>
          </div>
        )}

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-500/50 transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
