import React from 'react';
import { Button } from '../ui/button';
import services from '../../data/services.json';

export function ServicesPanel({ onClose }) {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-6">
  <div className="bg-gray-50 rounded-lg shadow-lg p-8 transition-all duration-300 ease-in-out transform origin-top" style={{ willChange: 'opacity, transform' }}>
        {Array.isArray(services) && services.length > 0 ? (
          services.map((svc, idx) => (
            <div key={svc.id} className="mb-8">
              <h4 className="text-xl font-semibold mb-2">{svc.id}. {svc.title}</h4>
              {svc.intro && <p className="text-muted-foreground mb-3">{svc.intro}</p>}
              {svc.whatWeOffer && (
                <ul className="list-disc ml-6 text-sm">
                  {svc.whatWeOffer.map((item, i) => <li key={i} className="mb-1">{item}</li>)}
                </ul>
              )}
              {svc.keyFocus && (
                <div className="mt-3 text-sm">
                  <strong>Key Focus Areas:</strong>
                  <ul className="list-disc ml-6 mt-2">
                    {svc.keyFocus.map((kf, i) => <li key={i}>{kf}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No services defined.</p>
        )}

        <div className="mt-6 text-right">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPanel;
