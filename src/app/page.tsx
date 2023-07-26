import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto items-center gap-6">
      <h1 className="font-bold">Meus Projetos</h1>
      <ProjectList />
    </div>
  );
}
