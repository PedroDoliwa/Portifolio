import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="md:flex md:justify-between">
        <div>
          <h4 className="text-3xl font-bold my-6 md:my-0">Pedro Doliwa</h4>
        </div>
        <div className="px-2 flex justify-between md:gap-8 items-center">
          <Link href="#about-me">Sobre mim</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#portifolio">Portifólio</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="text-center">
        &copy; 2025 | Desenvolvido por Pedro Doliwa
      </div>
    </footer>
  );
};

export default Footer;
