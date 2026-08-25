import { OrbitingCircles } from "../components/ui/orbiting-circles"
import cppLogo from "../assets/logo/C++.png"
import cLogo from "../assets/logo/C.png"
import csharpLogo from "../assets/logo/c_-removebg-preview.png"
import ciscoLogo from "../assets/logo/Cisco_logo_blue_2016.svg.webp"
import cssLogo from "../assets/logo/css.png"
import dockerLogo from "../assets/logo/docker.png"
import dotnetLogo from "../assets/logo/dotnet-removebg-preview.png"
import expressLogo from "../assets/logo/express.png"
import figmaLogo from "../assets/logo/figma.webp"
import gitLogo from "../assets/logo/git-removebg-preview.png"
import htmlLogo from "../assets/logo/html-removebg-preview.png"
import jsLogo from "../assets/logo/JavaScript-Logo.png"
import mongodbLogo from "../assets/logo/mongodb-removebg-preview.png"
import nextLogo from "../assets/logo/next-js.png"
import nodeLogo from "../assets/logo/node-removebg-preview.png"
import phpLogo from "../assets/logo/PHP-removebg-preview.png"
import pgLogo from "../assets/logo/postgresql-removebg-preview.png"
import reactLogo from "../assets/logo/react.png"
import renderLogo from "../assets/logo/render-removebg-preview.png"
import sqlLogo from "../assets/logo/sql-server.png"
import tsLogo from "../assets/logo/typescript.webp"
import tailwindcss from "../assets/logo/tailwind-css-logo-png_seeklogo-354675-removebg-preview.png"
import restApi from "../assets/logo/api-settings-removebg-preview.png"
import Gsap from "../assets/logo/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png"
import framemotion from "../assets/logo/frame.png"

const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="size-full object-contain duration-300 rounded-sm hover:scale-110"
  />
)

const frameworkIcons = [
  { src: cppLogo, alt: "C++" },
  { src: cLogo, alt: "C" },
  { src: csharpLogo, alt: "C#" },
  { src: ciscoLogo, alt: "Cisco" },
  { src: cssLogo, alt: "Css" },
  { src: dockerLogo, alt: "docker" },
  { src: dotnetLogo, alt: ".net" },
  { src: expressLogo, alt: "express" },
  { src: figmaLogo, alt: "figma" },
  { src: gitLogo, alt: "git" },
  { src: htmlLogo, alt: "html" },
  { src: jsLogo, alt: "js" },
  { src: mongodbLogo, alt: "mongodb" },
  { src: nextLogo, alt: "next" },
  { src: nodeLogo, alt: "node" },
  { src: phpLogo, alt: "php" },
  { src: pgLogo, alt: "pg" },
  { src: reactLogo, alt: "react" },
  { src: renderLogo, alt: "render" },
  { src: sqlLogo, alt: "sql" },
  { src: tsLogo, alt: "ts" },
  { src: tailwindcss, alt: "tc" },
  { src: restApi, alt: "ra" },
  { src: Gsap, alt: "gs" },
  { src: framemotion, alt: "fm" },
]

export function Framework() {
  return (
    <div className="absolute left-[5%] md:left-[50%] flex h-300 w-200 flex-col items-center justify-center overflow-hidden pl-64 duration-300">
      {/* រង្វង់ក្រៅ (Outer Circle) */}
{/* រង្វង់ក្រៅ (Outer Circle) */}
<OrbitingCircles iconSize={40} radius={180} speed={1}>
  {frameworkIcons.slice(0, 30).map((icon) => (
    <Icon key={icon.alt} src={icon.src} alt={icon.alt} />
  ))}
</OrbitingCircles>

{/* រង្វង់ក្នុង (Inner Circle) - ពង្រួមឱ្យតូចបំផុត (iconSize=16, radius=45) */}
<OrbitingCircles iconSize={30} radius={100} reverse speed={1}>
  {frameworkIcons.map((icon) => (
    <Icon key={icon.alt} src={icon.src} alt={icon.alt} />
  ))}
</OrbitingCircles>
    </div>
  )
}
