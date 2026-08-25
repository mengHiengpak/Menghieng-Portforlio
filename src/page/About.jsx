import { useRef, useState } from "react";
import CardList from "../assets/CardList";
import { motion } from "motion/react"
import { Globe } from "../components/Globe";
import { Framework } from "../components/Framework";

function About() {
  const cardBoxRef = useRef(null);
const [isCopied, setIsCopied] = useState(false);
  const handlerCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Menghiengpak096@gmail.com");
      setIsCopied(true);

      // Revert button text back after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  }

  return (
    <>
      <section id="aboutme" className="scroll-mt-24">
        <h2 className="text-4xl md:pl-27 pl-7 pb-5">About Me </h2>
        <div className=" min-h-screen text-white pt-2 md:pt-2 pl-6 pr-6 md:pl-12 md:pr-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] ">
          {/* CARD 1: Large Intro Box (Spans 2 rows vertically) */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:row-span-2  bg-[#1e2245] border border-gray-800 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative group">
            {/* Top Graphic Placeholder / Image */}
            <div className="[perspective:1000px] flex justify-center items-center pt-2">
              <div className="[transform:rotateX(45deg)_rotateY(-1deg)_rotateZ(45deg)] shadow-2xl shadow-black rounded-2xl overflow-hidden border border-slate-700/50">
                <img
                  src="/coding.png"
                  alt="Code Screenshot"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="z-10 mt-2 md:mt-4">
              <h2 className=" text-sm md:text-xl font-bold mb-2">Hi, I'm Pak Menghieng</h2>
              <p className="text-gray-400 text-sm">
                Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic and responsive software and web applications.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Floating Tags / Skills (Spans 2 columns) */}
          <motion.div whileHover={{ scale: 1.02 }} ref={cardBoxRef} className="md:col-span-2 bg-[#12131a] border border-gray-800 rounded-3xl p-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-3xl md:text-6xl tracking-widest text-white">
              CODE IS CRAFT
            </div>

            <CardList containerRef={cardBoxRef} />

          </motion.div>

          {/* CARD 3: Time Zone Globe (Spans 2 columns) */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 bg-[#12131a] border border-gray-800 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="z-10 max-w-sm">
              <h3 className="text-lg font-bold">Time Zone</h3>
              <p className="text-gray-400 text-sm mt-2">
                I'm based in Mars, and open to remote work worldwide.
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%] md:left-[60%] md:top-[5%]">
              <Globe/>
            </figure>
          </motion.div>

          {/* CARD 4: CTA / Contact (1 column, featured color) */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 flex flex-col justify-between items-center text-center">
            <h3 className="text-xl font-bold leading-tight mt-4">
              Do you want to start a project together?
            </h3>
            <button
              onClick={handlerCopyEmail}
              className="w-full py-3 px-4 bg-black/80 hover:bg-black transition-colors rounded-full text-sm font-semibold flex items-center justify-center gap-2 mt-4 text- transition-all duration-300 hover:scale-105"
            >
              {isCopied ? (
                <>
                  <span>✅</span> Email Address Copied!
                </>
              ) : (
                <>
                  <span>📋</span> Copy Email Address
                </>
              )}
            </button>
          </motion.div>

          {/* CARD 5: Tech Stack Orbit (Spans 2 columns) */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 bg-[#12131a] border border-gray-800 rounded-3xl p-6 flex justify-between items-center relative overflow-hidden">
            <div className="max-w-xs z-10 pt-20 md:pt-1">
              <h3 className="text-lg font-bold">Tech Stack</h3>
              <p className="text-gray-400 text-sm mt-2">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
              </p>
            </div>
            {/* Tech Icons Graphic Container */}
            <Framework />
          </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About