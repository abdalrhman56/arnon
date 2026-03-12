/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';
import { 
  Monitor, 
  Presentation, 
  Settings, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.projectors, href: '#projector-types' },
    { name: t.nav.screens, href: '#screen-types' },
    { name: t.nav.whyUs, href: '#why-us' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth antialiased ${isRtl ? 'font-cairo' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-200 sm:h-10 sm:w-10">
              <GraduationCap size={22} className="sm:size-6" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {isRtl ? 'ارنون للتجهيزات المكتبية' : 'Arnon Office Equipment'}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
              >
                {item.name}
              </a>
            ))}
            
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>

            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
            >
              {t.nav.startNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-bold text-slate-700"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button 
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-50"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-100 bg-white md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pt-2 pb-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="block w-full rounded-xl bg-emerald-600 py-3 text-center text-base font-bold text-white shadow-lg shadow-emerald-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.startNow}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-emerald-50 blur-3xl opacity-60 sm:h-96 sm:w-96" />
            <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-60 sm:h-96 sm:w-96" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm">
                  {t.hero.badge}
                </span>
                <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                  {t.hero.title} <br className="hidden sm:block" />
                  <span className="text-emerald-600">{t.hero.subtitle}</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                  {t.hero.desc}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:mt-10 lg:justify-start">
                  <a
                    href="#products"
                    className="group flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-emerald-300 active:scale-95 sm:text-lg"
                  >
                    {t.hero.explore}
                    <ArrowLeft size={20} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1 rotate-180'}`} />
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95 sm:text-lg"
                  >
                    {t.hero.contact}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-xl sm:rounded-3xl lg:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                    alt="Smart Classroom" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-2xl bg-emerald-600 p-4 text-white shadow-xl sm:flex sm:h-40 sm:w-40 sm:flex-col sm:justify-center sm:p-6 lg:-bottom-6 lg:-right-6 lg:h-48 lg:w-48 lg:p-8">
                  <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">{t.about.expYears}</p>
                  <p className="mt-1 text-xs font-medium opacity-90 sm:text-sm lg:mt-2">{t.about.expText}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">{t.about.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
                  {t.about.desc}
                </p>
                
                <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
                  {t.about.features.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">{t.services.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
                {t.services.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {[
                {
                  title: t.services.items[0].title,
                  desc: t.services.items[0].desc,
                  icon: <Monitor className="text-emerald-600" size={28} />
                },
                {
                  title: t.services.items[1].title,
                  desc: t.services.items[1].desc,
                  icon: <Settings className="text-emerald-600" size={28} />
                },
                {
                  title: t.services.items[2].title,
                  desc: t.services.items[2].desc,
                  icon: <CheckCircle2 className="text-emerald-600" size={28} />
                },
                {
                  title: t.services.items[3].title,
                  desc: t.services.items[3].desc,
                  icon: <GraduationCap className="text-emerald-600" size={28} />
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50 sm:p-8 sm:rounded-3xl"
                >
                  <div className="mb-6 inline-block rounded-xl bg-emerald-50 p-4 transition-colors group-hover:bg-emerald-100 sm:rounded-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 sm:mb-4 sm:text-xl">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-slate-900 py-16 sm:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{t.products.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
                {t.products.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  title: t.products.items[0].title,
                  desc: t.products.items[0].desc,
                  image: "https://images.unsplash.com/photo-1535016120720-40c646be44da?auto=format&fit=crop&q=80&w=800",
                  link: "#projector-types"
                },
                {
                  title: t.products.items[1].title,
                  desc: t.products.items[1].desc,
                  image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800",
                  link: "#screen-types"
                },
                {
                  title: t.products.items[2].title,
                  desc: t.products.items[2].desc,
                  image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
                  link: "#why-us"
                }
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl bg-slate-800 transition-transform hover:-translate-y-2 sm:rounded-3xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">{product.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{product.desc}</p>
                    <a 
                      href={product.link} 
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/20 sm:mt-8 sm:text-base"
                    >
                      {t.products.learnMore}
                      <ArrowLeft size={18} className={isRtl ? '' : 'rotate-180'} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projector Types Section */}
        <section id="projector-types" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">{t.projectorTypes.badge}</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{t.projectorTypes.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                {t.projectorTypes.subtitle}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                {
                  title: t.projectorTypes.items[0].title,
                  desc: t.projectorTypes.items[0].desc,
                  features: t.projectorTypes.items[0].features,
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.projectorTypes.items[1].title,
                  desc: t.projectorTypes.items[1].desc,
                  features: t.projectorTypes.items[1].features,
                  image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.projectorTypes.items[2].title,
                  desc: t.projectorTypes.items[2].desc,
                  features: t.projectorTypes.items[2].features,
                  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.projectorTypes.items[3].title,
                  desc: t.projectorTypes.items[3].desc,
                  features: t.projectorTypes.items[3].features,
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
                }
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{type.title}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{type.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {type.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Screen Types Section */}
        <section id="screen-types" className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">{t.screenTypes.badge}</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{t.screenTypes.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                {t.screenTypes.subtitle}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                {
                  title: t.screenTypes.items[0].title,
                  desc: t.screenTypes.items[0].desc,
                  features: t.screenTypes.items[0].features,
                  image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.screenTypes.items[1].title,
                  desc: t.screenTypes.items[1].desc,
                  features: t.screenTypes.items[1].features,
                  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.screenTypes.items[2].title,
                  desc: t.screenTypes.items[2].desc,
                  features: t.screenTypes.items[2].features,
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: t.screenTypes.items[3].title,
                  desc: t.screenTypes.items[3].desc,
                  features: t.screenTypes.items[3].features,
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                }
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all hover:shadow-xl hover:shadow-slate-200"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{type.title}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{type.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {type.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-emerald-600 p-8 sm:p-12 lg:rounded-[3rem] lg:p-24">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className="text-white">
                  <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">{t.whyUs.title}</h2>
                  <p className="mt-4 text-base text-emerald-50 opacity-90 sm:mt-6 sm:text-lg">
                    {t.whyUs.subtitle}
                  </p>
                  
                  <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
                    {t.whyUs.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white sm:h-8 sm:w-8">
                          <CheckCircle2 size={16} className="sm:size-5" />
                        </div>
                        <span className="text-base font-medium sm:text-lg lg:text-xl">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative hidden lg:block">
                  <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-pulse" />
                  <div className="relative flex aspect-square items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Presentation size={100} className="text-white xl:size-[120px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">{t.contact.title}</h2>
                <p className="mt-4 text-base text-slate-600 sm:mt-6 sm:text-lg">
                  {t.contact.subtitle}
                </p>

                <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <MapPin size={20} className="sm:size-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">{t.contact.address.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base">{t.contact.address.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Phone size={20} className="sm:size-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">{t.contact.phone.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base" dir="ltr">{t.contact.phone.value}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Mail size={20} className="sm:size-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">{t.contact.email.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base">{t.contact.email.value}</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-slate-50 p-6 sm:p-10 lg:rounded-[2rem] lg:p-12"
              >
                <form className="grid gap-5 sm:gap-6">
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700 sm:text-sm">{t.contact.form.name}</label>
                      <input 
                        type="text" 
                        placeholder={t.contact.form.namePlaceholder}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 sm:text-base"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold text-slate-700 sm:text-sm">{t.contact.form.email}</label>
                      <input 
                        type="email" 
                        placeholder={t.contact.form.emailPlaceholder}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-semibold text-slate-700 sm:text-sm">{t.contact.form.subject}</label>
                    <input 
                      type="text" 
                      placeholder={t.contact.form.subjectPlaceholder}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 sm:text-base"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-semibold text-slate-700 sm:text-sm">{t.contact.form.message}</label>
                    <textarea 
                      rows={4} 
                      placeholder={t.contact.form.messagePlaceholder}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 sm:text-base"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="mt-2 rounded-xl bg-emerald-600 py-3 text-base font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 active:scale-95 sm:mt-4 sm:py-4 sm:text-lg"
                  >
                    {t.contact.form.submit}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <GraduationCap size={18} />
              </div>
              <span className="text-base font-bold text-slate-900 sm:text-lg">
                {isRtl ? 'ارنون للتجهيزات المكتبية' : 'Arnon Office Equipment'}
              </span>
            </div>
            <p className="text-xs text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
