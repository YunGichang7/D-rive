import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const navLinks = [
    { id: "about", label: "회사소개" },
    { id: "technology", label: "기술소개" },
    { id: "roadmap", label: "로드맵" },
    { id: "advantages", label: "경쟁력" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200" : "bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[var(--drive-primary)]">D.rive</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-[var(--drive-primary)] transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[var(--drive-primary)] text-white hover:bg-[var(--drive-primary)]/90"
              >
                문의하기
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left text-gray-700 hover:text-[var(--drive-primary)] transition-colors duration-200 text-lg font-medium"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-[var(--drive-primary)] text-white hover:bg-[var(--drive-primary)]/90 w-full"
                  >
                    문의하기
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
