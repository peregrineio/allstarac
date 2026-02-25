"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Award, ShieldCheck, Users, Phone, Quote, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  {
    icon: Shield,
    title: "State Licensed",
    stat: "TACLB23470E",
    description: "Texas HVAC contractor license",
  },
  {
    icon: Award,
    title: "BBB Accredited",
    stat: "A+",
    description: "Better Business Bureau rating",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    stat: "100%",
    description: "Liability and workers' comp coverage",
  },
];

const values = [
  {
    number: "01",
    title: "Honesty First",
    description: "No hidden fees. No surprise charges. No pressure. Ever.",
  },
  {
    number: "02",
    title: "Quality Work",
    description: "Every job done right the first time, backed by our guarantee.",
  },
  {
    number: "03",
    title: "Family Values",
    description: "We treat your home the way we'd want ours treated.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-midnight py-20 md:py-28 px-4 relative overflow-hidden">
        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-6"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Meet the Family
            <br />
            <span className="text-copper">Behind Allstar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Leo and Gicela built Allstar on a simple belief: Houston homeowners
            deserve honest HVAC service at a fair price.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-copper/10 text-copper text-sm font-semibold uppercase tracking-wider mb-4">
                Our Story
              </span>

              <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-6">
                Why We Started Allstar
              </h2>

              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  After years working in the HVAC industry, Leo saw the same
                  problems over and over — hidden fees, aggressive upselling, and
                  homeowners who felt taken advantage of.
                </p>
                <p>
                  In 2006, he and his wife Gicela started Allstar to do things differently.
                  For nearly 20 years, we&apos;ve kept it simple: what we quote is what you pay.
                  We explain everything before we start. We never push services you don&apos;t need.
                </p>
                <p>
                  We&apos;re not a franchise. We&apos;re not a corporation. We&apos;re a Houston
                  family serving Houston families. When you call Allstar, you&apos;re
                  talking to the people who own and run this business — and that
                  makes all the difference.
                </p>
                <p>
                  <strong>We work on all brands</strong> — if it heats or cools your home, we service it.
                </p>
                <p className="text-sm italic">
                  Note: We do not service commercial chillers.
                </p>
              </div>
            </motion.div>

            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-muted border-2 border-border flex flex-col items-center justify-center relative">
                <Users className="w-20 h-20 text-steel/30 mb-4" />
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Leo & Gicela — Photo Coming Soon
                </p>

                {/* Corner accents */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-copper" />
                <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-copper" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Licensed. Insured. Accredited.
            </h2>
            <p className="text-muted-foreground">Your protection is our priority.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {credentials.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white border-2 border-border p-6 text-center hover:border-midnight transition-colors hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]"
              >
                <div className="mx-auto mb-4 w-14 h-14 bg-copper/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-copper" />
                </div>
                <div className="font-heading text-2xl text-midnight mb-1">
                  {item.stat}
                </div>
                <h3 className="font-semibold text-midnight mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="text-center">
                <span className="font-heading text-5xl text-copper/30 block mb-2">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl text-midnight mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-copper p-8 md:p-12 relative"
          >
            <Quote className="absolute top-4 right-4 w-16 h-16 text-white/20" />

            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Our Promise to You
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-white/90 font-body mb-8">
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                We answer our own phone — no call centers.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                We show up on time — every time.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                We quote before we start — no surprises.
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                We do the job right — no shortcuts.
              </p>
            </div>

            <div className="pt-6 border-t border-white/30">
              <p className="text-white font-semibold text-lg">— Leo & Gicela</p>
              <p className="text-white/70 text-sm">Owners, Allstar AC & Heating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Work with a Team You Can Trust?
          </h2>
          <p className="text-white/80 mb-8 font-body">
            Experience the Allstar difference — honest service from a family that cares.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-midnight hover:bg-midnight/90 text-white font-semibold h-14 px-8"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold h-14 px-8"
            >
              <a href="tel:7139437283">
                <Phone className="mr-2 h-5 w-5" />
                Call: 713-943-7283
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
