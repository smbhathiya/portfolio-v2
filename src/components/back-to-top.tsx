'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}