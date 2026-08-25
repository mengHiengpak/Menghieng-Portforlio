import { useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ManTypingPc } from "../models/ManTypingPc"
import { OrbitControls } from "@react-three/drei"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { TypingAnimation } from "@/registry/magicui/typing-animation"

gsap.registerPlugin(SplitText)

function Home() {

    const handleDownloadResume = () => {
        const pdfUrl = "/resume/Pak_Menghieng_Resume.pdf"

        const link = document.createElement("a")
        link.href = pdfUrl
        link.target = "_blank"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleOpenContact = () => {
        const url = "https://t.me/Pak_Menghieng"
        const link = document.createElement('a')
        link.href = url
        link.target ="_blank"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const textRef = useRef(null)
    const paraRef = useRef(null)
    const figureRef = useRef(null)
    const [inView, setInView] = useState(true)

    useEffect(() => {
        if (!figureRef.current) return
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting)
        )
        observer.observe(figureRef.current)
        return () => observer.disconnect()
    }, [])


    useGSAP(() => {
        if (!textRef.current) return
        const split = SplitText.create(textRef.current, { type: "chars" })
        gsap.from(split.chars, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            ease: "power2.out",
            repeat: 100,
            yoyo: true,
        })
    }, [])

    useGSAP(() => {
        if (!paraRef.current) return
        const split = SplitText.create(paraRef.current, { type: "lines" })
        gsap.from(split.lines, {
            duration: 1,
            y: 100,         // animate from 100px below
            autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
            stagger: 0.05,
        })
    }, [])


    return (
        <div id="home" className='grid grid-cols-1 gap-1 md:grid-cols-2'>
            <div className='p-5 md:p-27 '>
                <TypingAnimation className='text-3xl md:text-4xl'>{"Hi all👋 i’m Pak Menghieng"}</TypingAnimation>
                <p ref={paraRef} className='pt-2 md:text-xl md:pt-3'>Full-Stack Web Developer & CS Student at AEU. <br />
                Silver Medalist at the World Vocational College Skills Competition (SEA). Specializedin React, <br />
                Next.js,  Node.js, C#, and PostgreSQL to create fast, <br />
                scalable, and modern web applications.</p>

                <div className='flex gap-4 pt-1'>
                    <a href="https://t.me/Pak_Menghieng" aria-label="telegram"><img className='w-10 h-10 mt-5' src="/Telegram_logo.svg.webp" alt="telegram" /></a>
                    <a href="https://github.com/mengHiengpak" aria-label="github"><img className='w-10 h-10 mt-5' src="/25231.png" alt="github" /></a>
                    <a href="https://www.facebook.com/Menghiengjr22.grea" aria-label="facebook"><img className='w-10 h-10 mt-5' src="/Facebook_f_logo_(2021).svg.webp" alt="facebook" /></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkvkrRkJJhxqwrJnqBZmfkVFhTnSWzxGvNNshrsfQpwzShlWFxBZLdPwVlhlzrQLFFL" aria-label="google"><img className='w-12 h-12 mt-4' src="/google-logo-transparent-background-free-png.webp" alt="google" /></a>
                </div>

                <div className='flex gap-3 md:gap-5 pt-5'>
                    <button onClick={handleOpenContact} className='p-1 w-30 md:p-3 md:w-40 border border-amber-500 bg-amber-500 rounded-lg hover:scale-105 transition-all duration-300 hover:text-white'>Contact Me</button>
                    <button onClick={handleDownloadResume} className='p-1 w-30 md:p-3 md:w-40 border border-amber-500 bg-amber-500 rounded-lg hover:scale-105 transition-all duration-300 hover:text-white'>My Resume</button>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <figure ref={figureRef} className="w-full h-[56vh] md:w-[55vw] md:h-screen lg:w-[65vw] xl:w-[70vw]">
                    <Canvas
                        frameloop={inView ? "always" : "never"}
                        dpr={[1, 1.5]}
                        camera={{ position: [8, 2, 8], fov: 45 }}
                        gl={{ antialias: true, powerPreference: "high-performance" }}
                        onCreated={({ camera }) => camera.lookAt(0, 2, 0)}
                    >
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 10, 5]} intensity={1} />
                        <ManTypingPc scale={0.4} position={[0, 0, 0]} />
                        <OrbitControls enableRotate enablePan enableZoom={false} />
                    </Canvas>
                </figure>
            </div>
        </div>
    )
}

export default Home
