import { ButtonResume } from "@/components/ButtonResume";
import { ProjectList } from "@/components/ProjectList";
import { SocialIcon } from "@/components/SocialIcon";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto items-center mt-16 space-y-52">
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
            jogadores nos servidores em que colaborei.
            <br />
            <br />
            Hoje, vejo a tecnologia como uma importante ferramenta para mudarmos
            o mundo, e quero contribuir desenvolvendo soluções que tenham
            impacto positivo no cotidiano das pessoas.
          </p>
        </section>

        <section className="flex flex-row gap-8 items-center justify-center md:w-2/3">
          <section className="flex flex-row gap-2">
            <SocialIcon
              name="linkedin"
              href="https://www.linkedin.com/in/mthmm/"
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

      <section className="flex flex-col items-center gap-6">
        <h1 className="font-bold" id="projects">Meus Projetos</h1>
        <ProjectList />
      </section>

    </div>
  );
}
