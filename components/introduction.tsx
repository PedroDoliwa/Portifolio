import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl  mb-3">Olá, eu sou</h3>
        <h1 className="text-4xl font-bold mb-3 ">Pedro Doliwa</h1>
        <h2 className=" text-2xl text-gray-400">Full Stack Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> Entre em contato
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv.pdf"
              target="_black"
            >
              <Paperclip className="mr-2" /> Baixar Currículo
            </Link>
          </div>
        </div>
        <div className=" grid place-items-center ">
          <Image
            src="/fotoPerfil.jpg"
            alt="Foto de Perfil"
            width={300}
            height={300}
            className="  mt-10 rounded-xl shadow-2xl shadow-black dark:shadow-white"
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
