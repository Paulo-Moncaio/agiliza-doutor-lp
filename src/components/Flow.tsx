const flow = [
  {
    id: 1,
    title: 'Validação do fluxo de acompanhamento de cirurgias:',
    description:
      'Garanta eficiência e segurança do processo com nossa solução especializada.',
  },
  {
    id: 2,
    title: 'Potencialize seus processos:',
    description:
      'Combinando a análise de prazos e suas respectivas cobranças, aumentamos a assertividade das  autorizações.',
  },
  {
    id: 3,
    title: 'Experiência do cliente:',
    description:
      'Proporcione uma melhor experiência para seus clientes com soluções rápidas.',
  },
]

export default function Flow() {
  return (
    <section className="relative">
      <div className="bg-agiliza-azul-naval m-0 absolute h-[calc(100%-50px)] -z-10 w-full"></div>
      <div className="px-2 md:px-8 max-w-screen-xl mx-auto">
        <div className="pt-20 px-2">
          <h3 className="text-agiliza-green text-lg">
            Acesse dados da solicitação cirúrgica.
          </h3>
          <h4 className="max-w-80 mt-4 text-white font-bold text-[32px]">
            Análise as necessidades do fluxo com facilidade.
          </h4>
        </div>
        {/* Cards */}
        <div className="">
          <div className="flex flex-col items-center md:flex-row gap-y-8 md:gap-x-10 justify-between mt-20 px-4 pb-7 md:overflow-x-scroll lg:overflow-hidden">
            {flow.map((item) => (
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ id, title, description }: (typeof flow)[0]) {
  return (
    <div className="bg-white p-12 w-full min-w-72 max-w-[380px] h-64 relative shadow-xl">
      <span className="text-xl font-bold absolute top-12 left-5">{`0${id}`}</span>
      <h5 className="text-agiliza-green mb-4">{title}</h5>
      <p>{description}</p>
    </div>
  )
}
