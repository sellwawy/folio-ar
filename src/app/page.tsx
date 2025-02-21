import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Work from '@/components/Work'

async function HomePage() {
   return (
      <main>
         <Hero />
         <About />
         <Experience />
         <Work />
         <Contact />
      </main>
   )
}
export default HomePage
