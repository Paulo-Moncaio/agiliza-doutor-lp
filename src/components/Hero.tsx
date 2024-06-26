import Image from 'next/image'
import Link from 'next/link'
import bgLogo from '../../public/agilizaIcon.svg'
import arrowRightIcon from '../../public/arrow-right-circled.svg'
import doctorImage from '../../public/doctor-sitting-on-the-floor-with-books.png'

export default function Hero() {
  return (
    <section className="relative h-full w-full max-w-screen-xl mx-auto">
      <Image
        className="hidden md:block absolute  left-[-310px] -z-10 w-[620px] h-[620px]"
        src={bgLogo}
        alt={''}
      />
      <div className="flex justify-center">
        <Image
          src={doctorImage}
          className="hidden top-10 object-contain -z-10 md:flex"
          quality={100}
          alt={''}
        />

        <div className="flex flex-col items-end md:items-center w-full max-w-lg py-10 md:py-44 md:-ml-32">
          <div className="max-w-lg text-center">
            <h1 className="text-5xl font-bold text-agiliza-azul-naval ">
              Descomplique seus
              <span className="text-agiliza-green drop-shadow-lg">
                {' '}
                processos
              </span>{' '}
              cirúrgicos
            </h1>
            <p className="mt-10 px-8 text-xl">
              sistema que gerencia dados e prazos, trazendo maior agilidade de
              todo o processo.
            </p>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=556196051101&text=Quero%20conhecer%20mais%20sobre%20a%20plataforma%20Agiliza%C2%A0Doutor!"
              className="flex max-w-max mx-auto mt-16 rounded-full space-x-4 bg-agiliza-green py-4 pl-10 pr-6 hover:bg-agiliza-green/80 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
            >
              <p>Entenda como funciona</p>
              <Image src={arrowRightIcon} alt={''} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
