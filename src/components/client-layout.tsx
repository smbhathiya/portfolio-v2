"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  useEffect(() => {
    // Set loaded state when document is fully loaded
    if (document.readyState === "complete") {
      setIsAppLoaded(true);
    } else {
      const handleLoad = () => setIsAppLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Add a slight delay after loading to ensure smooth transition
  useEffect(() => {
    if (isAppLoaded) {
      const timer = setTimeout(() => {
        setIsTransitionComplete(true);
        // Add a class to body for progressive enhancement
        document.body.classList.add("js-loaded");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAppLoaded]);

  // Handle client-side navigation focus management for accessibility
  useEffect(() => {
    const handleRouteChange = () => {
      // Set focus to the main content area for screen readers
      const mainContent = document.querySelector("main");
      if (mainContent) {
        mainContent.setAttribute("tabIndex", "-1");
        mainContent.focus();
        mainContent.removeAttribute("tabIndex");
      }
    };

    // This would typically use a router event in a full setup
    if (isTransitionComplete) {
      handleRouteChange();
    }
  }, [isTransitionComplete]);

  if (!isAppLoaded) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(16,185,129,0.14),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 soft-grid opacity-[0.22]" />
        <div className="absolute inset-0 noise-overlay opacity-25" />
      </div>

      <div
        className={`relative transition-opacity duration-500 ${
          isTransitionComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
