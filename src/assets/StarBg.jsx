import { Particles } from "@/components/ui/particles"

function StarBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Particles color="#1e2245" quantity={180} />
    </div>
  )
}

export default StarBg
