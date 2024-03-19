import Image from 'next/image'
import lampadaIcon from '../../public/lampada.svg'
import rightArrow from '../../public/arrow-right.svg'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <section className="px-4">
      <div className="max-w-5xl flex flex-col md:flex-row gap-8 mb-10 pt-10 items-center justify-center">
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
          className="mt-16 pr-5 max-w-[236px] flex items-center justify-center py-4 text-sm font-normal bg-agiliza-azul-naval text-white"
          href={'#'}
        >
          <p className="px-5">solicite uma demo</p>
          <Image src={rightArrow} alt={''} />
        </Link>
      </div>
      <div className="h-[1px] w-full bg-[#E0E0E0]" />
    </section>
  )
}
