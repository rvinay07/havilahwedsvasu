import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2, Sparkles, Users } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface BrideNoteFamilyHighlightProps {
  className?: string;
}

export const BrideNoteFamilyHighlight: React.FC<BrideNoteFamilyHighlightProps> = ({ className = '' }) => {
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl bg-gradient-to-br from-cream-soft/90 via-white/95 to-cream-soft/75 dark:from-midnight-card dark:via-midnight-elevated/90 dark:to-midnight-card border-2 border-rose/35 dark:border-midnight-border shadow-wedding-lg relative overflow-hidden transition-colors ${className}`}
    >
      {/* Top Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-rose dark:via-champagne to-transparent" />

      {/* Main Container */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose/10 dark:bg-champagne/15 border border-rose/30 dark:border-champagne/40 text-[0.7rem] sm:text-xs font-bold uppercase tracking-widest text-rose dark:text-champagne mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Friends Foundation Family &amp; Bride's Note</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-plum dark:text-darktext-primary">
            Friends Foundation Family
          </h3>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto my-3" />
        </div>

        {/* 2-Column Responsive Layout: Side-by-side on desktop (lg:grid-cols-12), stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* COLUMN 1: THE PHOTO (Friends Foundation Family) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Photo Label */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rose dark:text-champagne">
                  <Users className="w-4 h-4" />
                  Friends Foundation Family
                </span>
                <span className="text-[0.68rem] uppercase tracking-wider text-plum-soft dark:text-darktext-muted font-medium">
                  Engagement Ceremony
                </span>
              </div>

              {/* Photo Frame with Hover Effects */}
              <div
                onClick={() => setPhotoOpen(true)}
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-rose/25 dark:border-midnight-border shadow-wedding group cursor-pointer bg-black/5"
              >
                <img
                  src="./assets/images/friends-foundation-family.jpg"
                  alt="Friends Foundation Family - Engagement Ceremony of Mercy Havilah and Vasu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-midnight/80 dark:from-midnight/90 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                  <span className="font-serif text-xs sm:text-sm font-medium">
                    Tap to view fullscreen
                  </span>
                  <span className="p-2 rounded-full bg-rose/90 dark:bg-champagne dark:text-midnight shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Caption Card */}
            <div className="mt-4 p-4 rounded-xl bg-white/75 dark:bg-midnight-elevated/50 border border-rose/15 dark:border-midnight-border text-center">
              <h4 className="font-serif text-base sm:text-lg font-semibold text-plum dark:text-darktext-primary">
                Friends Foundation Family
              </h4>
              <p className="font-serif italic text-xs sm:text-sm text-plum-muted dark:text-darktext-secondary mt-1">
                Pic : Location &amp; date
              </p>
            </div>
          </div>

          {/* COLUMN 2: THE BRIDE'S NOTE (Beside the photo) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-midnight-card/90 border border-rose/20 dark:border-midnight-border shadow-sm text-center">
            <div>
              {/* Note Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose/10 dark:bg-champagne/15 border border-rose/25 dark:border-champagne/35 text-[0.68rem] font-bold uppercase tracking-widest text-rose dark:text-champagne mb-3">
                <Heart className="w-3 h-3 fill-current" />
                <span>A Special Note from the Bride</span>
              </div>

              {/* Sacred Cross */}
              <div className="text-rose dark:text-champagne text-2xl font-serif mb-1" aria-hidden="true">
                ✝
              </div>

              {/* Note Title */}
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-plum dark:text-darktext-primary mb-3">
                From FF Home to a New Home, By God's Grace! ❤️
              </h4>

              <div className="w-12 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-4" />

              {/* Note Text */}
              <div className="font-serif text-sm sm:text-base leading-relaxed text-plum-muted dark:text-darktext-secondary space-y-3 text-center sm:text-left">
                <p className="italic font-medium text-plum dark:text-darktext-primary text-center">
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
            </div>

            {/* Praise & Signature */}
            <div className="mt-6 pt-4 border-t border-rose/20 dark:border-midnight-border/70">
              <p className="font-serif text-sm sm:text-base font-semibold text-rose dark:text-champagne mb-2">
                ✨ All glory to God! ✨
              </p>
              <div>
                <span className="font-champagne text-2xl sm:text-3xl text-plum dark:text-champagne block leading-normal">
                  ~ Mercy Havilah
                </span>
                <span className="text-[0.68rem] uppercase tracking-widest text-plum-soft dark:text-darktext-muted font-bold font-sans">
                  The Bride
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox for Friends Foundation Family Photo */}
      <Lightbox
        open={photoOpen}
        close={() => setPhotoOpen(false)}
        slides={[
          {
            src: './assets/images/friends-foundation-family.jpg',
            alt: 'Friends Foundation Family - Engagement Ceremony of Mercy Havilah and Vasu',
          },
        ]}
      />
    </motion.section>
  );
};
