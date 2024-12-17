"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useState } from "react";

const memories = [
  {
    image: "https://images.unsplash.com/photo-1513279922550-250c2129b13a",
    caption: "idk!!! mujhe nhi pata",
    rotation: -3,
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    caption: "idk!!! mujhe nhi pata",
    rotation: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
    caption: "idk!!! mujhe nhi pata",
    rotation: -2,
  },
  {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    caption: "idk!!! mujhe nhi pata",
    rotation: 3,
  },
];

export function Memories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <Camera className="w-12 h-12 mx-auto text-pink-500 mb-4" />
        <h2 className="text-4xl handwritten gradient-text">
          Tumne apni pics nhi di... nhi toh niche tumhari pics lagi hoti
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-6">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              y: 50,
              rotateZ: index % 2 === 0 ? -10 : 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotateZ: memory.rotation,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.2,
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="polaroid transform-gpu"
            style={{ "--rotation": `${memory.rotation}deg` } as any}
          >
            <motion.div
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                transition: { duration: 0.4 },
              }}
            >
              <img
                src={memory.image}
                alt={memory.caption}
                className="w-full h-48 object-cover rounded-sm"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0.8,
                transition: { duration: 0.4 },
              }}
              className="mt-4 text-center handwritten text-gray-700"
            >
              {memory.caption}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
