import Image from 'next/image'

export default function Partners() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10 mb-10">
      <div className="relative flex justify-center ">
        <div className="absolute top-1/2 -z-10 bg-[#E0E0E0] w-full h-[1px]" />
        <h2 className="text-agiliza-green text-2xl bg-white px-8 text-center w-fit ">
          Empresas que acreditam na plataforma
        </h2>
      </div>
      <div className="flex w-full items-center lg:justify-center py-10 overflow-x-scroll md:overflow-hidden">
        <Image
          src={'/dortmed.png'}
          alt={''}
          width={119}
          height={65}
          className="w-[119px] h-[65px] mr-8 object-contain"
        />
        <Image
          src={'/dinamica.png'}
          alt={''}
          width={143}
          height={72}
          className="w-[143px] h-[72px] mr-8 object-contain"
        />
        <Image
          src={'/shark-medical.png'}
          alt={''}
          width={147}
          height={55}
          className="w-[147px] h-[55px] mr-8 object-contain"
        />
        <Image
          src={'/osteofix.png'}
          alt={''}
          width={121}
          height={22}
          className="w-[121px] h-[22px] mr-8 object-contain"
        />
        <Image
          src={'/wolford-medical.png'}
          alt={''}
          width={185}
          height={64}
          className="w-[185px] h-[64px] object-contain"
        />
      </div>
      <div className="h-[1px] w-full bg-[#E0E0E0]" />
    </section>
  )
}
