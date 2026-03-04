import { useEffect, useState } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubmitContactForm } from '../hooks/useQueries';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMutation = useSubmitContactForm();

  useEffect(() => {
    document.title = `Contact Us - ${clinicConfig.name}`;
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email.trim() || null,
        message: formData.message
      });

      setShowSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    clinicConfig.location.searchQuery
  )}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/5 to-medical-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for appointments or inquiries
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

              {showSuccess && (
                <div className="mb-6 flex items-start space-x-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitMutation.isError && (
                <div className="mb-6 flex items-start space-x-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm">
                      {submitMutation.error instanceof Error
                        ? submitMutation.error.message
                        : 'Please try again later'}
                    </p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-medical-blue`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    } bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-medical-blue`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-medical-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-medical-blue resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full flex items-center justify-center space-x-2 rounded-full bg-medical-blue px-8 py-4 text-base font-semibold text-white hover:bg-medical-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {submitMutation.isPending ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a
                    href={`tel:${clinicConfig.phone}`}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10 flex-shrink-0">
                      <Phone className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">{clinicConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${clinicConfig.email}`}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10 flex-shrink-0">
                      <Mail className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground break-all">{clinicConfig.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">{clinicConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
                <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zohan Health Care Clinic Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
