"use client";

import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full h-screen">
      <header className="flex w-full mx-auto justify-around py-16">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={128} height={128} />
          <p>Desenvolvedor de Software</p>
        </div>
        <nav className="flex gap-4 items-center">
          <Link
            href="/"
            className={`${
              pathname === "/" && "text-green-600 "
            } hover:text-green-700`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`${
              pathname === "/about" && "text-green-600 "
            } hover:text-green-700`}
          >
            Sobre
          </Link>
        </nav>
      </header>
      <main className="flex flex-1">{children}</main>
      <footer className="mx-auto py-16">
        <p>© 2023. All Rights Reserved to Matheus Henrique.</p>
      </footer>
    </div>
  );
}
