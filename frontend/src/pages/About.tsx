import { useEffect } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { Target, Heart, Users, Award } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = `About Us - ${clinicConfig.name}`;
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue/5 to-medical-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our commitment to providing quality healthcare
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10">
                <Heart className="h-6 w-6 text-medical-blue" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {clinicConfig.about.story}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10">
                <Target className="h-6 w-6 text-medical-blue" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {clinicConfig.about.mission}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-medical-blue/10">
                  <Heart className="h-7 w-7 text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold">Affordable</h3>
                <p className="text-sm text-muted-foreground">
                  Quality healthcare at prices everyone can afford
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-medical-blue/10">
                  <Users className="h-7 w-7 text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold">Accessible</h3>
                <p className="text-sm text-muted-foreground">
                  Convenient location and flexible hours for our community
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card border border-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-medical-blue/10">
                  <Award className="h-7 w-7 text-medical-blue" />
                </div>
                <h3 className="text-lg font-semibold">Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted medical expertise you can count on
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10">
                <Users className="h-6 w-6 text-medical-blue" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Doctor Information</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <p className="text-muted-foreground mb-6">
                Our team of qualified physicians is dedicated to providing expert medical care to all our patients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <div className="rounded-md border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                    To be updated
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Qualifications</label>
                  <div className="rounded-md border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                    To be updated
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Experience</label>
                  <div className="rounded-md border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                    To be updated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
