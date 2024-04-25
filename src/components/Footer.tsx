import Image from 'next/image'
import Link from 'next/link'
import emailIcon from '../../public/email.svg'
import cellphoneIcon from '../../public/cellphone.svg'
import briefcaseIcon from '../../public/briefcase.svg'

export default function Footer() {
  return (
    <footer className="max-w-5xl px-4 mx-auto">
      <div className="flex justify-between lg:justify-around flex-col md:flex-row mt-10 mb-4 text-sm gap-y-8">
        <div>
          <Image src={'/agiliza-logo.svg'} width={118} height={51} alt={''} />
        </div>
        <div className="flex flex-col">
          <p>agiliza doutor</p>
          <div className="text-gray-500 font-normal mt-2 flex flex-col">
            {/* <Link href={'#'}>Quem somos</Link> */}
            <Link href={'#comofunciona'}>Como funciona</Link>
            <Link href={'#solucoes'}>Soluções</Link>
            {/* <Link href={'#'}>Blog</Link> */}
            <Link
              target="_blank"
              href={
                'https://api.whatsapp.com/send?phone=556196051101&text=Quero%20solicitar%20uma%20demo%20da%20plataforma%20Agiliza%C2%A0Doutor%21'
              }
            >
              Solicitar demo
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <Link
            target="_blank"
            href={'https://forms.kommo.com/rtlcwvl'}
            className="flex bg-agiliza-green py-4 text-center justify-center hover:bg-agiliza-green/80 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Image src={briefcaseIcon} alt={''} />
            <p className="pl-4">solicite sua proposta</p>
          </Link>
          <div className="flex flex-col gap-y-1">
            <p className="mb-1">contato</p>
            <div className="flex gap-x-2">
              <Image src={emailIcon} alt={''} />
              <p className="text-gray-500 font-normal">
                atendimento@agilizadoutor.com.br
              </p>
            </div>
            <div className="flex">
              <Image src={cellphoneIcon} alt={''} />
              <p className="text-gray-500 font-normal">+55 (61) 99605 1101</p>
            </div>
          </div>
          <div>
            <p>siga nossas redes sociais</p>
          </div>
        </div>
      </div>
      <span>© 2024 AgilizaDoutor. Todos os direitos reservados.</span>
    </footer>
  )
}
