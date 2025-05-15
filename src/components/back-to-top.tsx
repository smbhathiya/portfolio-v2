'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Debounced scroll handler for better performance
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      if (!isVisible) {
        setIsVisible(true);
      }
    } else {
      if (isVisible) {
        setIsVisible(false);
      }
    }
  }, [isVisible]);

  // Toggle visibility based on scroll position
  useEffect(() => {
    // Debounce scroll event for better performance
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        toggleVisibility();
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [toggleVisibility]);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl hover:bg-primary/20 animate-gpu"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll back to top"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  );
}