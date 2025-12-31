import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isPersonalPage = location.pathname === '/personal';

  // Section links for Professional page
  const sectionLinks = [
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'projects', label: 'Projects', href: '#projects-section' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'profile', label: 'Profile', href: '#about' },
  ];

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Kranthi <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {/* Section links - only show on Professional page */}
          {!isPersonalPage && (
            <nav className="flex gap-8">
              {sectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      const navHeight = 100;
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="capitalize font-medium hover:text-accent transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Page Toggle Button */}
          <Link
            to={isPersonalPage ? '/' : '/personal'}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[44px] px-6"
          >
            {isPersonalPage ? 'Professional' : 'Personal'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex justify-center items-center"
          >
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-accent text-3xl"
          >
            ✕
          </button>
          
          {/* Section links for mobile - only on Professional page */}
          {!isPersonalPage && sectionLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const element = document.querySelector(link.href);
                  if (element) {
                    const navHeight = 100;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - navHeight,
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              }}
              className="text-white text-2xl font-medium hover:text-accent transition-all"
            >
              {link.label}
            </a>
          ))}
          
          {/* Page Toggle for mobile */}
          <Link
            to={isPersonalPage ? '/' : '/personal'}
            onClick={() => setMobileMenuOpen(false)}
            className="text-accent text-2xl font-medium hover:text-white transition-all"
          >
            {isPersonalPage ? 'Professional' : 'Personal'}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
