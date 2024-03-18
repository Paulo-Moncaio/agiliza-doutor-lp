import Image from 'next/image'
import Link from 'next/link'
import bgLogo from '../../public/logo-hero-section.png'
import arrowRightIcon from '../../public/arrow-right-circled.svg'
import doctorImage from '../../public/doctor-sitting-on-the-floor-with-books.png'
import laptopImage from '../../public/laptop-white-screen.png'

export default function Hero() {
  return (
    <section className="relative h-full w-full max-w-screen-2xl">
      <Image className="hidden md:block absolute -z-10" src={bgLogo} alt={''} />
      <Image
        src={doctorImage}
        className="hidden top-10 absolute -z-10 md:block"
        quality={100}
        alt={''}
      />
      <Image
        src={laptopImage}
        className="hidden absolute xl:block right-0 bottom-0"
        alt={''}
      />
      <div className="flex flex-col items-end xl:items-center py-10 md:py-44">
        <div className="max-w-lg text-center">
          <h1 className="text-5xl font-bold text-agiliza-azul-naval ">
            Descomplique seus
            <span className="text-agiliza-green drop-shadow-lg">
              {' '}
              processos
            </span>{' '}
            cirúrgicos.
          </h1>
          <p className="mt-10 px-8 text-xl">
            sistema que gerencia dados e prazos, trazendo maior agilidade de
            todo o processo.
          </p>
          <Link
            href="#"
            className="flex max-w-max mx-auto mt-16 rounded-full space-x-4 bg-agiliza-green py-4 pl-10 pr-6"
          >
            <p>Entenda como funciona</p>
            <Image src={arrowRightIcon} alt={''} />
          </Link>
        </div>
      </div>
    </section>
  )
}
