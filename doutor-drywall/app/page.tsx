import Hero from '../components/Hero'
import Materials from '../components/Materials'
import ServiceArea from '../components/ServiceArea'
import Faq from '../components/Faq'
import ContactCall from '../components/ContactCall'
import Footer from '../components/Footer'
import AnnouncementBar from '../components/AnnouncementBar'

export default function Home() {
  const announcements = ['🚚 Frete grátis na Zona Sudoeste do Rio de Janeiro']

  return (
    <main>
      <AnnouncementBar messages={announcements} />
      <Hero />
      <Materials />
      <Faq />
      <ServiceArea />
      <ContactCall />
      <Footer />
    </main>
  )
}
