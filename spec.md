# Specification

## Summary
**Goal:** Build a professional, clean, modern, mobile-friendly 4-page website for “Zohan Health Care Clinic” with a Blue/White medical style, clear CTAs, and a working contact form that stores submissions in the backend.

**Planned changes:**
- Create four routed pages (Home, About, Services, Contact) with a shared header navigation (active state) and footer (clinic name + primary contact details).
- Implement Home page with hero image, provided intro text (verbatim), services overview, and CTA buttons (“Book Appointment” scrolls/focuses the Contact form; “Call Now” uses a tel: link to 03303132333).
- Implement About page with provided clinic story text (verbatim), a Mission section, and a “Doctor Information” placeholder section with labeled fields (no fake details).
- Implement Services page listing the four services with provided titles/descriptions (verbatim) and a distinct icon for each.
- Implement Contact page with validated form (name, phone, message required; email optional), contact details (phone/email/address using canonical values), and an embedded map iframe based on the canonical address/location string.
- Add backend canister methods to store contact submissions (timestamp, name, phone, optional email, message) with stable storage and a query method to list submissions.
- Centralize clinic configuration (name, phone, email, canonical address/location string, services list) in a single frontend module for consistent reuse.
- Add basic SEO and accessibility essentials (per-route titles including “Zohan Health Care Clinic”, semantic headings, labeled inputs with accessible errors, alt text for hero and icons).
- Add and reference static image assets (hero + 4 service icons) from the frontend assets directory.

**User-visible outcome:** Users can browse a responsive clinic website (Home/About/Services/Contact), view services with icons, tap CTAs to call or reach the contact form, and submit a contact message that is saved by the backend for later retrieval.
