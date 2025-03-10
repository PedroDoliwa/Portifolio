import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Portifolio from "@/components/portifolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
