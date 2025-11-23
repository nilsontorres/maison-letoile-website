import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Collection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
