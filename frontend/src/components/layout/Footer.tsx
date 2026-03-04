import { clinicConfig } from '../../config/clinicConfig';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'zohan-clinic'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-lg font-bold text-medical-blue mb-4">{clinicConfig.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professional, affordable, and friendly medical services in a clean and modern environment.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-medical-blue transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{clinicConfig.phone}</span>
              </a>
              <a
                href={`mailto:${clinicConfig.email}`}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-medical-blue transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{clinicConfig.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{clinicConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-medical-blue transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-medical-blue transition-colors">
                About Us
              </a>
              <a href="/services" className="block text-sm text-muted-foreground hover:text-medical-blue transition-colors">
                Services
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-medical-blue transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} {clinicConfig.name}. All rights reserved. | Built with{' '}
            <Heart className="h-4 w-4 text-red-500 inline" fill="currentColor" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-blue hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
