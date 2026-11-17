import React from 'react';
import { motion } from 'framer-motion';

interface BrideGreetingCardProps {
  className?: string;
}

export const BrideGreetingCard: React.FC<BrideGreetingCardProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-cream-soft/85 via-white/95 to-cream-soft/65 dark:from-midnight-elevated/85 dark:via-midnight-card dark:to-midnight-elevated/75 border-2 border-rose/40 dark:border-champagne/45 shadow-wedding-lg text-center relative overflow-hidden transition-colors ${className}`}
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-rose dark:via-champagne to-transparent" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose/10 dark:bg-champagne/15 border border-rose/30 dark:border-champagne/40 text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-rose dark:text-champagne mb-3">
        <span>A Special Note from the Bride</span>
      </div>

      {/* Sacred Cross */}
      <div className="text-rose dark:text-champagne text-2xl font-serif mb-2" aria-hidden="true">
        ✝
      </div>

      {/* Message Title */}
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-plum dark:text-darktext-primary mb-2">
        From FF Home to a New Home, By God's Grace! ❤️
      </h3>

      {/* Decorative Divider */}
      <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose/50 dark:via-champagne/50 to-transparent mx-auto my-3" />

      {/* Message Prose */}
      <div className="font-serif text-sm sm:text-base md:text-lg leading-relaxed text-plum-muted dark:text-darktext-secondary space-y-2.5 max-w-2xl mx-auto">
        <p className="italic font-medium text-plum dark:text-darktext-primary text-base sm:text-lg md:text-xl">
          “A little girl who grew up surrounded by love, care, and prayers is now stepping into a beautiful new chapter of life.”
        </p>
        <p>
          As the eldest girl of Friends Foundation, it is a special blessing to celebrate the 7th wedding from FF Home.
        </p>
        <p>
          Every step of this journey is a testimony of God's unconditional love and faithfulness.
        </p>
        <p>
          With thankful hearts and joyful spirits, we invite you to be part of our beautiful beginning.
        </p>
      </div>

      {/* Praise Tag */}
      <p className="font-serif text-base sm:text-lg font-semibold text-rose dark:text-champagne my-3 tracking-wide">
        ✨ All glory to God! ✨
      </p>

      {/* Signature */}
      <div className="pt-2 border-t border-rose/20 dark:border-midnight-border/70 max-w-xs mx-auto">
        <span className="font-champagne text-2xl sm:text-3xl text-plum dark:text-champagne block leading-normal">
          ~ Mercy Havilah
        </span>
        <span className="text-[0.68rem] uppercase tracking-widest text-plum-soft dark:text-darktext-muted font-bold font-sans">
          The Bride
        </span>
      </div>
    </motion.div>
  );
};
