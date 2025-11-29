'use client';

import { Star } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import { testimonials } from '@/data/testimonials';
import { formatDate } from '@/lib/utils';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="heading-2 gradient-text mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso trabalho.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScaleIn key={testimonial.id} delay={index * 0.1}>
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}{testimonial.company ? ` - ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dark-700">
                  <span className="text-xs text-gray-500">
                    {testimonial.service} • {formatDate(testimonial.date)}
                  </span>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
