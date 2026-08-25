// 1. Updated Card Component with dynamic className support
import { motion } from "motion/react"

function Card({ text, style, image, containerRef }) {
  return image && !text ? (
    <motion.img
      className="absolute w-10 md:w-18 cursor-grab"
      src={image}
      alt={text || "tech icon"}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      style={style}
      className="absolute py-2 px-4 md:py-3 md:px-8 bg-slate-800/80 border border-slate-700 rounded-full text-sm font-semibold flex items-center justify-center text-white whitespace-nowrap shadow-lg"
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  )
}

export default Card
