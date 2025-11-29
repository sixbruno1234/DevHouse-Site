'use client';

import { Github, MessageCircle } from 'lucide-react';
import { SITE_NAME, SITE_DESCRIPTION, DISCORD_INVITE_URL } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text font-heading mb-2">
              {SITE_NAME}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex gap-4">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://github.com/devhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, '#servicos')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bots Discord</li>
              <li>Desenvolvimento Web</li>
              <li>APIs e Integrações</li>
              <li>Plugins Minecraft/DayZ</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-dark-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
