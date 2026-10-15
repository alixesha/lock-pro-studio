export const business = {
  name: "MSP LOCK AND KEY",
  phone: "952-800-8017",
  telephone: "tel:+19528008017",
  address: "4801 Portland Ave, Minneapolis, MN 55417",
  maps: "https://www.google.com/maps/search/?api=1&query=4801+Portland+Ave+Minneapolis+MN+55417",
};

export const services = [
  { slug: "residential", title: "Residential", label: "A safer place to call home.", description: "Thoughtful lock solutions for the place that matters most. From a new set of keys to a more secure front door.", icon: "home", items: ["Home lockout assistance", "Lock rekeying", "Deadbolt installation", "Lock repair & replacement"], detail: "Moving into a new home, replacing an unreliable lock, or simply looking for greater peace of mind? Talk with us about a practical solution for your doors and your day-to-day life." },
  { slug: "commercial", title: "Commercial", label: "Protect what you’re building.", description: "Keep your workplace secure and your day moving with lock and key solutions built around your business.", icon: "building", items: ["Business lockout assistance", "Commercial lock replacement", "Master key consultations", "Office lock rekeying"], detail: "Every business has different access needs. We help you think through who needs a key, which doors need attention, and how to keep your workplace secure without making everyday access complicated." },
  { slug: "automotive", title: "Automotive", label: "Get back to your day.", description: "Locked out or dealing with a key problem? Start with a conversation about your vehicle and the help you need.", icon: "car", items: ["Vehicle lockout assistance", "Car key consultations", "Broken key assistance", "Vehicle-specific service guidance"], detail: "Vehicle locks and keys vary by make, model, and year. Have those details ready when you call so we can discuss the right next step and confirm which services are available for your vehicle." },
  { slug: "lockout", title: "Lockout assistance", label: "A calm answer to a stressful moment.", description: "When your keys are on the wrong side of the door, connect directly with a local locksmith for your next step.", icon: "key", items: ["Home lockouts", "Office lockouts", "Vehicle lockouts", "Broken or stuck key guidance"], detail: "Being locked out is disruptive. Call with your location and the type of lock or vehicle involved. We’ll discuss your situation, service availability, and the next steps before any work is arranged." },
] as const;

export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | MSP LOCK AND KEY` }, { name: "description", content: description }, { property: "og:title", content: `${title} | MSP LOCK AND KEY` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}