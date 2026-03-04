import { useEffect } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { Phone, Calendar } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Services - ${clinicConfig.name}`;
  }, []);

  const handleBookAppointment = () => {
    navigate({ to: '/contact' });
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/5 to-medical-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services for children and adults
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {clinicConfig.services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <span className="text-sm font-semibold text-medical-blue bg-medical-blue/10 px-3 py-1 rounded-full">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Medical Assistance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book an appointment or call us directly for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookAppointment}
                className="inline-flex items-center justify-center space-x-2 rounded-full bg-medical-blue px-8 py-4 text-base font-semibold text-white hover:bg-medical-blue-dark transition-colors shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              <a
                href={`tel:${clinicConfig.phone}`}
                className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-medical-blue px-8 py-4 text-base font-semibold text-medical-blue hover:bg-medical-blue hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
