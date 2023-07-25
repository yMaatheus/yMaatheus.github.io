export function ProjectCardLabel({ name, color }: { name: string, color: string }) {
  return (
    <span className={`inline-block ${color} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
      {name}
    </span>
  );
}
