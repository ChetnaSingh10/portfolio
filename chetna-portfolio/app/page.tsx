import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Loader />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[110] focus:left-3 focus:top-3 btn-pixel">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
