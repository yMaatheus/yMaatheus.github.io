import Image from "next/image";
import Logo from "/public/logo.png";
import { SocialIcon } from "@/components/SocialIcon";
import { ButtonResume } from "@/components/ButtonResume";

export default function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col gap-6 p-4 md:py-16 md:flex-row">
      <Image
        src={Logo}
        alt="Foto de perfil"
        width={300}
        height={600}
        className="w-full h-full md:w-auto md:h-auto"
      />
      <section className="flex flex-col gap-10">
        <section className="flex flex-col gap-4 md:gap-16">
          <h1 className="text-2xl font-bold md:text-4xl">
            Olá, Me chamo Matheus!
          </h1>
          <p className="max-w-3xl border-l-2 border-gray-300 px-4 italic md:px-6">
            Apaixonado por tecnologia e inovação. Desde cedo, sempre tive a
            paixão de criar e inovar através da tecnologia. Quando eu tinha 13
            anos, comecei a me aventurar com Minecraft, Java e MySQL, criando
            meus primeiros plugins e proporcionando alegria para milhares de
            jogadores nos servidores em que colaborei. Hoje, vejo a tecnologia
            como uma importante ferramenta para mudarmos o mundo e quero
            contribuir para isso como desenvolvedor de software.
          </p>
        </section>

        <section className="flex flex-row gap-8 items-center justify-center md:w-1/2">
          <section className="flex flex-row gap-2">
            <SocialIcon
              name="linkedin"
              href="https://www.linkedin.com/in/ymaatheus/"
            />
            <SocialIcon name="github" href="https://github.com/yMaatheus" />
            <SocialIcon
              name="mail"
              fill="none"
              className="group-hover:text-white"
              href="mailto:profissional.ymatheus@gmail.com"
            />
          </section>

          <ButtonResume />
        </section>
      </section>
    </div>
  );
}
