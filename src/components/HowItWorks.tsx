import Image from 'next/image'
import lampadaIcon from '../../public/lampada.svg'
import rightArrow from '../../public/arrow-right.svg'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <section id="comofunciona" className="px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mb-10 pt-10 items-center justify-center">
        <div className="flex items-start">
          <Image className="mt-1" src={lampadaIcon} alt={''} />
          <div className="ml-4">
            <h2 className="text-3xl text-agiliza-green">
              Como funciona o Agiliza Doutor?
            </h2>
            <p className="text-lg font-normal">
              combinamos tecnologias robustas para oferecer uma jornada digital
              mais segura.{' '}
            </p>
          </div>
        </div>
        <Link
          className="mt-16 pr-5 max-w-[236px] flex items-center justify-center py-4 text-sm font-normal bg-agiliza-azul-naval text-white transition-all duration-300 ease-in-out hover:scale-105"
          target="_blank"
          href={
            'https://api.whatsapp.com/send?phone=556196051101&text=Quero%20solicitar%20uma%20demo%20da%20plataforma%20Agiliza%C2%A0Doutor%21'
          }
        >
          <p className="px-5">solicite uma demo</p>
          <Image src={rightArrow} alt={''} />
        </Link>
      </div>
      <div className="h-[1px] w-full bg-[#E0E0E0]" />
    </section>
  )
}
