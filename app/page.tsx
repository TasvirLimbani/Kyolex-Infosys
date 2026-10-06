"use client";

import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  Globe2,
  Headphones,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  Printer,
  Settings2,
  ShieldCheck,
  Star,
  UsersRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  "Home",
  "About Us",
  "Products",
  "Services",
  "Blogs",
  "Contact Us",
];

const products = [
  {
    icon: Laptop,
    category: "Computing",
    title: "Business Laptops",
    text: "Powerful, reliable machines for work that moves with you.",
    tone: "yellow",
  },
  {
    icon: Monitor,
    category: "Desktop Systems",
    title: "Desktops & Monitors",
    text: "Build a workspace that keeps your team focused and fast.",
    tone: "dark",
  },
  {
    icon: Printer,
    category: "Print Solutions",
    title: "Printers & Scanners",
    text: "Sharper documents, smarter workflows, lower running costs.",
    tone: "yellow",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Computer Repair",
    text: "Diagnostics, upgrades and dependable repairs for every device.",
  },
  {
    icon: Settings2,
    title: "Printer Service",
    text: "On-site maintenance and genuine parts to keep you printing.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Support",
    text: "Peace of mind with proactive care for your business technology.",
  },
];

function BrandMark() {
  return (
    <span className="brand-logo" aria-label="Kyolex Infosys home">
      <img src="/kyolex-logo.png" alt="Kyolex Infosys Logo" />
    </span>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

 function sendEnquiry(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = String(form.get("name") || "");
  const phone = String(form.get("phone") || "");
  const service = String(form.get("service") || "");
  const message = String(form.get("message") || "");

  const text = `Hello Kyolex Infosys,

New Enquiry 🚀

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

  const whatsappUrl = `https://wa.me/919687300073?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  setEnquirySent(true);
  event.currentTarget.reset();
}

  return (
    <main className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Clock3 size={14} /> Mon–Sat: 10:00 AM – 7:30 PM
          </span>
          <span>
            <MapPin size={14} /> Serving businesses across surat city
          </span>
          <a href="tel:+919687300073">
            <Phone size={14} /> +91 96873 00073
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home">
            <img
              src="/kyolex-logo.png"
              alt="Kyolex Infosys Logo"
              className="h-12"
            />
          </a>
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <a
                key={item}
                className={index === 0 ? "active" : ""}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact-us" className="button button-dark nav-cta">
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Technology that works for you
            </div>
            <h1>
              Powering your
              <br />
              <em>next move.</em>
            </h1>
            <p>
              From reliable devices to responsive support, Kyolex Infosys keeps
              your business connected, productive and ready for what's next.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#products">
                Explore products <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#services">
                See our services <span>↗</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span>AK</span>
                <span>RS</span>
                <span>MP</span>
                <span>+</span>
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <p>Trusted by 500+ local businesses</p>
              </div>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="visual-glow" />
            <img
              src="/kyolex-hero.png"
              alt="Laptop and printer on a modern workspace"
            />
            <div className="floating-card service-card">
              <span className="icon-box">
                <Zap size={18} />
              </span>
              <div>
                <strong>Fast service</strong>
                <small>Same-day diagnostics</small>
              </div>
            </div>
            <div className="floating-card rating-card">
              <Star size={16} fill="currentColor" />
              <strong>4.9/5</strong>
              <small>Customer rating</small>
            </div>
          </div>
        </div>
        <div className="hero-ticker">
          <div className="ticker-track">
            <span>COMPUTERS</span>
            <i>✦</i>
            <span>LAPTOPS</span>
            <i>✦</i>
            <span>PRINTERS</span>
            <i>✦</i>
            <span>REPAIRS</span>
            <i>✦</i>
            <span>SUPPORT</span>
            <i>✦</i>
            <span>COMPUTERS</span>
            <i>✦</i>
            <span>LAPTOPS</span>
            <i>✦</i>
            <span>PRINTERS</span>
          </div>
        </div>
      </section>

      <section className="intro-section" id="about-us">
        <div className="container intro-grid">
          <div className="section-label">
            <span>01</span>
            <div />
          </div>
          <div>
            <p className="kicker">Your technology partner</p>
            <h2>
              Good tech makes
              <br />
              <span>good business.</span>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              We believe technology should make work simpler, not harder. That's
              why we pair quality products with honest advice and after-sales
              support you can count on.
            </p>
            <a className="text-link dark-link" href="#contact-us">
              More about Kyolex <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="kicker">What we sell</p>
              <h2>
                Built for the way
                <br />
                <span>you work.</span>
              </h2>
            </div>
            <a className="text-link dark-link" href="#contact-us">
              View all products <ArrowRight size={16} />
            </a>
          </div>
          <div className="product-grid">
            {products.map(({ icon: Icon, category, title, text, tone }) => (
              <article className={`product-card ${tone}`} key={title}>
                <div className="card-top">
                  <span>{category}</span>
                  <span className="round-arrow">
                    <ArrowRight size={17} />
                  </span>
                </div>
                <Icon className="product-icon" strokeWidth={1.3} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact-us">
                  Shop category <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container services-grid">
          <div className="services-intro">
            <p className="kicker">Keep things running</p>
            <h2>
              Support that
              <br />
              <span>shows up.</span>
            </h2>
            <p>
              When something goes wrong, every minute matters. Our friendly
              service team is here to get you back on track with less downtime
              and more confidence.
            </p>
            <a className="button button-yellow" href="#contact-us">
              Book a service <ArrowRight size={17} />
            </a>
          </div>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }, index) => (
              <div className="service-row" key={title}>
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon">
                  <Icon size={21} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight className="row-arrow" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-inner">
          <div>
            <p className="kicker">The Kyolex difference</p>
            <h2>
              Small business
              <br />
              <span>care. Big business</span>
              <br />
              standards.
            </h2>
          </div>
          <div className="trust-stats">
            <div>
              <strong>
                10<span>+</span>
              </strong>
              <p>Years of expertise</p>
            </div>
            <div>
              <strong>
                500<span>+</span>
              </strong>
              <p>Happy businesses</p>
            </div>
            <div>
              <strong>
                24<span>h</span>
              </strong>
              <p>Support response</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section" aria-labelledby="partners-title">
        <div className="container">
          <p className="kicker centered" id="partners-title">
            Trusted technology partners
          </p>
          <div
            className="partner-marquee"
            aria-label="Brands we sell and service"
          >
            <div className="partner-track">
              {[1, 2].map((set) => (
                <div className="partner-row" key={set}>
                  {[
                    ["dell", "Dell"],
                    ["microsoft", "Microsoft"],
                    ["gigabyte", "Gigabyte"],
                    ["quick-heal", "Quick Heal"],
                    ["cisco", "Cisco"],
                    ["deepcool", "Deepcool"],
                    ["cooler-master", "Cooler Master"],
                    ["lenovo", "Lenovo"],
                    ["hp", "HP"],
                    ["asus", "ASUS"],
                    ["aoc", "AOC"],
                    ["logitech", "Logitech"],
                    ["viewsonic", "ViewSonic"],
                    ["tvs", "TVS"],
                    ["brother", "Brother"],
                    ["tp-link", "TP-Link"],
                    ["epson", "Epson"],
                    ["acer", "Artist"],
                  ].map(([slug, name]) => (
                    <span className="partner-logo" key={`${set}-${slug}`}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`}
                        alt={`${name} logo`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                      <b>{name}</b>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="container">
          <div className="section-heading reviews-heading">
            <div>
              <p className="kicker">Real words from real customers</p>
              <h2 id="reviews-title">
                Google <span>Reviews</span>
              </h2>
            </div>
            <a
              className="google-review-button"
              href="https://www.google.com/search?q=Kyolex+Infosys+reviews"
              target="_blank"
              rel="noreferrer"
            >
              <span className="google-g">G</span> Review us on Google{" "}
              <ArrowRight size={15} />
            </a>
          </div>
          <div className="reviews-viewport">
            <div className="reviews-track">
              {[
                [
                  "Rahul Shah",
                  "Excellent service and genuine guidance. Kyolex helped us choose the right laptops for our team.",
                  "2 weeks ago",
                ],
                [
                  "Priya Mehta",
                  "Fast printer repair, transparent pricing and very professional support. Highly recommended.",
                  "1 month ago",
                ],
                [
                  "Amit Patel",
                  "Great place for computer hardware and accessories. Friendly team and quick response.",
                  "3 months ago",
                ],
                [
                  "Neha Joshi",
                  "They solved our office network issue the same day. Reliable service from start to finish.",
                  "4 months ago",
                ],
              ].map(([name, text, date]) => (
                <article className="review-card" key={name}>
                  <div className="review-top">
                    <span className="review-avatar">
                      {name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                    <div>
                      <h3>{name}</h3>
                      <p>{date}</p>
                    </div>
                    <span className="google-g">G</span>
                  </div>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                    <Star size={15} fill="currentColor" />
                  </div>
                  <p>{text}</p>
                  <span className="verified-review">
                    Verified Google review
                  </span>
                </article>
              ))}
            </div>
          </div>
          <div className="review-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact-us">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="kicker">Let's talk tech</p>
            <h2>
              Ready when
              <br />
              <span>you are.</span>
            </h2>
            <p>
              Have a product in mind, need a quick repair, or just want some
              advice? Drop us a line. We're happy to help.
            </p>
            <div className="contact-details">
              <a href="tel:+919687300073">
                <Phone size={18} /> +91 96873 00073
              </a>
              <a href="mailto:kyolexcomputer@gmail.com">
                <Headphones size={18} /> kyolexcomputer@gmail.com
              </a>
              <span>
                <MapPin size={18} /> 104 - First Floor, Roman Point, Near
                Vithalnagar Socity, Hirabaug, Surat - 395006.
              </span>
            </div>
            <div className="socials">
              <a
                href="https://www.instagram.com/kyolex_infosys/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-letter">ig</span>
              </a>
              <a
                href="https://wa.me/919687300073"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="https://maps.google.com/?q=Kyolex+Infosys"
                aria-label="Google Maps"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} />
              </a>
             
            </div>
          </div>
          <form className="contact-form" onSubmit={sendEnquiry}>
            <div className="form-row">
              <label>
                Name
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  placeholder="Your phone number"
                  type="tel"
                  required
                />
              </label>
            </div>
            <label>
              Email
              <input
                name="email"
                placeholder="you@company.com"
                type="email"
                required
              />
            </label>
            <label>
              How can we help?
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Buy a computer or laptop</option>
                <option>Printer sales</option>
                <option>Device repair</option>
                <option>Annual support</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell us a little about what you need..."
                rows={4}
              />
            </label>
            <button className="button button-yellow" type="submit">
              Send enquiry on WhatsApp <MessageCircle size={17} />
            </button>
            {enquirySent && (
              <p className="form-success" role="status">
                Your enquiry is ready in WhatsApp. Just tap send to reach our
                team.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="map-section">
        <div className="map-overlay">
          <div className="container map-content">
            <div>
              <p className="kicker">Come say hello</p>
              <h2>
                Find us
                <br />
                <span>near you.</span>
              </h2>
              <p>Visit our showroom for a hands-on look at the latest tech.</p>
              <a
                className="button button-dark"
                href="https://maps.google.com/?q=Kyolex+Infosys"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <iframe
          title="Kyolex Infosys location on Google Maps"
          src="https://www.google.com/maps?q=computer+store&output=embed"
          loading="lazy"
        />
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#home">
            <BrandMark />
            <span>
              Kyolex <b>Infosys</b>
            </span>
          </a>
          <p>Technology made dependable.</p>
          <div className="footer-links">
            <a href="#about-us">About</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#contact-us">Contact</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Kyolex Infosys. All rights reserved.</span>
          <span>Sales · Service · Support</span>
        </div>
      </footer>
    </main>
  );
}
