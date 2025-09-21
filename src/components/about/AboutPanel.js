import React from 'react';
import { Button } from '../ui/button';

export default function AboutPanel({ open = false, onClose }) {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-6">
      <div className={`bg-gray-50 rounded-lg shadow-lg p-8 transition-all duration-500 ease-in-out transform origin-top ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`} style={{ willChange: 'max-height, opacity' }}>
        {/* <h3 className="text-2xl font-semibold mb-4">ABOUT US</h3> */}

        <h4 className="font-semibold mt-4">Our Story:</h4>
        <p className="mt-2 text-sm leading-relaxed">Founded and registered in Nairobi, Kenya. We are a development consultancy firm that works with agribusinesses, corporations, governments, development partners, sovereign wealth, private equity, and institutional clients. Focal Impact Limited was born out of a passion to bridge the gap between great ideas and impactful implementation to deliver growth opportunities and support for our clients. We combine global best practices with deep local expertise to deliver solutions that work in the real world.</p>

        <h4 className="font-semibold mt-4">Three core commitments drive us:</h4>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li>A Sustainable Future: Leading the transition to environmentally responsible agricultural practices.</li>
          <li>Safe &amp; Secure Food: Strengthening the entire food system—from nutritious production and resilient farming to equitable distribution.</li>
          <li>Thriving Communities: Championing commercially viable solutions that boost farmer livelihoods and fuel economic prosperity.</li>
        </ul>

        <h4 className="font-semibold mt-4">Our Mission:</h4>
        <p className="mt-2 text-sm leading-relaxed">To empower organizations across the agrifood industry to create lasting positive change by aligning ecological responsibility with economic vitality. We deliver innovative, data-driven, and context-specific solutions that transform challenges into opportunities for growth, resilience, and shared prosperity.</p>

        <p className="mt-2 text-sm">We achieve this by dedicating ourselves to:</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li>Environmental Stewardship: Advancing regenerative and sustainable practices that protect and renew our planet's resources for future generations.</li>
          <li>Food Safety &amp; Security: Building resilient systems from farm to fork that ensure the consistent production and distribution of safe, nutritious food for all.</li>
          <li>Inclusive Economic Growth: Fostering commercially viable operations that elevate livelihoods, strengthen communities, and drive prosperity throughout the agrifood value chain.</li>
        </ul>

        <h4 className="font-semibold mt-4">Vision:</h4>
        <p className="mt-2 text-sm">A future where businesses and institutions thrive sustainably while making meaningful contributions to society and the environment.</p>

        <h4 className="font-semibold mt-4">Core Values:</h4>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Innovation</li>
          <li>Sustainability</li>
          <li>Collaboration</li>
          <li>Professional excellence</li>
          <li>Ethical integrity</li>
          <li>Independence</li>
          <li>Client-centric focus</li>
          <li>Inclusivity</li>
        </ul>

        <h4 className="font-semibold mt-4">Our goal:</h4>
        <p className="mt-2 text-sm leading-relaxed">We empower the agrifood industry to achieve transformative growth that is both sustainable and equitable. Our work is grounded in a unwavering commitment to:</p>
        <ul className="list-disc ml-6 mt-2 text-sm">
          <li><strong>Planet:</strong> Embedding environmental sustainability into the core of food production.</li>
          <li><strong>People:</strong> Ensuring food safety and security by enhancing nutrition, farming practices, and supply chains.</li>
          <li><strong>Prosperity:</strong> Unlocking economic potential through commercially smart strategies that elevate livelihoods and strengthen communities.</li>
        </ul>

        <h4 className="font-semibold mt-4">Our expertise:</h4>
        <p className="mt-2 text-sm leading-relaxed">At Focal Impact Limited, we provide professional consultancy services that inspire innovation, strengthen operations, and deliver measurable results. With a strong focus on sustainability, inclusivity, and local context, we help clients navigate complex challenges, access opportunities, and build long-term resilience.</p>

        <h4 className="font-semibold mt-4">Our capability:</h4>
        <p className="mt-2 text-sm leading-relaxed">Our strength lies in the extensive expertise and experience of our founding team. We bring over a decade of combined work in agriculture, food systems, business development, policy, ESG, and capacity building. What sets us apart is our ability to blend global best practices with deep local knowledge to design solutions that are practical and impactful. While our company is new, we are driven by a clear mission and vision, strong professional networks, and a commitment to delivering value through innovation, integrity, and collaboration.</p>

        <div className="mt-6 text-right">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </section>
  );
}
