"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface QuickRepliesProps {
  replies: string[];
  onSelect: (reply: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  const [clicked, setClicked] = useState(false);

  if (clicked) return null;

  const handleClick = (reply: string) => {
    setClicked(true);
    onSelect(reply);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2 mt-2"
    >
      {replies.map((reply, index) => (
        <motion.button
          key={index}
          variants={itemVariants}
          onClick={() => handleClick(reply)}
          className="px-3 py-1.5 text-xs font-medium bg-white border border-[#E8630A] text-[#E8630A] rounded-full hover:bg-[#E8630A] hover:text-white transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {reply}
        </motion.button>
      ))}
    </motion.div>
  );
}
