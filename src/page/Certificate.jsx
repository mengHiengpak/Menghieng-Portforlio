import { GlyphMatrixDemo } from "../components/GlyphMatrixDemo"
import { certificates } from "../constants"

function Certificate() {
  return (
    <section id="certificates" className="relative min-h-screen overflow-hidden scroll-mt-16 bg-[#0b0d17]">
      {/* Background layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <GlyphMatrixDemo />
      </div>

      {/* Content layer */}
      <div className="relative z-10 pt-24 pb-10 px-6 md:px-12 text-white">
        <h2 className="text-4xl md:pl-15 pl-1 pb-5">My Certificates</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {certificates.map((certi) => (
            <figure
              key={certi.id}
              className="bg-[#12131a] border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 overflow-hidden"
            >
              <img
                src={certi.image}
                alt={certi.title}
                className="max-h-40 object-contain"
              />
              <figcaption className="text-center">
                <p className="font-semibold">{certi.title}</p>
                <p className="text-gray-400 text-sm">{certi.issuer}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
