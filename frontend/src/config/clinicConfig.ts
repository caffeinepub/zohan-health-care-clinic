// Centralized clinic configuration
export const clinicConfig = {
  name: 'Zohan Health Care Clinic',
  phone: '+923303132333',
  email: 'UsamaArain@gmail.com',
  address: 'Mungia Naka, Near Abdul Hakeem Mungio, Kotlaloo, Khairpur, Sindh',
  location: {
    // For map embed
    searchQuery: 'Mungia Naka, Kotlaloo, Khairpur, Sindh, Pakistan'
  },
  services: [
    {
      id: 'general-checkup',
      title: 'General Checkup',
      description: 'Comprehensive health evaluation for all ages.',
      icon: '/assets/generated/icon-general-checkup.dim_256x256.png'
    },
    {
      id: 'blood-pressure',
      title: 'Blood Pressure Test',
      description: 'Accurate monitoring and advice.',
      icon: '/assets/generated/icon-blood-pressure.dim_256x256.png'
    },
    {
      id: 'sugar-test',
      title: 'Sugar Test',
      description: 'Quick and reliable diabetes screening.',
      icon: '/assets/generated/icon-sugar-test.dim_256x256.png'
    },
    {
      id: 'pediatrics-adults',
      title: 'Pediatrics & Adults Care',
      description: 'Specialized care for children and adults.',
      icon: '/assets/generated/icon-pediatrics-adults.dim_256x256.png'
    }
  ],
  hero: {
    image: '/assets/generated/clinic-hero.dim_1600x900.png',
    title: 'Welcome to Zohan Health Care Clinic',
    subtitle: 'Your trusted healthcare provider for children and adults. We offer professional, affordable, and friendly medical services in a clean and modern environment. Your health is our priority.'
  },
  about: {
    story: 'Zohan Health Care Clinic is dedicated to providing expert medical care to our community. Our team of qualified physicians specializes in general checkups, preventive care, and treatment for all age groups. We aim to make healthcare affordable, accessible, and reliable for everyone.',
    mission: 'To provide affordable, accessible, and reliable healthcare services to our community with compassion and excellence.'
  }
};
