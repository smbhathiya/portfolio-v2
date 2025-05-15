"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuState(false);
  };
  
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-4 max-w-6xl px-6 transition-all duration-300 lg:px-8",
            isScrolled
              ? "bg-background/70 rounded-3xl border shadow-sm backdrop-blur-lg"
              : "bg-transparent"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold gradient-text">BL</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block p-2 cursor-pointer lg:hidden hover:bg-primary/10 rounded-full transition-colors"
              >
                <Menu className={`size-5 duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : ''}`} />
                <X className={`absolute inset-0 m-auto size-5 duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
              </button>
            </div>

            <div className="hidden lg:block">
              <ul className="flex gap-1 text-sm">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 rounded-full transition-all duration-300 block",
                          isActive 
                            ? "text-primary bg-primary/10 font-medium" 
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile menu */}
            <div 
              className={cn(
                "fixed inset-0 bg-background/80 backdrop-blur-sm z-10 transition-all duration-300 lg:hidden",
                menuState ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
            >
              <div 
                className={cn(
                  "absolute right-0 top-0 h-full w-[80%] max-w-sm bg-card p-6 shadow-xl transition-transform duration-300 flex flex-col",
                  menuState ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="mt-14 flex flex-col h-full">
                  <ul className="space-y-1 py-4">
                    {menuItems.map((item, index) => {
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <li key={index} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={cn(
                              "block px-4 py-3 rounded-lg transition-all duration-200",
                              isActive 
                                ? "bg-primary/10 text-primary font-medium" 
                                : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                            )}
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
