import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  href: string;
}

export function SocialIcon({ name, href, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);
  return (
    <a
      href={href}
      className="w-8 h-8 flex justify-center items-center border-2 rounded group border-green-600 hover:border-green-700 hover:bg-black"
      target="_blank"
    >
      <LucideIcon
        size={16}
        fill="#222"
        absoluteStrokeWidth={false}
        className="text-[#222] group-hover:fill-white group-hover:text-white"
        {...props}
      />
    </a>
  );
}
