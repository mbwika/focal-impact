import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import './App.css';
import { useState } from 'react';
import ServicesPanel from './components/services/ServicesPanel';
import AboutPanel from './components/about/AboutPanel';

function App() {
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const toggleServices = () => setShowServices((s) => !s);
  const toggleAbout = () => setShowAbout((s) => !s);

  return (
    <div className="min-h-screen bg-background">
      {/* Logo moved into hero */}
  {/* Hero Section */}
  {/* <div className="h-16 md:h-24 lg:h-28"></div> */}
  <section className="relative overflow-hidden">
        {/* thin contact bar at top of hero */}
        <div className="absolute top-0 left-0 right-0 z-40 bg-black/40 text-white text-sm">
          <div className="max-w-4xl mx-auto px-4 py-2 text-center">
            Address: Nairobi, KE | Email: focalimpactlimited@gmail.com | Phone: +254 712 345 678
          </div>
        </div>
        {/* logo positioned over hero */}
  <a href="/" className="absolute top-20 md:top-12 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-30">
          <img src="/logo-white.png" alt="Focal Impact Logo" className="h-20 w-auto" />
        </a>
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/header-image.jpg"
            alt="Handshake Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
  <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-16 md:pt-24 md:py-24">
          <div className="text-center space-y-8 text-white">
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Driving Sustainable Impact 
              <span className="block text-primary/80 text-white">Through Strategic Consultancy</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-white">
                We empower businesses, organizations, and communities with tailored solutions in policy, strategy, capacity building, and impact-driven growth.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* Call to Action Section */}
  <section className="py-10 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Button
                size="lg"
                className="w-full px-8 py-6 text-lg"
                onClick={() => {
                  window.open("https://calendly.com/cmm230004-utdallas/30min", "_blank", "noopener,noreferrer");
                }}
              >
                Schedule Free Consultation
              </Button>
            </div>
            <div>
              <Button size="lg" className="w-full px-8 py-6 text-lg" onClick={toggleServices}>
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
  {/* Services panel - expands when showServices is true */}
  {showServices && <ServicesPanel onClose={toggleServices} />}
      </section>

    {/* Second Content Section */}
  <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">
                Proven Results Across Industries
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Focal Impact, we deliver professional consultancy services that inspire innovation, enhance operational efficiency, and drive measurable results. We offer integrated solutions across the agri-food system, technology, and AI, from strategy to implementation, with a focus on sustainability, resilience, and inclusive growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
                <div className="text-3xl text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
                <div className="text-3xl text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
                <div className="text-3xl text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
                <div className="text-3xl text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Expert Consultants</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full sm:w-[50vw] max-w-[600px]">
              <Button variant="secondary" size="lg" className="w-full" onClick={toggleAbout}>About Us</Button>
            </div>
          </div>
          <div className="mt-4">
            <AboutPanel open={showAbout} onClose={toggleAbout} />
          </div>
        </div>
      </section>
      {/* Footer */}
  <footer className="bg-gray-100 text-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl mb-4">Ready to Get Started?</h3>
          <p className="text-primary-foreground/80 mb-6">
            Contact us today to discuss how we can help transform your business.
          </p>
          <div className="flex justify-center">
            <div className="w-full sm:w-[50vw] max-w-[600px]">
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-gray-900 hover:bg-black hover:text-white"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/254713165971`;
                  const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                  if (win) win.focus();
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
  <div className="mt-8" />
        <div className="mt-8 text-sm text-gray-500 text-center">
          &copy; 2025 Focal Impact Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
