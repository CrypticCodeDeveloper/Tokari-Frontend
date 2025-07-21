'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { BorderBeam } from '@/components/ui/border-beam.jsx';
import { CardHoverEffect } from '@/components/ui/pulse-card.jsx';
import {
  Rocket,
  Target,
} from 'lucide-react';

export default function About() {
  const aboutData = {
    title: '🧩 About Tokari Core',
    subtitle:
      'We started Tokari because integrating AI into your product shouldn’t feel like solving a puzzle with missing pieces. It should be fast, affordable, and developer-friendly — with zero token anxiety.',
    mission:
      'We believe AI should empower creativity, not slow it down. Tokari Core exists to remove the barriers between great ideas and real-world AI-powered products.',
    vision:
      'To become the go-to AI infrastructure layer for developers around the world — powering a new generation of intelligent apps without friction, limits, or gatekeeping.',
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef(null);


  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section id='about' className="relative w-full overflow-hidden pt-20">
     <Spotlight
  gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(217, 100%, 60%, 0.08) 0%, hsla(220, 100%, 55%, 0.04) 50%, hsla(217, 100%, 45%, 0) 80%)"
  gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(215, 100%, 85%, 0.08) 0%, hsla(220, 100%, 55%, 0.04) 80%, transparent 100%)"
  gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 80%, 0.06) 0%, hsla(225, 100%, 80%, 0.06) 80%, transparent 100%)"
/>


      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-blue-500 via-blue-500/40 to-transparent"
              />

              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-primary" />
              </div>

              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-green p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-blue-500 via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
