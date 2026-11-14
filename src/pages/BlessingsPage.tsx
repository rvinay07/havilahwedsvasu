import React from 'react';
import { Share2 } from 'lucide-react';
import { weddingConfig, getWeddingShareMessage } from '../config/weddingConfig';
import { PageHero } from '../components/PageHero';

export const BlessingsPage: React.FC = () => {
  const handleWhatsAppShare = () => {
    const shareMessage = getWeddingShareMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        bgImage={weddingConfig.media.hero}
        eyebrow="With Joy &amp; Gratitude"
        title="Blessings &amp; Invitation"
        description="Share the joy of our wedding celebration with your beloved family and friends."
      />

      {/* ================= WHATSAPP INVITATION SHARING ================= */}
      <section className="py-24 px-4 bg-cream-soft dark:bg-midnight-subtle text-center transition-colors">
        <div className="max-w-2xl mx-auto grid grid-cols-1">
          <div className="text-rose dark:text-champagne text-3xl font-serif mb-2" aria-hidden="true">
            ✝
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
            Share the Joy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary mb-3">
            Share This Invitation with Family &amp; Friends
          </h2>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-plum-muted dark:text-darktext-secondary max-w-lg mx-auto mb-8">
            Forward our wedding invitation card and celebration details directly to your loved ones on WhatsApp.
          </p>
          <div>
            <button
              onClick={handleWhatsAppShare}
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Share2 className="w-4 h-4" /> Share on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
