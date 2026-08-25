
import Card from '../components/Card'

function CardList({containerRef}) {
  return (
    <>
    <Card containerRef={containerRef} style={{rotate: "75deg", top:"30%", left:"20%"}} text="GSAPS" />
    <Card containerRef={containerRef} style={{rotate: "-30deg", top:"60%", left:"45%"}} text="SOLID" />
    <Card containerRef={containerRef} style={{rotate: "90deg", top:"30%", left:"70%"}} text="DESIGN PATTERN" />
    <Card containerRef={containerRef} style={{rotate: "-45deg", top:"55%", left:"0%"}} text="DESIGN PRICIPLES" />
    <Card containerRef={containerRef} style={{rotate: "20deg", top:"10%", left:"38%"}} text="SRP" />
    <Card containerRef={containerRef} style={{rotate: "14deg", top:"58%", left:"68%"}} image="/image/9200583.webp" />
    <Card containerRef={containerRef} style={{rotate: "16deg", top:"79%", left:"60%"}} image="/image/C-Sharp-Tutorials.png" />
    <Card containerRef={containerRef} style={{rotate: "18deg", top:"25%", left:"65%"}} image="/image/cq5dam.web.1280.1280.png" />
    <Card containerRef={containerRef} style={{rotate: "19deg", top:"39%", left:"40%"}} image="/image/e42a7be2-890a-4bd2-accf-306e53ccebbd.png" />
    <Card containerRef={containerRef} style={{rotate: "13deg", top:"29%", left:"5%"}} image="/image/mongodb-logo-png_seeklogo-481256-removebg-preview.png" />
    <Card containerRef={containerRef} style={{rotate: "25deg", top:"18%", left:"86%"}} image="/image/next_js_logo_icon_145038.webp" />
    <Card containerRef={containerRef} style={{rotate: "30deg", top:"49%", left:"18%"}} image="/image/PostgreSQL-Logo.wine.png" />
    <Card containerRef={containerRef} style={{rotate: "80deg", top:"30%", left:"49%"}} image="/image/React_(web_framework)-Logo.wine.png" />
    <Card containerRef={containerRef} style={{rotate: "70deg", top:"64%", left:"87%"}} image="/image/JavaScript-logo.png" />
    <Card containerRef={containerRef} style={{rotate: "70deg", top:"34%", left:"57%"}} image="/image/Git_icon.svg.webp" />
    <Card containerRef={containerRef} style={{rotate: "70deg", top:"14%", left:"29%"}} image="/image/typescript_plain_logo_icon_146316.webp" />
    <Card containerRef={containerRef} style={{rotate: "70deg", top:"60%", left:"29%"}} image="/image/25231.png" />
    <Card containerRef={containerRef} style={{rotate: "70deg", top:"10%", left:"10%"}} image="/image/images-removebg-preview.png" />
    </>
  )
}

export default CardList