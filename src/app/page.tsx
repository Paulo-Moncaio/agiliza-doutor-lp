import About from '@/components/About'
import Flow from '@/components/Flow'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Journey from '@/components/Journey'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Flow />
        <Partners />
        <Journey />
        <HowItWorks />
      </main>
    </div>
  )
}
