import { Link, useRouterState } from '@tanstack/react-router';
import { clinicConfig } from '../../config/clinicConfig';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HeaderNav() {
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-medical-blue text-white font-bold text-lg">
            Z
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-medical-blue">
              {clinicConfig.name}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">Healthcare Excellence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-medical-blue text-white'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${clinicConfig.phone}`}
            className="ml-4 flex items-center space-x-2 rounded-full bg-medical-blue px-4 py-2 text-sm font-medium text-white hover:bg-medical-blue-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-medical-blue text-white'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${clinicConfig.phone}`}
              className="flex items-center justify-center space-x-2 rounded-full bg-medical-blue px-4 py-3 text-sm font-medium text-white hover:bg-medical-blue-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
