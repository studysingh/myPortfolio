import { useEffect, useState } from "react";

export function useScrollTrigger(offset = 40) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const onScroll = () => setTriggered(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return triggered;
}

export function scrollToSection(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}
