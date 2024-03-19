import Image from 'next/image'
import doctorsImage from '../../public/young-doctors-standing-together.png'

const texts = [
  {
    title: 'Análise de prazos ',
    description:
      'Monitore prazos e demandas atendidas pelos usuários em nossa plataforma, garantindo credibilidade  e fluidez nos processos',
  },
  {
    title: 'Dashboard transparante',
    description:
      'Explore nossa área com detalhes e estatísticas dos processos , relatórios e indicadores das cirurgias, par uma gestão mais eficiente.',
  },
  {
    title: 'Tomada de decisões',
    description:
      'Tome decisões eficientes, focando no que realmente impacta o resultado final.',
  },
  {
    title: 'Dados em tempo real',
    description:
      'Atualização de dados: em cada fase, você tem um prazo médio para atualizar os status. Caso não o faça, os envolvidos recebem notificações e lembretes.',
  },
]

export default function Journey() {
  return (
    <section className="px-4">
      <div className="max-w-5xl flex flex-col md:flex-row gap-y-8  mb-20 pt-10 items-center justify-center">
        <Image
          src={doctorsImage}
          alt={''}
          className="object-contain md:self-start"
        />
        <aside className="relative max-w-sm">
          <div className="absolute w-[1px] h-full bg-agiliza-cinza" />
          <div className="absolute w-[3px] h-[105px] bg-agiliza-green left-[-1px]" />
          <div className="ml-10">
            <h2 className="text-lg">Entenda como funciona</h2>
            <h3 className="mt-5 text-3xl ">
              <span className="text-agiliza-green">Jornada segura</span>
              <br /> e simples
            </h3>
            {texts.map((text, index) => (
              <TextSection key={index} {...text} />
            ))}
          </div>
        </aside>
      </div>
      <div className="h-[1px] w-full bg-[#E0E0E0]" />
    </section>
  )
}

function TextSection({ title, description }: (typeof texts)[0]) {
  return (
    <div className="mt-8 font-normal">
      <h4 className="text-agiliza-green text-lg">{title}</h4>
      <p className="mt-4 text-sm text-gray-500 ">{description}</p>
    </div>
  )
}
