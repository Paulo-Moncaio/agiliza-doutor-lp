import Image from 'next/image'
import womanTalkingImage from '../../public/woman-talking-with-chatbot.png'
import rightArrow from '../../public/arrow-right.svg'
import cadastroIcon from '../../public/cadastro.svg'
import loginIcon from '../../public/login.svg'
import processosIcon from '../../public/processos.svg'
import Link from 'next/link'

export default function About() {
  return (
    <section className="flex mt-20 pt-16 pb-8 px-2 justify-center items-center flex-col lg:flex-row bg-[#F1F3F6]">
      <div className="flex flex-col">
        <h4 className="text-3xl min-w-72">
          Mostramos todas <br />
          as fases do processo, <br />
          <span className="text-agiliza-green">identificando atrasos</span>{' '}
          <br />
          que possam impactar <br />
          seus prazos.
        </h4>
        <Link
          className="mt-16 max-w-[236px] flex items-center justify-center py-4 text-sm font-normal bg-agiliza-azul-naval text-white transition-all duration-300 ease-in-out hover:scale-105"
          target="_blank"
          href={'https://forms.kommo.com/rtlcwvl'}
        >
          <p className="px-5">solicite uma demo</p>
          <Image src={rightArrow} alt={''} />
        </Link>
      </div>
      <Image
        className=" py-8 md:py-0 "
        quality={100}
        src={womanTalkingImage}
        alt={'woman talking on cellphone'}
      />
      <div className="relative  lg:place-self-start">
        <div className="absolute w-[2px] h-[105px] bg-agiliza-green" />
        <h4 className="ml-3 text-3xl ">
          Conte com o <br />
          <span className="text-agiliza-green">Agiliza Doutor</span> em <br />
          todas as etapas
        </h4>
        <div className="flex flex-col ml-3 gap-y-4 mt-8 md:mt-16">
          <div className="flex gap-x-4">
            <Image src={cadastroIcon} alt={''} />
            <p>cadastro</p>
          </div>
          <div className="flex gap-x-4">
            <Image src={loginIcon} alt={''} />
            <p>login</p>
          </div>
          <div className="flex gap-x-4">
            <Image src={processosIcon} alt={''} />
            <p>processos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
