'use client';

import React, { useState } from 'react';
import {
  Heart,
  Brain,
  Stethoscope,
  Eye,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

type Highlight = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Department = {
  icon: React.ElementType;
  name: string;
  color: string;
  href: string;
  description: string;
};

type Testimonial = {
  photo: string;
  rating: number;
  service: string;
  quote: string;
  name: string;
};

const highlights: Highlight[] = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We treat every patient with kindness and respect.',
  },
  {
    icon: Brain,
    title: 'Expert Doctors',
    description: 'Highly qualified specialists in all fields.',
  },
  {
    icon: Stethoscope,
    title: 'Advanced Equipment',
    description: 'State-of-the-art medical technology for accurate diagnoses.',
  },
];

const departments: Department[] = [
  {
    icon: Eye,
    name: 'Eye Care',
    color: 'from-teal-500 to-blue-600',
    href: '/eye-care',
    description: 'Comprehensive eye examinations and treatments.',
  },
  {
    icon: Stethoscope,
    name: 'General Medicine',
    color: 'from-blue-500 to-indigo-600',
    href: '/general-medicine',
    description: 'Primary care and specialized medical services.',
  },
  {
    icon: Heart,
    name: 'Dental Care',
    color: 'from-pink-500 to-red-600',
    href: '/dental-care',
    description: 'Complete dental services for all ages.',
  },
];

const testimonials: Testimonial[] = [
  {
    photo: '/images/pic.jpg',
    rating: 5,
    service: 'Eye Care',
    quote: 'Amazing service and caring staff!',
    name: 'Jane Doe',
  },
  {
    photo: '/images/patient2.jpg',
    rating: 4,
    service: 'Dental Care',
    quote: 'Very professional and friendly dentists.',
    name: 'John Smith',
  },
  {
    photo: '/images/patient3.jpg',
    rating: 5,
    service: 'General Medicine',
    quote: 'Great all-round medical support.',
    name: 'Mary Johnson',
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <main className="p-6 max-w-7xl mx-auto font-sans bg-gray-50 space-y-12">
      {/* Hero Section */}
      <section
        className="bg-blue-900 text-white py-20 relative overflow-hidden"
        aria-label="Hospital welcome banner"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Welcome to Kenneth Matiba Eye and Dental Hospital
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Your health is our priority. Exceptional care, advanced technology.
          </p>
          <a
            href="/appointments"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Emergency Banner */}
      <div
        className="bg-red-600 text-white py-3 text-center font-semibold"
        role="alert"
        aria-live="assertive"
      >
        🚨 24/7 Emergency Services Available | Call Now: (555) 123-4567
      </div>

      {/* Hospital Intro */}
      <section
        className="text-center max-w-3xl mx-auto px-4"
        aria-label="Hospital introduction"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Kenneth Matiba Eye and Dental Hospital is committed to delivering
          world-class healthcare services with compassion, professionalism,
          and cutting-edge technology. From primary care to specialized
          treatments, we ensure every patient receives exceptional attention.
        </p>
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights-title" className="px-4">
        <h2
          id="highlights-title"
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          Our Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform bg-white"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
            >
              <Icon className="text-blue-600 mb-3" size={40} aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section aria-labelledby="departments-title" className="px-4">
        <h2
          id="departments-title"
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departments.map(({ icon: Icon, name, color, href, description }, idx) => (
            <a
              key={idx}
              href={href}
              className={`rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform block bg-gradient-to-br ${color} text-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-${color.split(' ')[0].replace('from-', '')}`}
              aria-label={`Visit ${name} department page`}
            >
              <Icon size={36} className="mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-xl mb-1">{name}</h3>
              <p>{description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section aria-labelledby="achievements-title" className="px-4">
        <h2
          id="achievements-title"
          className="text-3xl font-semibold mb-6 text-gray-800 text-center"
        >
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '250+', label: 'Expert Doctors' },
            { value: '50+', label: 'Medical Departments' },
            { value: '10K+', label: 'Happy Patients' },
            { value: '24/7', label: 'Emergency Service' },
          ].map(({ value, label }, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow-md bg-white"
              tabIndex={0}
              aria-label={`${label}: ${value}`}
            >
              <h3 className="text-2xl font-bold text-blue-600">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section aria-labelledby="news-title" className="px-4">
        <h2
          id="news-title"
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          Latest News & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Free Eye Camp - Sept 2025',
              desc: 'Join us for free eye check-ups and treatment this September.',
            },
            {
              title: 'New Dental Equipment Installed',
              desc: 'Our dental clinic is now equipped with the latest technology.',
            },
            {
              title: 'Blood Donation Drive',
              desc: 'Help save lives — participate in our upcoming blood drive.',
            },
          ].map(({ title, desc }, idx) => (
            <article
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              tabIndex={0}
              aria-label={`News: ${title}`}
            >
              <h3 className="font-bold text-lg mb-2 text-black">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-title" className="px-4">
        <h2
          id="gallery-title"
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['/images/pic.jpg', '/images/pic.jpg', '/images/pic.jpg'].map(
            (img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Hospital Gallery Image ${idx + 1}`}
                className="rounded-lg shadow-md object-cover h-48 w-full hover:scale-105 transition-transform"
                loading="lazy"
                decoding="async"
              />
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-title" className="px-4">
        <h2
          id="testimonials-title"
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          What Our Patients Say
        </h2>
        {testimonials.length > 0 && (
          <div
            className="border rounded-lg p-6 shadow-md max-w-xl mx-auto relative bg-white text-black"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            <img
              src={testimonials[currentTestimonial].photo}
              alt={`Photo of patient ${testimonials[currentTestimonial].name}`}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300"
              loading="lazy"
              decoding="async"
            />
            <div className="flex justify-center mb-2" aria-label={`Rating: ${testimonials[currentTestimonial].rating} out of 5 stars`}>
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={20} aria-hidden="true" />
              ))}
            </div>
            <p className="italic text-center mb-2 text-gray-700">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="text-center font-semibold mb-2 text-gray-800">
              — {testimonials[currentTestimonial].name} (
              {testimonials[currentTestimonial].service})
            </p>
            <div className="flex justify-center items-center text-green-600 font-medium">
              <CheckCircle size={18} className="mr-1" aria-hidden="true" /> Verified
              Patient
            </div>

            {/* Nav Buttons */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
