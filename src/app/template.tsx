"use client";

import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { getActualYear } from "@/utils/TimeUtil";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = (!menu ? "hidden" : "scroll");
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <header className="flex w-full mx-auto justify-around p-4 md:py-16">
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={128}
            height={128}
            className="hidden md:block"
          />
          <p>Desenvolvedor Web</p>
        </div>

        <nav className="flex gap-4 items-center max-sm:hidden">
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

        <nav className="flex items-center sm:hidden">
          <button title="menu button" type="button" onClick={toggleMenu}>
            <Menu className="w-full h-full" />
            {menu && (
              <div className="absolute w-full min-h-screen bg-white left-0">
                <section className="h-full flex flex-col justify-center items-center">
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
                </section>
              </div>
            )}
          </button>
        </nav>
      </header>
      <main className="flex flex-1 mx-auto">{children}</main>
      <footer className="mx-auto p-4 md:py-16">
        <p>© {getActualYear()}. All Rights Reserved to Matheus Henrique.</p>
      </footer>
    </div>
  );
}