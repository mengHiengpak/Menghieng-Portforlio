import { useState, useEffect } from "react";
import {
    FaUser,
    FaFolderOpen,
    FaGraduationCap,
    FaCertificate,
    FaEnvelope
} from "react-icons/fa";

const navLinks = [
    { name: "About Me", href: "#aboutme", icon: <FaUser /> },
    { name: "Project", href: "#projects", icon: <FaFolderOpen /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap /> },
    { name: "Certificate", href: "#certificates", icon: <FaCertificate /> },
    { name: "Contact Me", href: "#contact", icon: <FaEnvelope /> },
];

function UnderNavbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) =>
                document.querySelector(link.href)
            );

            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                if (!section) return;
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="fixed bottom-7 left-1/2 -translate-x-1/2 z-40 w-[80%] max-w-md">

            {/* Centered Floating Bar */}
            <nav className="md:hidden px-6 py-4 flex items-center justify-center gap-10 md:gap-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-full shadow-lg text-white">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                        <a
                        key={link.name}
                        href={link.href}
                        title={link.name}
                        className={`md:hidden flex items-center gap-2 text-lg md:text-xl transition-all duration-200 ${isActive
                            ? "text-blue-400 scale-110 font-semibold"
                            : "text-slate-300 hover:text-blue-400 hover:scale-105"
                            }`}
                            >
                            {link.icon}
                            {/* Optional: Show text only on medium screens and up */}
                            <span className="hidden md:inline text-sm">{link.name}</span>
                        </a>
                    );
                })}
            </nav>
        </footer>
    );
}

export default UnderNavbar;