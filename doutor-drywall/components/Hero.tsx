import { FaWhatsapp } from 'react-icons/fa'
import styles from './../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Overlay profissional */}
      <div className={styles.heroOverlay}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>
              Soluções Profissionais em Drywall para o Rio de Janeiro
            </h1>

            <div className={styles.description}>
              <p>
                Com 13 anos de experiência no mercado, oferecemos materiais de
                alta qualidade, suporte técnico especializado e entrega ágil
                para sua obra.
              </p>
            </div>

            <div className={styles.ctaContainer}>
              <a
                href="https://wa.me/552135562929?text=Olá! Gostaria de falar com um especialista em drywall"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <FaWhatsapp className={styles.buttonIcon} />
                <span className={styles.buttonText}>Solicitar Orçamento</span>
                <span className={styles.buttonSubtext}>Via WhatsApp</span>
              </a>

              <div className={styles.contactInfo}>
                <span className={styles.phoneNumber}>(21) 3556-2929</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator sutil */}
      <a href="#produtos-drywall" className={styles.scrollIndicator}>
        <span>Saiba mais</span>
        <div className={styles.arrowDown}></div>
      </a>
    </section>
  )
}
