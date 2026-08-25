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
        className="relative flex-wrap items-center justify-between py-10 space-y-14 md:flex md:space-y-0"
      >
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-10 -ml-[190px] -mt-[190px] flex h-[380px] w-[380px] items-center justify-center"
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
              className="pointer-events-none fixed top-0 left-0 z-50 -ml-[124px] -mt-[196px] overflow-hidden rounded-xl border border-white/20 shadow-2xl"
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

        <div>
          <p className="text-xl md:text-2xl">{title}</p>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-10 text-amber-500">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button onClick={() => setShowDetail(true)} className="flex items-center gap-1">
          {`Read Me ->`}
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>

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
