"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, ExternalLink } from "lucide-react";

const testimonials = [
  {
    quote: "Honest, fair pricing. Leo showed up on time and explained everything before starting. No surprise bill. Finally an HVAC company I can trust.",
    author: "Maria R.",
    location: "Clear Lake",
    highlight: "No surprise bill",
  },
  {
    quote: "Called in the morning, they were here by lunch. AC was fixed and the price was exactly what they quoted. Will use again.",
    author: "James T.",
    location: "Friendswood",
    highlight: "Same-day service",
  },
  {
    quote: "Family-owned and it shows. They treated us like neighbors, not just customers. Highly recommend Allstar.",
    author: "Sandra K.",
    location: "Webster",
    highlight: "Like neighbors",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-muted relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(220 60% 8%),
            hsl(220 60% 8%) 1px,
            transparent 1px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-copper/10 border border-copper/30 text-copper text-sm font-semibold tracking-widest uppercase mb-4">
            <Star className="w-4 h-4 fill-copper" />
            Google Reviews
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-midnight mb-4">
            Don&apos;t Take
            <br />
            <span className="text-copper">Our Word</span> For It
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-body">
            Real reviews from real Houston homeowners.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full bg-white border-2 border-border hover:border-midnight p-8 transition-all duration-300 group-hover:shadow-[6px_6px_0px_0px_hsl(220,60%,8%)]">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-copper/20 mb-4" />

                {/* Highlight tag */}
                <span className="inline-block px-3 py-1 bg-copper/10 text-copper text-xs font-semibold uppercase tracking-wider mb-4">
                  {testimonial.highlight}
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-copper text-copper"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-midnight font-body leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-midnight">
                      {testimonial.author}
                    </p>
                    <p className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://g.page/allstarac/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-lg text-copper hover:text-copper-light transition-colors group"
          >
            Read More Reviews on Google
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
