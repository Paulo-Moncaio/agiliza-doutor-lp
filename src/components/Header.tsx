import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

function NavLink({
  children,
  ...rest
}: PropsWithChildren & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className="text-sm text-agiliza-azul-naval hover:text-agiliza-azul-naval/50 duration-300 transition-all"
      {...rest}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="bg-white">
      <div className="px-4 py-8 md:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14 mx-auto max-w-5xl">
          <Link className="font-semibold flex items-center gap-2" href="/">
            <Image
              src={'/agiliza-logo.svg'}
              width={136}
              height={59}
              alt={'agiliza doutor logo'}
              className="border-none"
            />
          </Link>
          <a href=""></a>
          <nav className="hidden md:flex items-center justify-between gap-10 text-sm">
            {/* <NavLink href={'#Sobre nós'}>Sobre nós</NavLink> */}
            <NavLink href={'#comofunciona'}>como funciona</NavLink>
            <NavLink href={'#solucoes'}>soluções</NavLink>
            <NavLink
              target="_blank"
              href={
                'https://api.whatsapp.com/send?phone=556196051101&text=Quero%20solicitar%20uma%20demo%20da%20plataforma%20Agiliza%C2%A0Doutor%21'
              }
            >
              solicitar uma demo
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              className="rounded-full border-[2px] px-8 hover:scale-110 hover:bg-agiliza-green transition-all duration-300  border-agiliza-green flex items-center gap-2 py-2 text-sm"
              href="https://agilizadoutor.com.br/login"
            >
              <span>login</span>
            </Link>
            <Link
              className="bg-agiliza-azul-naval text-white hover:scale-110 hover:text-agiliza-azul-naval hover:bg-transparent border-[2px] transition-all duration-300 border-agiliza-azul-naval px-2 md:px-8 rounded-full flex items-center gap-2 py-2 text-sm font-medium"
              href="https://agilizadoutor.com.br/cadastro"
            >
              <span>registre-se</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
