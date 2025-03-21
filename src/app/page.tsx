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
            Sou um Desenvolvedor Full Stack Pleno com mais de 4 anos de
            experiência em desenvolvimento de software, destacando um forte
            domínio em programação orientada a objetos e funcional, além de
            profundo conhecimento em Design Patterns, React, JavaScript e
            DevOps. Tenho foco em soluções inovadoras, escalabilidade de
            aplicações e otimização de infraestrutura. Estou preparado para
            contribuir de forma eficaz para o sucesso dos seus projetos de
            software.
            <br />
            <br />
            Vejo a tecnologia como uma importante ferramenta para mudarmos
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
        <h1 className="font-bold" id="projects">
          Meus Projetos
        </h1>
        <ProjectList />
      </section>
    </div>
  );
}
