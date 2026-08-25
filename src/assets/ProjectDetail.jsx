import { motion } from "motion/react";

function ProjectDetail({ project, onClose }) {
  const { title, description, href, Image, tags } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-4 w-full max-w-lg rounded-2xl border border-gray-800 bg-[#12131a] p-6"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img src={Image} alt={title} className="mb-4 h-44 w-full rounded-xl object-cover" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
        
        <div className="mt-3 flex gap-3">
          {tags.map((tag) => (
            <img key={tag.id} src={tag.path} alt={tag.name} title={tag.name} className="w-7 h-7" />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag.id} className="rounded-full border border-gray-700 bg-white/5 px-3 py-1 text-xs text-gray-300">
              {tag.name}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
        >
          Visit Project
        </a>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetail;
