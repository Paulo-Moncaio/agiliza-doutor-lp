import About from '@/components/About'
import Flow from '@/components/Flow'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Flow />
      </main>
    </div>
  )
}
