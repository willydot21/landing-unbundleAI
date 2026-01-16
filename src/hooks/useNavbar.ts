import { useEffect, useState } from "react";

export default function useNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY + 40 > 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return {
    menuOpen,
    setMenuOpen,
    scrolled,
    setScrolled
  };
}