import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatWeDo, Programs } from "./components/Programs";
import { Why, Testimonial } from "./components/Why";
import { CTA, Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Programs />
        <Why />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
