import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  href: string;
  border?: boolean;
}

export function SocialIcon({ name, href, border=true, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);
  return (
    <a
      href={href}
      className={`w-8 h-8 flex justify-center items-center rounded group ${border && 'border-2  border-green-600 hover:border-green-700'} hover:bg-black`}
      target="_blank"
    >
      <LucideIcon
        size={18}
        fill="#222"
        absoluteStrokeWidth={false}
        className="text-[#222] group-hover:fill-white group-hover:text-white"
        {...props}
      />
    </a>
  );
}
