"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./animated-text";

interface LetterContentProps {
  onClose: () => void;
}

export function LetterContent({ onClose }: LetterContentProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg"
    >
      <div className="handwritten space-y-6 text-lg">
        <AnimatedText text="Dearest Tanu," delay={0.5} />

        <AnimatedText
          text="Sabse pehle toh Happy 18th Birthday! I hope you achieve everything you want in life. Ek acche se college me chali jao... aur thoda padhayi pe dhyan do... timepass and procrastination kam karo. "
          delay={1.2}
        />

        <AnimatedText
          text="Thoda time ki kami chal rahi aajkal, but I thought it would be a great idea to do something unique... That's why I decided to make this small website dedicated to celebrating your birthday."
          delay={7.4}
        />

        <AnimatedText
          text="Mere paas bohot kuch bolne ko nhi hai, but itna bolna chahenge ki you are perfect just the way you are. After spending some time, I now clearly understand that you do have potential... bass iss potential ko utilize karna sikho. I'm always here to help if you need anything."
          delay={14.6}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 23.8, duration: 0.7 }}
          className="text-right"
        >
          <AnimatedText text="With lots of love," delay={4.8} />
          <AnimatedText text="Your friend," delay={4.8} />
          <AnimatedText text="Om," delay={4.8} />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5.2, duration: 0.7 }}
            className="text-pink-600 inline-block"
          >
            ❤️
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.7 }}
        className="mt-8 text-center"
      >
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-700"
        >
          Close letter
        </button>
      </motion.div>
    </motion.div>
  );
}
