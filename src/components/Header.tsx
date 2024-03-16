import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

function NavLink({ children, href }: PropsWithChildren & LinkProps) {
  return (
    <Link
      className="text-sm text-agiliza-azul-naval hover:font-bold transition-all"
      href={href}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="bg-white">
      <div className=" px-4 py-8 md:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14 mx-auto max-w-5xl">
          <Link className="font-semibold flex items-center gap-2" href="#">
            <Image
              src={'/agiliza-logo.svg'}
              width={136}
              height={59}
              alt={'agiliza doutor logo'}
              className="border-none"
            />
          </Link>
          <nav className="hidden md:flex items-center justify-between gap-4 text-sm">
            <NavLink href={'#Sobre nós'}>Sobre nós</NavLink>
            <NavLink href={'#como funciona'}>como funciona</NavLink>
            <NavLink href={'#soluções'}>soluções</NavLink>
            <NavLink href={'#blog'}>blog</NavLink>
            <NavLink href={'#solicitar uma demo'}>solicitar uma demo</NavLink>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              className="rounded-full border-[2px] px-8 hover:bg-agiliza-green transition-all duration-300  border-agiliza-green flex items-center gap-2 py-2 text-sm"
              href="#"
            >
              <span>login</span>
            </Link>
            <Link
              className="bg-agiliza-azul-naval text-white hover:text-agiliza-azul-naval hover:bg-transparent border-[2px] transition-colors duration-300 border-agiliza-azul-naval px-2 md:px-8 rounded-full flex items-center gap-2 py-2 text-sm font-medium"
              href="#"
            >
              <span>registre-se</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
