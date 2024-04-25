import About from '@/components/About'
import Flow from '@/components/Flow'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Journey from '@/components/Journey'
import Partners from '@/components/Partners'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        id="amoforms_script_1306520"
        async
        src="https://forms.kommo.com/forms/assets/js/amoforms.js?1713983860"
      />
      <script>
        {`!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1306520",hash:"53ebfa1e979782064084f4d3530044b3",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`}
      </script>
      <Header />
      <main>
        <Hero />
        <About />
        <Flow />
        <Partners />
        <Journey />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
