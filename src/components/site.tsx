import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Phone, Menu, X, KeyRound, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function Brand() {
  return <Link to="/" className="brand" aria-label="MSP Lock and Key home"><span className="brand-mark"><KeyRound size={28} strokeWidth={1.5} /></span><span><strong>MSP <span>LOCK & KEY</span></strong><small>LOCAL ROOTS. LASTING SECURITY.</small></span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <><div className="topbar"><div className="site-container"><span><MapPin size={12} /> Minneapolis, Minnesota</span><a href={business.telephone}>Your local lock & key specialists <ArrowUpRight size={12} /></a></div></div><header className="site-header"><div className="site-container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation"><Link to="/" data-active={location.pathname === "/"}>Home</Link><Link to="/services" data-active={location.pathname.startsWith("/services")}>Our services</Link><Link to="/about" data-active={location.pathname === "/about"}>About us</Link><Link to="/contact" data-active={location.pathname === "/contact"}>Contact</Link></nav><Button asChild className="header-call" size="lg"><a href={business.telephone}><Phone />{business.phone}<ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{([{ to: "/", label: "Home" }, { to: "/services", label: "Our services" }, { to: "/about", label: "About us" }, { to: "/contact", label: "Contact" }] as const).map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={18} /></Link>)}</nav>}</header></>;
}

export function CallButton({ label = "Call your local locksmith", variant = "default" }: { label?: string; variant?: "default" | "outline" | "gold" | "heroOutline" }) {
  return <Button asChild variant={variant} size="lg"><a href={business.telephone}><Phone size={17} />{label}<ArrowUpRight size={17} /></a></Button>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="site-container"><div><p className="eyebrow">LET’S GET YOUR DAY BACK ON TRACK</p><h2>Better security starts<br />with a conversation.</h2></div><div><a className="large-phone" href={business.telephone}>{business.phone}<ArrowUpRight /></a><p>A real conversation. A clear next step.</p></div></div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-grid"><div><Brand /><p>Local locksmith solutions.<br />Peace of mind, close to home.</p></div><div><h3>Explore</h3><Link to="/services">Our services</Link><Link to="/about">About us</Link><Link to="/contact">Contact us</Link></div><div><h3>Lock & key services</h3><Link to="/services/$service" params={{ service: "residential" }}>Residential</Link><Link to="/services/$service" params={{ service: "commercial" }}>Commercial</Link><Link to="/services/$service" params={{ service: "automotive" }}>Automotive</Link></div><div><h3>Find us in Minneapolis</h3><a href={business.maps} target="_blank" rel="noreferrer">4801 Portland Ave<br />Minneapolis, MN 55417 <ArrowUpRight size={13} /></a><a href={business.telephone}>{business.phone}</a></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} MSP LOCK AND KEY</span><span>Minneapolis, MN <ArrowRight size={13} /> Built around your peace of mind.</span></div></footer>;
}