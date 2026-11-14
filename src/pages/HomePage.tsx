import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  Calendar,
  ArrowRight,
  Heart,
  MapPin,
  BookOpen,
  Share2,
  Clock,
  CheckCircle2,
  Navigation,
  Maximize2
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNav, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

import { weddingConfig, getWeddingShareMessage } from '../config/weddingConfig';
import { AmbientCanvas } from '../components/AmbientCanvas';
import { Countdown } from '../components/Countdown';

export const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { ceremony, reception } = weddingConfig.events;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-hero-title',
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.gsap-hero-sub',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppShare = () => {
    const shareMessage = getWeddingShareMessage();
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = sectionId === 'home' ? 0 : -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const gallerySlides = weddingConfig.gallery.map((photo) => ({
    src: photo.src,
    title: photo.caption,
    description: photo.alt,
  }));

  return (
    <div className="overflow-hidden">
      {/* =========================================================================
          SECTION 1: HOME (Hero, Joyful Invitation & Countdown)
          ========================================================================= */}
      <section id="home" className="relative scroll-mt-20">
        {/* Cinematic Hero */}
        <div className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center text-center overflow-hidden px-4 pt-24 pb-16">
          <div className="absolute inset-0 z-0">
            <img
              src={weddingConfig.media.hero}
              alt="Vasu and Mercy Havilah"
              className="w-full h-full object-cover object-[center_20%] animate-kenburns scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-plum-midnight/75 via-plum-dark/45 to-plum-midnight/90 dark:from-midnight/80 dark:via-midnight-subtle/55 dark:to-midnight/95 transition-colors" />
            <div className="absolute -bottom-px left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-cream-warm dark:from-midnight to-transparent pointer-events-none z-[1]" />
          </div>

          <AmbientCanvas />

          <div ref={heroRef} className="relative z-10 max-w-3xl mx-auto text-white py-8 sm:py-12">
            <div className="p-5 sm:p-8 rounded-3xl backdrop-blur-xs bg-black/20 dark:bg-black/30 border border-white/10 dark:border-white/5">
              <div className="text-rose dark:text-champagne text-3xl font-serif mb-2 gsap-hero-sub" aria-hidden="true">
                ✝
              </div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-rose dark:text-champagne font-bold mb-2 gsap-hero-sub">
                Together in Christ, United in Love
              </p>
              <p className="font-serif italic text-base sm:text-lg text-cream/90 dark:text-darktext-secondary mb-4 gsap-hero-sub">
                The wedding celebration of
              </p>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white dark:text-darktext-primary mb-4 gsap-hero-title">
                <span>{weddingConfig.groomName}</span>
                <span className="text-rose dark:text-champagne inline-block mx-3 font-normal">&amp;</span>
                <span>{weddingConfig.brideName}</span>
              </h1>

              <div className="w-24 h-[1.5px] bg-rose dark:bg-champagne mx-auto my-4 gsap-hero-sub" />

              <p className="font-sans text-sm sm:text-base tracking-widest text-cream dark:text-darktext-primary uppercase font-semibold mb-8 gsap-hero-sub">
                3 February 2027 · Guntakal
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 gsap-hero-sub">
                <button
                  type="button"
                  onClick={() => scrollToSection('wedding-details')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-rose dark:bg-champagne text-white dark:text-midnight font-sans text-xs uppercase tracking-widest font-bold shadow-rose-glow dark:shadow-champagne-glow hover:bg-rose-dark dark:hover:bg-champagne-hover active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation cursor-pointer"
                >
                  Wedding Details &amp; Maps <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('our-story')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-md border border-white/80 dark:border-champagne/80 hover:bg-white hover:text-plum dark:hover:bg-champagne dark:hover:text-midnight text-white dark:text-darktext-primary font-sans text-xs uppercase tracking-widest font-bold active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation cursor-pointer"
                >
                  Our Story in Christ <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* A Joyful Invitation Card */}
        <div className="py-20 px-4 bg-cream-warm dark:bg-midnight transition-colors">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding text-center relative overflow-hidden transition-colors"
            >
              <div className="text-rose dark:text-champagne text-3xl font-serif mb-2" aria-hidden="true">
                ✝
              </div>
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
                By the Grace of God
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium mb-5">
                A Joyful Invitation
              </h2>

              <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-6" />

              <p className="font-serif text-lg sm:text-xl text-plum-muted dark:text-darktext-secondary leading-relaxed mb-8 max-w-xl mx-auto">
                With grateful hearts, we invite you to celebrate with us as{' '}
                <strong className="text-plum dark:text-darktext-primary font-semibold">
                  {weddingConfig.groomName} &amp; {weddingConfig.brideName}
                </strong>{' '}
                are united in holy matrimony. Your presence and prayers will mean the world to us as we begin this new chapter in Christ.
              </p>

              {/* Parents Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-rose/20 dark:border-midnight-border text-center">
                <div>
                  <small className="block text-xs uppercase tracking-wider text-rose dark:text-champagne font-bold mb-1">
                    Groom’s Parents
                  </small>
                  <strong className="font-serif text-lg sm:text-xl text-plum dark:text-darktext-primary">
                    {weddingConfig.groomFather} &amp; {weddingConfig.groomMother}
                  </strong>
                </div>
                <div>
                  <small className="block text-xs uppercase tracking-wider text-rose dark:text-champagne font-bold mb-1">
                    Bride’s Parents
                  </small>
                  <strong className="font-serif text-lg sm:text-xl text-plum dark:text-darktext-primary">
                    {weddingConfig.brideFather} &amp; {weddingConfig.brideMother}
                  </strong>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-rose/20 dark:border-midnight-border text-sm text-plum-muted dark:text-darktext-secondary space-y-1">
                <p className="font-bold text-plum dark:text-darktext-primary font-serif text-lg sm:text-xl">
                  Wednesday, 3 February 2027 | 9:00 AM
                </p>
                <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary">
                  {ceremony.venue}, {ceremony.address}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Countdown Preview */}
        <div className="py-16 px-4 bg-cream/50 dark:bg-midnight-subtle border-y border-rose/20 dark:border-midnight-border transition-colors">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              In God’s Perfect Timing
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-plum dark:text-darktext-primary mb-6">
              Counting Down to Sacred Vows
            </h2>

            <Countdown targetDate={weddingConfig.events.ceremony.date} label="Days Until Holy Matrimony" />

            <div className="mt-6">
              <a
                href={weddingConfig.events.ceremony.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-olive hover:bg-olive-dark dark:bg-champagne dark:hover:bg-champagne-hover dark:text-midnight text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4" /> Add Wedding to Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR STORY (Couple, Parents, Milestones & Engagement)
          ========================================================================= */}
      <section id="our-story" className="scroll-mt-20 border-t border-rose/20 dark:border-midnight-border">
        {/* Section Header */}
        <div className="pt-20 pb-12 px-4 max-w-4xl mx-auto text-center">
          <div className="text-rose dark:text-champagne text-3xl font-serif mb-2" aria-hidden="true">
            ✝
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
            Milestones of God’s Grace
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-plum dark:text-darktext-primary font-medium mb-4">
            Our Journey in Faith
          </h2>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-4" />
          <p className="font-serif italic text-lg text-plum-muted dark:text-darktext-secondary max-w-xl mx-auto leading-relaxed">
            “He has made everything beautiful in its time.” — Ecclesiastes 3:11
          </p>
        </div>

        {/* The Couple Portraits */}
        <div className="pb-16 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Groom Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding text-center transition-colors"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-2 border-rose/40 dark:border-champagne/40 shadow-md mb-5">
                <img
                  src={weddingConfig.media.groom}
                  alt="Portrait of the groom"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-rose dark:text-champagne font-bold mb-1">
                The Groom
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-plum dark:text-darktext-primary mb-2">
                {weddingConfig.groomName}
              </h3>
              <div className="text-xs text-plum-muted dark:text-darktext-secondary font-medium">
                <span className="block text-plum-soft dark:text-darktext-muted text-[0.68rem] uppercase tracking-wider mb-0.5">
                  Beloved son of
                </span>
                <p className="text-sm font-serif text-plum dark:text-darktext-primary">
                  {weddingConfig.groomFather} &amp; {weddingConfig.groomMother}
                </p>
              </div>
            </motion.div>

            {/* Bride Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding text-center transition-colors"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-2 border-rose/40 dark:border-champagne/40 shadow-md mb-5">
                <img
                  src={weddingConfig.media.bride}
                  alt="Portrait of the bride"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-rose dark:text-champagne font-bold mb-1">
                The Bride
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-plum dark:text-darktext-primary mb-2">
                {weddingConfig.brideName}
              </h3>
              <div className="text-xs text-plum-muted dark:text-darktext-secondary font-medium">
                <span className="block text-plum-soft dark:text-darktext-muted text-[0.68rem] uppercase tracking-wider mb-0.5">
                  Beloved daughter of
                </span>
                <p className="text-sm font-serif text-plum dark:text-darktext-primary">
                  {weddingConfig.brideFather} &amp; {weddingConfig.brideMother}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Their Families Portraits */}
        <div className="py-16 px-4 bg-cream/40 dark:bg-midnight-subtle border-y border-rose/20 dark:border-midnight-border transition-colors">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
                With Love &amp; Blessings
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-plum dark:text-darktext-primary font-medium">
                Their Beloved Families
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding text-center"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-rose/20 dark:border-midnight-border">
                  <img
                    src={weddingConfig.media.groomParents}
                    alt="Groom's family"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-rose dark:text-champagne font-bold mb-1">
                  Groom's Family
                </p>
                <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-medium">
                  {weddingConfig.groomFather} &amp; {weddingConfig.groomMother}
                </h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding text-center"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-rose/20 dark:border-midnight-border">
                  <img
                    src={weddingConfig.media.brideParents}
                    alt="Bride's family"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-rose dark:text-champagne font-bold mb-1">
                  Bride's Family
                </p>
                <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-medium">
                  {weddingConfig.brideFather} &amp; {weddingConfig.brideMother}
                </h4>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Faith Journey Timeline */}
        <div className="py-20 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              Timeline of Faith
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium">
              Milestones Along the Way
            </h3>
            <div className="w-16 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto my-3" />
            <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary max-w-md mx-auto">
              Reflecting on God's faithful guidance from our very first steps to our holy covenant.
            </p>
          </div>

          <div className="relative border-l-2 border-rose/30 dark:border-midnight-border ml-7 sm:ml-10 pl-6 sm:pl-10 space-y-10">
            {weddingConfig.milestones.map((milestone, idx) => {
              const isCompleted = milestone.status === 'completed';
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      isCompleted
                        ? 'bg-olive dark:bg-darksage text-white dark:text-midnight border-olive dark:border-darksage'
                        : 'bg-rose dark:bg-champagne text-white dark:text-midnight border-rose dark:border-champagne'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                  </div>

                  <div
                    className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-midnight-card border shadow-wedding transition-colors ${
                      isCompleted ? 'border-pear/60 dark:border-midnight-border' : 'border-rose/30 dark:border-midnight-border'
                    }`}
                  >
                    <span
                      className={`inline-block text-[0.62rem] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3 ${
                        isCompleted
                          ? 'bg-pear-pill dark:bg-midnight-elevated text-olive dark:text-darksage'
                          : 'bg-rose-light dark:bg-midnight-elevated text-rose-deep dark:text-champagne'
                      }`}
                    >
                      {milestone.badge}
                    </span>

                    <h4 className="font-serif text-xl sm:text-2xl text-plum dark:text-darktext-primary font-medium mb-2">
                      {milestone.title}
                    </h4>

                    {milestone.scripture && (
                      <p className="font-serif italic text-sm text-rose dark:text-champagne mb-3">
                        {milestone.scripture}
                      </p>
                    )}

                    <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WEDDING DETAILS (Holy Matrimony, Reception, Video & Contacts)
          ========================================================================= */}
      <section id="wedding-details" className="scroll-mt-20 border-t border-rose/20 dark:border-midnight-border">
        {/* Section Header */}
        <div className="pt-20 pb-12 px-4 max-w-4xl mx-auto text-center">
          <div className="text-rose dark:text-champagne text-3xl font-serif mb-2" aria-hidden="true">
            ✝
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
            Save the Dates
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-plum dark:text-darktext-primary font-medium mb-4">
            Wedding Celebrations &amp; Venues
          </h2>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-4" />
          <p className="font-sans text-base text-plum-muted dark:text-darktext-secondary max-w-xl mx-auto leading-relaxed">
            Two sacred gatherings, one joyful covenant. We warmly invite you to celebrate with us.
          </p>
        </div>

        {/* Parents Formal Invitation Card */}
        <div className="pb-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding text-center transition-colors"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              Formal Invitation from Families
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-plum dark:text-darktext-primary font-medium mb-4">
              In the Presence of God
            </h3>
            <div className="w-16 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-5" />
            <p className="font-serif text-lg text-plum-muted dark:text-darktext-secondary leading-relaxed max-w-2xl mx-auto">
              We, the families of{' '}
              <strong className="text-plum dark:text-darktext-primary">
                {weddingConfig.groomFather} &amp; {weddingConfig.groomMother}
              </strong>{' '}
              along with{' '}
              <strong className="text-plum dark:text-darktext-primary">
                {weddingConfig.brideFather} &amp; {weddingConfig.brideMother}
              </strong>,
              request the honour of your presence and prayers at the Holy Matrimony and Reception uniting our beloved children{' '}
              <strong className="text-rose dark:text-champagne font-semibold">
                {weddingConfig.groomName} &amp; {weddingConfig.brideName}
              </strong>.
            </p>
          </motion.div>
        </div>

        {/* Upcoming Events Stack */}
        <div className="pb-20 px-4 max-w-5xl mx-auto space-y-12">
          {/* EVENT 1: WEDDING CEREMONY */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding relative overflow-hidden transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose/20 dark:border-midnight-border pb-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-olive dark:text-darksage font-bold">
                  {ceremony.eyebrow}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium mt-1">
                  {ceremony.title}
                </h3>
              </div>
              <div className="text-left md:text-right">
                <p className="font-serif text-2xl text-rose dark:text-champagne font-semibold">{ceremony.displayDate}</p>
                <p className="text-sm text-plum-muted dark:text-darktext-secondary font-medium">{ceremony.displayTime}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
              {/* Venue & Countdown */}
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-rose dark:text-champagne mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-semibold">
                      {ceremony.venue}
                    </h4>
                    <p className="text-sm text-plum-muted dark:text-darktext-secondary">
                      {ceremony.address}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-cream/50 dark:bg-midnight-elevated/60 border border-rose/20 dark:border-midnight-border">
                  <Countdown targetDate={ceremony.date} label="Countdown to Holy Matrimony" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                  <a
                    href={ceremony.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-olive hover:bg-olive-dark dark:bg-midnight-elevated dark:border dark:border-midnight-border dark:hover:border-champagne dark:hover:text-champagne text-white dark:text-darktext-primary font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
                  >
                    <Navigation className="w-4 h-4" /> Google Maps ↗
                  </a>
                  <a
                    href={ceremony.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-rose hover:bg-rose-dark dark:bg-champagne dark:hover:bg-champagne-hover text-white dark:text-midnight font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-rose-glow dark:shadow-champagne-glow"
                  >
                    <Calendar className="w-4 h-4" /> Add to Calendar 📅
                  </a>
                </div>
              </div>

              {/* Ceremony Schedule */}
              <div className="p-6 rounded-2xl bg-cream-soft dark:bg-midnight-elevated/40 border border-rose/20 dark:border-midnight-border">
                <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-medium mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose dark:text-champagne" /> Order of Holy Matrimony
                </h4>
                <div className="space-y-3.5 border-l-2 border-rose/30 dark:border-midnight-border pl-4 ml-1">
                  {ceremony.schedule.map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="text-xs font-bold text-rose dark:text-champagne block">
                        {item.time}
                      </span>
                      <span className="text-sm text-plum-muted dark:text-darktext-secondary">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* MINISTER OF THE CEREMONY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-9 rounded-3xl bg-cream-soft/60 dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding text-center max-w-2xl mx-auto transition-colors"
          >
            <div className="text-rose dark:text-champagne text-2xl font-serif mb-2" aria-hidden="true">
              ✝
            </div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              {weddingConfig.minister.heading}
            </p>
            <h4 className="font-serif text-2xl sm:text-3xl font-medium text-plum dark:text-darktext-primary mb-2">
              {weddingConfig.minister.name}
            </h4>
            <div className="w-12 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto my-3" />
            <p className="font-serif italic text-sm sm:text-base text-plum-muted dark:text-darktext-secondary">
              {weddingConfig.minister.role}
            </p>
          </motion.div>

          {/* EVENT 2: WEDDING RECEPTION */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding relative overflow-hidden transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose/20 dark:border-midnight-border pb-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-olive dark:text-darksage font-bold">
                  {reception.eyebrow}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium mt-1">
                  {reception.title}
                </h3>
              </div>
              <div className="text-left md:text-right">
                <p className="font-serif text-2xl text-rose dark:text-champagne font-semibold">{reception.displayDate}</p>
                <p className="text-sm text-plum-muted dark:text-darktext-secondary font-medium">{reception.displayTime}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
              {/* Venue & Countdown */}
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-rose dark:text-champagne mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-semibold">
                      {reception.venue}
                    </h4>
                    <p className="text-sm text-plum-muted dark:text-darktext-secondary">
                      {reception.address}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-cream/50 dark:bg-midnight-elevated/60 border border-rose/20 dark:border-midnight-border">
                  <Countdown targetDate={reception.date} label="Countdown to Reception" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                  <a
                    href={reception.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-olive hover:bg-olive-dark dark:bg-midnight-elevated dark:border dark:border-midnight-border dark:hover:border-champagne dark:hover:text-champagne text-white dark:text-darktext-primary font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
                  >
                    <Navigation className="w-4 h-4" /> Google Maps ↗
                  </a>
                  <a
                    href={reception.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-rose hover:bg-rose-dark dark:bg-champagne dark:hover:bg-champagne-hover text-white dark:text-midnight font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-rose-glow dark:shadow-champagne-glow"
                  >
                    <Calendar className="w-4 h-4" /> Add to Calendar 📅
                  </a>
                </div>
              </div>

              {/* Reception Schedule */}
              <div className="p-6 rounded-2xl bg-cream-soft dark:bg-midnight-elevated/40 border border-rose/20 dark:border-midnight-border">
                <h4 className="font-serif text-xl text-plum dark:text-darktext-primary font-medium mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose dark:text-champagne" /> Evening Program
                </h4>
                <div className="space-y-3.5 border-l-2 border-rose/30 dark:border-midnight-border pl-4 ml-1">
                  {reception.schedule.map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="text-xs font-bold text-rose dark:text-champagne block">
                        {item.time}
                      </span>
                      <span className="text-sm text-plum-muted dark:text-darktext-secondary">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Pre-Wedding Film Player */}
        <div className="py-20 px-4 bg-cream/40 dark:bg-midnight-subtle border-t border-rose/20 dark:border-midnight-border text-center transition-colors">
          <div className="max-w-4xl mx-auto">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              A Cinematic Glimpse
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium mb-3">
              Our Pre-Wedding Film
            </h3>
            <div className="w-16 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-4" />
            <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary max-w-md mx-auto mb-8">
              Capturing our smiles, prayers, and excitement as we prepare for this sacred union.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-rose/30 dark:border-midnight-border shadow-wedding-lg bg-black"
            >
              <video
                controls
                playsInline
                preload="metadata"
                poster={weddingConfig.media.hero}
                className="w-full h-auto aspect-video"
              >
                <source src={weddingConfig.media.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: GALLERY (Carousel, Editorial Grid & Fullscreen Lightbox)
          ========================================================================= */}
      <section id="gallery" className="scroll-mt-20 border-t border-rose/20 dark:border-midnight-border">
        {/* Section Header */}
        <div className="pt-20 pb-12 px-4 max-w-4xl mx-auto text-center">
          <div className="text-rose dark:text-champagne text-3xl font-serif mb-2" aria-hidden="true">
            ✝
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
            Cherished Memories
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-plum dark:text-darktext-primary font-medium mb-4">
            Moments of Joy &amp; Grace
          </h2>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-4" />
          <p className="font-sans text-base text-plum-muted dark:text-darktext-secondary max-w-md mx-auto">
            Swipe to browse our favorite portraits or tap to enlarge in fullscreen.
          </p>
        </div>

        {/* Featured Swiper Carousel */}
        <div className="pb-16 px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-rose/30 dark:border-midnight-border shadow-wedding-lg bg-white dark:bg-midnight-card p-3 sm:p-4 transition-colors"
          >
            <Swiper
              modules={[SwiperNav, SwiperPagination, SwiperAutoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              className="rounded-2xl overflow-hidden"
            >
              {weddingConfig.gallery.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="relative aspect-[16/10] w-full cursor-pointer group overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-midnight/85 dark:from-midnight/90 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6 justify-between text-white dark:text-darktext-primary">
                      <p className="font-serif italic text-lg sm:text-xl">{photo.caption}</p>
                      <span className="p-2 rounded-full bg-rose/80 dark:bg-champagne dark:text-midnight backdrop-blur-sm shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="pb-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              The Complete Collection
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-plum dark:text-darktext-primary font-medium">
              All Moments of Love
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingConfig.gallery.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding hover:shadow-wedding-lg hover:border-rose dark:hover:border-champagne transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-plum-midnight/30 dark:bg-midnight/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="p-3 rounded-full bg-rose/90 dark:bg-champagne dark:text-midnight backdrop-blur-sm shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="font-serif italic text-base text-plum dark:text-darktext-primary group-hover:text-rose dark:group-hover:text-champagne transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={gallerySlides}
        />
      </section>

      {/* =========================================================================
          SECTION 5: BLESSINGS (Core Scripture, Verses, Prayer & WhatsApp Share)
          ========================================================================= */}
      <section id="blessings" className="scroll-mt-20 border-t border-rose/20 dark:border-midnight-border">
        {/* Core Scripture Focal Card */}
        <div className="pt-20 pb-16 px-4 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding relative overflow-hidden transition-colors"
          >
            <div className="text-rose dark:text-champagne text-3xl font-serif mb-3" aria-hidden="true">
              ✝
            </div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-3">
              Foundational Covenant Scripture
            </p>
            <div className="w-16 h-[1.5px] bg-rose/50 dark:bg-champagne/50 mx-auto mb-6" />

            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-plum dark:text-darktext-primary leading-relaxed mb-4">
              “{weddingConfig.coreVerse.quote}”
            </blockquote>

            <cite className="font-sans text-sm tracking-widest text-rose dark:text-champagne uppercase font-bold not-italic">
              — {weddingConfig.coreVerse.reference}
            </cite>
          </motion.div>
        </div>

        {/* 6 Scriptures on Christian Marriage */}
        <div className="py-16 px-4 bg-cream/40 dark:bg-midnight-subtle border-y border-rose/20 dark:border-midnight-border transition-colors">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
                Biblical Foundations
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-plum dark:text-darktext-primary font-medium">
                Verses on Christian Marriage
              </h3>
              <div className="w-16 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto my-3" />
              <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary max-w-md mx-auto">
                Sacred scripture illuminating selflessness, patient devotion, and holy covenant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingConfig.scriptures.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-7 rounded-2xl bg-white dark:bg-midnight-card border border-rose/25 dark:border-midnight-border shadow-wedding flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="w-9 h-9 rounded-full bg-rose-light dark:bg-midnight-elevated text-rose dark:text-champagne flex items-center justify-center mb-4">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <blockquote className="font-serif italic text-base sm:text-lg text-plum dark:text-darktext-primary leading-relaxed mb-6">
                      “{item.quote}”
                    </blockquote>
                  </div>
                  <cite className="block text-xs uppercase tracking-widest text-rose dark:text-champagne font-bold not-italic pt-4 border-t border-rose/15 dark:border-midnight-border">
                    {item.reference}
                  </cite>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Devotional Prayer for the Couple */}
        <div className="py-20 px-4 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-midnight-card border border-rose/30 dark:border-midnight-border shadow-wedding relative transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-rose-light dark:bg-midnight-elevated text-rose dark:text-champagne flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 fill-rose dark:fill-champagne text-rose dark:text-champagne" />
            </div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              A Prayer for Vasu &amp; Mercy Havilah
            </p>
            <h3 className="font-serif text-3xl text-plum dark:text-darktext-primary font-medium mb-4">
              Walking in His Sovereign Grace
            </h3>
            <div className="w-16 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto mb-6" />

            <p className="font-serif italic text-lg sm:text-xl text-plum-muted dark:text-darktext-secondary leading-relaxed max-w-2xl mx-auto">
              “Heavenly Father, we thank You for joining Vasu and Mercy Havilah in holy matrimony.
              May their home be filled with Your peace, their hearts with Your unconditional love,
              and their days with joyful praise. Grant them patience, wisdom, and steadfast faithfulness,
              that through their marriage Your light may shine brightly to all. In the precious name of Jesus Christ, Amen.”
            </p>
          </motion.div>
        </div>

        {/* Final WhatsApp Share Station */}
        <div className="py-16 px-4 bg-cream-soft dark:bg-midnight-subtle border-t border-rose/20 dark:border-midnight-border text-center transition-colors">
          <div className="max-w-2xl mx-auto">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-olive dark:text-darksage font-bold mb-2">
              Share the Blessing
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-plum dark:text-darktext-primary mb-3">
              Share This Invitation with Family &amp; Friends
            </h3>
            <p className="font-sans text-sm text-plum-muted dark:text-darktext-secondary max-w-lg mx-auto mb-6">
              Forward our wedding invitation card and celebration details on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppShare}
              type="button"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Share2 className="w-4 h-4" /> Share on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
