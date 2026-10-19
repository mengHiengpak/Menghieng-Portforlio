import { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import ProjectDetail from "../assets/ProjectDetail";

function Project({ title, description, subDescription, href, Image, tags }) {
  const [hoveredItem, setHoveredItem] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredItem(true)}
        onMouseLeave={() => setHoveredItem(false)}
        className="relative mb-6 flex flex-col gap-5 rounded-2xl border border-neutral-400/40 bg-white/40 px-4 py-6 shadow-md shadow-black/5 md:mb-0 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-10 md:shadow-none"
      >
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-10 -ml-[190px] -mt-[190px] hidden h-[380px] w-[380px] items-center justify-center md:flex"
          style={{ x: smoothX, y: smoothY }}
        >
          <motion.div
            className="rounded-full bg-indigo-500/20 blur-3xl"
            animate={{
              width: hoveredItem ? 380 : 0,
              height: hoveredItem ? 380 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>

        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              key="popup-image"
              initial={{ opacity: 0, scale: 0.6, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ x: smoothX, y: smoothY }}
              className="pointer-events-none fixed top-0 left-0 z-50 -ml-[124px] -mt-[196px] hidden overflow-hidden rounded-xl border border-white/20 shadow-2xl md:block"
            >
              <motion.img
                src={Image}
                alt={title}
                className="h-44 w-62 object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <img
          src={Image}
          alt={title}
          className="h-44 w-full rounded-xl border border-neutral-400/40 object-cover sm:h-56 md:hidden"
        />

        <div className="md:w-auto">
          <p className="text-lg font-medium md:text-2xl md:font-normal">{title}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-amber-600 md:mt-0 md:grid md:grid-cols-10 md:gap-3 md:text-base md:text-amber-500">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowDetail(true)}
          className="flex items-center justify-center gap-1 rounded-full border border-amber-500 bg-amber-500 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 md:w-auto md:rounded-none md:border-0 md:bg-transparent md:py-0 md:text-base md:font-normal md:text-current md:hover:scale-100 md:hover:bg-transparent"
        >
          {`Read Me ->`}
        </button>
      </div>
      <div className="mt-6 hidden bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full md:mt-12 md:block"></div>

      <AnimatePresence>
        {showDetail && (
          <ProjectDetail
            project={{ title, description, subDescription, href, Image, tags }}
            onClose={() => setShowDetail(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Project;
