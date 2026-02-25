"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Shield, Award } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "713-943-7283",
    href: "tel:7139437283",
    secondary: "We answer our phone",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "allstar.ac.heat@gmail.com",
    href: "mailto:allstar.ac.heat@gmail.com",
    secondary: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Service Area",
    primary: "Greater Houston, TX",
    href: "/service-areas",
    secondary: "Clear Lake, Friendswood, Webster & more",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-midnight py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-copper/20 border border-copper/40 text-copper text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Need service or have a question? We&apos;re here to help — no pressure,
            no upselling.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-border p-6 text-center hover:border-midnight transition-all hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]"
              >
                <div className="mx-auto mb-4 w-14 h-14 bg-copper/10 flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="font-heading text-lg text-midnight mb-2">{method.title}</h3>
                <a
                  href={method.href}
                  className="text-copper font-semibold text-lg hover:text-copper-light transition-colors block mb-1"
                >
                  {method.primary}
                </a>
                <p className="text-muted-foreground text-sm">
                  {method.secondary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl md:text-3xl text-midnight mb-2">
                Request Service
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="bg-white border-2 border-border p-6 md:p-8">
                <ContactForm />
              </div>
            </motion.div>

            {/* Sidebar - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Service Hours */}
              <div className="bg-white border-2 border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-copper" />
                  <h3 className="font-heading text-lg text-midnight">Service Hours</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Mon - Fri</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="text-copper font-medium">Emergency</span>
                    <span className="text-copper font-semibold">Available 24/7</span>
                  </li>
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-white border-2 border-border p-6">
                <h3 className="font-heading text-lg text-midnight mb-4">Credentials</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-copper" />
                    <span>Licensed: TACLB23470E</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Award className="w-4 h-4 text-copper" />
                    <span>BBB Accredited (A+ Rating)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-copper" />
                    <span>Fully Insured</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Box */}
              <div className="bg-[hsl(0,80%,45%)] p-6 relative overflow-hidden">
                {/* Warning stripes */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,hsl(45,100%,50%),hsl(45,100%,50%)_10px,hsl(0,80%,45%)_10px,hsl(0,80%,45%)_20px)]" />

                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-white" />
                  <h3 className="font-heading text-xl text-white">
                    Emergency Service
                  </h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  AC out in the Houston heat? Don&apos;t wait — call us now:
                </p>
                <a
                  href="tel:7139437283"
                  className="inline-flex items-center gap-2 bg-white text-[hsl(0,80%,45%)] font-bold text-xl px-6 py-3 hover:bg-yellow-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  713-943-7283
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
