import React from 'react';
import { getWeddingShareMessage } from '../config/weddingConfig';

interface WhatsAppShareStationProps {
  className?: string;
  label?: string;
  subtext?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const WhatsAppShareStation: React.FC<WhatsAppShareStationProps> = ({
  className = '',
  label = 'Share Invitation on WhatsApp',
  subtext = 'Forward wedding card & venue details directly to loved ones'
}) => {
  const handleWhatsAppShare = () => {
    const shareMessage = getWeddingShareMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`py-6 sm:py-8 px-4 text-center transition-colors ${className}`}>
      <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-2">
        <button
          onClick={handleWhatsAppShare}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-xs hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer touch-manipulation"
        >
          <svg
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.997.544 1.764.793 2.796.793 3.18 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.78-5.767-5.78zm3.377 8.21c-.143.404-.716.741-1.002.775-.285.034-.632.14-1.956-.376-1.637-.638-2.671-2.316-2.753-2.427-.082-.111-.661-.88-.661-1.677 0-.797.414-1.189.561-1.348.147-.159.323-.2.431-.2.108 0 .216.001.31.006.099.005.231-.038.361.275.132.318.452 1.107.492 1.189.04.082.067.177.013.285-.054.108-.081.176-.161.27-.081.095-.17.211-.243.284-.081.081-.166.17-.071.333.095.163.422.697.906 1.127.623.553 1.149.724 1.312.805.163.081.258.072.355-.039.097-.111.414-.482.525-.647.111-.165.222-.138.374-.082.152.056.963.454 1.128.536.165.082.275.123.316.192.04.07.04.406-.103.81zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.301C8.423 21.536 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.161-.502-4.431-1.365l-.317-.215-2.951.774.787-2.875-.236-.339C3.91 14.869 3.4 13.486 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
          </svg>
          <span>{label}</span>
        </button>
        {subtext && (
          <p className="text-[0.7rem] text-plum-muted dark:text-darktext-secondary font-sans">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};
