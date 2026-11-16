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
  eyebrow = 'Share the Blessing',
  title = 'Invite Family & Friends on WhatsApp',
  description = 'Forward our wedding invitation card with photo preview, Holy Matrimony ceremony details, and Google Maps directions directly on WhatsApp.'
}) => {
  const handleWhatsAppShare = () => {
    const shareMessage = getWeddingShareMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`py-12 sm:py-16 px-4 transition-colors ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden bg-gradient-to-b from-white to-cream-soft/60 dark:from-midnight-card dark:to-midnight-elevated/70 border-2 border-emerald-500/35 dark:border-emerald-500/40 shadow-[0_10px_35px_-5px_rgba(37,211,102,0.15)] dark:shadow-[0_10px_35px_-5px_rgba(37,211,102,0.18)]"
      >
        {/* Decorative Top Accent Glow */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-24 bg-emerald-500/15 dark:bg-emerald-500/20 blur-2xl rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <span className="inline-flex items-center gap-1.5 text-[0.65rem] sm:text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 mb-3">
            <span>✨</span> {eyebrow}
          </span>

          {/* Heading */}
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-plum dark:text-darktext-primary font-medium mb-3 tracking-tight">
            {title}
          </h3>

          <div className="w-16 h-[1.5px] bg-emerald-500/40 dark:bg-emerald-400/40 mx-auto mb-4" />

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm text-plum-muted dark:text-darktext-secondary max-w-lg mx-auto mb-7 leading-relaxed">
            {description}
          </p>

          {/* Highlighted WhatsApp CTA Button */}
          <button
            onClick={handleWhatsAppShare}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-[0_4px_20px_rgba(37,211,102,0.38)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 cursor-pointer touch-manipulation group"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.544 1.764.793 2.796.793 3.18 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.78-5.767-5.78zm3.377 8.21c-.143.404-.716.741-1.002.775-.285.034-.632.14-1.956-.376-1.637-.638-2.671-2.316-2.753-2.427-.082-.111-.661-.88-.661-1.677 0-.797.414-1.189.561-1.348.147-.159.323-.2.431-.2.108 0 .216.001.31.006.099.005.231-.038.361.275.132.318.452 1.107.492 1.189.04.082.067.177.013.285-.054.108-.081.176-.161.27-.081.095-.17.211-.243.284-.081.081-.166.17-.071.333.095.163.422.697.906 1.127.623.553 1.149.724 1.312.805.163.081.258.072.355-.039.097-.111.414-.482.525-.647.111-.165.222-.138.374-.082.152.056.963.454 1.128.536.165.082.275.123.316.192.04.07.04.406-.103.81zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.301C8.423 21.536 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.161-.502-4.431-1.365l-.317-.215-2.951.774.787-2.875-.236-.339C3.91 14.869 3.4 13.486 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
            </svg>
            <span>Share Invitation on WhatsApp</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
