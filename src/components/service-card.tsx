import { Link } from "@tanstack/react-router";
import { Home, Building2, CarFront, KeyRound, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/business";

export function ServiceCards() {
  const icons = { home: Home, building: Building2, car: CarFront, key: KeyRound };
  return <div className="service-grid">{services.map((service, index) => { const Icon = icons[service.icon]; return <article className="service-card" key={service.slug}><Icon /><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><Link to="/services/$service" params={{ service: service.slug }}>Explore service <ArrowUpRight size={16} /></Link></article>; })}</div>;
}