import Head from "next/head";
import Image from 'next/image';
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import Portfolio from './components/Portfolio';
import { heroData, servicesData, portfolioProjects } from '../data/data';
import Footer from './components/Footer';



export default function Home() {

return (
    <div>
      <Header />

      <HeroSection title="Viola" subTitle="Software Engineer" />

      <AboutMeSection content="Since the beginning of my journey as a developer..." />

      <div className="container mx-auto my-10">
      <h1 className="text-4xl font-semibold mb-6">Portfolio</h1>
      <Portfolio />
    </div>
      <Footer />
    </div>
  );
}