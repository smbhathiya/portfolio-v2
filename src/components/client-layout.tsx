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
        document.body.classList.add('js-loaded');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAppLoaded]);

  // Handle client-side navigation focus management for accessibility
  useEffect(() => {
    const handleRouteChange = () => {
      // Set focus to the main content area for screen readers
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('tabIndex', '-1');
        mainContent.focus();
        mainContent.removeAttribute('tabIndex');
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
    <div 
      className={`transition-opacity duration-500 ${
        isTransitionComplete ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
