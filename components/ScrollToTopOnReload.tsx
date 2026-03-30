"use client";

import { useEffect } from "react";

export default function ScrollToTopOnReload() {
  useEffect(() => {
    // Browsers often have "scroll restoration" enabled by default.
    // To reliably scroll to top on reload, we first disable it.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Re-enable for subsequent navigations if needed (usually manual is fine for SPA)
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return null;
}
