import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
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

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    // Detect active section on scroll
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
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Top Header Bar */}
            <nav className="p-2 px-3 md:px-10 flex items-center justify-between bg-white/10 border-b border-white/20 backdrop-blur-md tracking-wide shadow-sm ">
                {/* Logo */}
                <div>
                    <a href="#home"><h1>{"<Pak Menghieng />"}</h1></a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`transition-colors  ${isActive
                                        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                                        : "hover:text-blue-400 "
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Toggle Button */}
                <div className="cursor-pointer md:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl p-1 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </nav>

            {/* Darkened Backdrop Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
                />
            )}

            {/* Slide-out Drawer Panel */}
            <div
                inert={!isOpen}
                aria-hidden={!isOpen}
                className={`fixed top-0 right-0 h-screen w-64 bg-white/10 border-y border-white/20 backdrop-blur-md tracking-wide z-50 transition-transform duration-300 ease-in-out md:hidden shadow-xl p-6 pt-20 flex flex-col gap-4 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`flex items-center justify-start gap-4 w-full py-3 px-4 border tracking-wide rounded-md text-center shadow-md transition-colors ${isActive
                                    ? "bg-blue-400  border-blue-400 text-white"
                                    : "bg-white/10 border-white/20 hover:text-white"
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </header>
    );
}

export default Navbar;