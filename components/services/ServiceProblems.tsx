"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Wind,
  Volume2,
  Power,
  Droplets,
  Zap,
  Gauge,
  Snowflake,
  Flame,
  AlertTriangle,
  ThermometerSun,
  Fan,
  CircleDot,
  Settings,
  Calendar,
  Wrench,
  TrendingUp,
  DollarSign,
  RefreshCw,
  LucideIcon,
} from "lucide-react";

// Icon map for string-based icon names
const iconMap: Record<string, LucideIcon> = {
  Thermometer,
  Wind,
  Volume2,
  Power,
  Droplets,
  Zap,
  Gauge,
  Snowflake,
  Flame,
  AlertTriangle,
  ThermometerSun,
  Fan,
  CircleDot,
  Settings,
  Calendar,
  Wrench,
  TrendingUp,
  DollarSign,
  RefreshCw,
};

interface Problem {
  icon: string;
  name: string;
  description: string;
}

interface ServiceProblemsProps {
  title: string;
  problems: Problem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ServiceProblems({ title, problems }: ServiceProblemsProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-midnight text-center mb-12"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {problems.map((problem) => {
            const IconComponent = iconMap[problem.icon] || AlertTriangle;
            return (
              <motion.div
                key={problem.name}
                variants={itemVariants}
                className="bg-white border-2 border-border p-5 hover:border-midnight transition-all hover:shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-copper/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-midnight mb-1">{problem.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
