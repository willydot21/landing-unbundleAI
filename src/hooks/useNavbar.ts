import { useState } from "react";

export default function useNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return {
    menuOpen,
    setMenuOpen,
    scrolled,
    setScrolled
  };
}