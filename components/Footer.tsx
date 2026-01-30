import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="Girl Child Productions"
              className="h-20 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Stories That Move. Films That Matter. <br />
              Based in New Delhi, creating for the world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Menu</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <span className="block text-xs uppercase text-gray-600 tracking-wider mb-1">Phone</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <span className="block text-xs uppercase text-gray-600 tracking-wider mb-1">Email</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li>
                <span className="block text-xs uppercase text-gray-600 tracking-wider mb-1">Studio</span>
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Girl Child Productions.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;