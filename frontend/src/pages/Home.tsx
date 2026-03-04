import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { clinicConfig } from '../config/clinicConfig';
import { Phone, Calendar, Stethoscope, Heart, Users, Clock } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Home - ${clinicConfig.name}`;
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
      <section className="relative bg-gradient-to-br from-medical-blue/5 to-medical-blue/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {clinicConfig.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {clinicConfig.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleBookAppointment}
                  className="flex items-center justify-center space-x-2 rounded-full bg-medical-blue px-8 py-4 text-base font-semibold text-white hover:bg-medical-blue-dark transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </button>
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="flex items-center justify-center space-x-2 rounded-full border-2 border-medical-blue px-8 py-4 text-base font-semibold text-medical-blue hover:bg-medical-blue hover:text-white transition-all"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={clinicConfig.hero.image}
                alt="Zohan Health Care Clinic - Modern medical facility"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue/10">
                <Stethoscope className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold">Expert Care</h3>
              <p className="text-muted-foreground">
                Qualified physicians providing professional medical services
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue/10">
                <Heart className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="text-muted-foreground">
                Quality healthcare that's accessible to everyone
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue/10">
                <Users className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold">Friendly Staff</h3>
              <p className="text-muted-foreground">
                Compassionate team dedicated to your wellbeing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services for children and adults
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicConfig.services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-20 w-20 object-contain"
                />
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-medical-blue px-8 py-3 text-base font-semibold text-white hover:bg-medical-blue-dark transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Care of Your Health?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and experience quality healthcare with our friendly team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookAppointment}
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-medical-blue hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${clinicConfig.phone}`}
              className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-medical-blue transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>{clinicConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
