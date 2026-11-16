import React from 'react';
import { motion } from 'framer-motion';
import { getWeddingShareMessage } from '../config/weddingConfig';

interface WhatsAppShareStationProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const WhatsAppShareStation: React.FC<WhatsAppShareStationProps> = ({
  className = '',
  eyebrow = 'Digital Invitation',
  title = 'Share with Family & Friends',
  description = 'Forward our wedding invitation card with ceremony details and venue directions directly on WhatsApp.'
}) => {
  const handleWhatsAppShare = () => {
    const shareMessage = getWeddingShareMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`py-8 sm:py-10 px-4 transition-colors ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-7 text-center bg-white/70 dark:bg-midnight-card/70 border border-rose/20 dark:border-midnight-border shadow-xs transition-colors"
      >
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-olive dark:text-darksage font-semibold mb-1">
          {eyebrow}
        </p>

        <h3 className="font-serif text-xl sm:text-2xl text-plum dark:text-darktext-primary font-medium mb-1.5">
          {title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-plum-muted dark:text-darktext-secondary max-w-md mx-auto mb-5 leading-relaxed">
          {description}
        </p>

        <button
          onClick={handleWhatsAppShare}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer touch-manipulation"
        >
          <svg
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.544 1.764.793 2.796.793 3.18 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.78-5.767-5.78zm3.377 8.21c-.143.404-.716.741-1.002.775-.285.034-.632.14-1.956-.376-1.637-.638-2.671-2.316-2.753-2.427-.082-.111-.661-.88-.661-1.677 0-.797.414-1.189.561-1.348.147-.159.323-.2.431-.2.108 0 .216.001.31.006.099.005.231-.038.361.275.132.318.452 1.107.492 1.189.04.082.067.177.013.285-.054.108-.081.176-.161.27-.081.095-.17.211-.243.284-.081.081-.166.17-.071.333.095.163.422.697.906 1.127.623.553 1.149.724 1.312.805.163.081.258.072.355-.039.097-.111.414-.482.525-.647.111-.165.222-.138.374-.082.152.056.963.454 1.128.536.165.082.275.123.316.192.04.07.04.406-.103.81zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.301C8.423 21.536 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.161-.502-4.431-1.365l-.317-.215-2.951.774.787-2.875-.236-.339C3.91 14.869 3.4 13.486 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
          </svg>
          <span>Share on WhatsApp</span>
        </button>
      </motion.div>
    </section>
  );
};
