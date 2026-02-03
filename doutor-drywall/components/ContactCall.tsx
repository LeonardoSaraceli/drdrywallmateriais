import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import styles from './../styles/ContactCall.module.css'

export default function ContactCall() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Entre em Contato</h2>
            <p className={styles.description}>
              Conte com nossa equipe especializada para orçamentos, dúvidas
              técnicas e suporte profissional. Estamos prontos para atender sua
              necessidade.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* WhatsApp - Contato Principal */}
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaWhatsapp className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>WhatsApp</h3>
              </div>
              <p className={styles.cardDescription}>
                Atendimento rápido e direto para orçamentos e dúvidas técnicas.
              </p>
              <a
                href="https://wa.me/552135562929?text=Olá! Gostaria de fazer um orçamento de drywall"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
              >
                <FaWhatsapp className={styles.buttonIcon} />
                <span>Entrar em contato</span>
              </a>
            </div>

            {/* Telefone */}
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaPhone className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>Telefone</h3>
              </div>
              <p className={styles.cardDescription}>
                Atendimento telefônico para consultas e informações.
              </p>
              <div className={styles.contactInfo}>
                <a href="tel:+552135562929" className={styles.phoneLink}>
                  (21) 3556-2929
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>Loja Física</h3>
              </div>
              <p className={styles.cardDescription}>
                Visite nossa loja para ver os materiais e receber atendimento
                presencial.
              </p>
              <div className={styles.addressInfo}>
                <p className={styles.address}>
                  Estr. dos Bandeirantes, 3736, 22775-114, Curicica, Rio de
                  Janeiro
                </p>
                <a
                  href="https://maps.app.goo.gl/XfeLSAtqqgUrYx8E8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsButton}
                >
                  <FaMapMarkerAlt className={styles.buttonIcon} />
                  <span>Ver no Mapa</span>
                </a>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className={styles.hoursSection}>
            <div className={styles.hoursHeader}>
              <FaClock className={styles.hoursIcon} />
              <h4 className={styles.hoursTitle}>Horário de Funcionamento</h4>
            </div>
            <div className={styles.hoursGrid}>
              <div className={styles.hoursItem}>
                <span className={styles.day}>Segunda a Sexta</span>
                <span className={styles.time}>7h às 17h</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.day}>Sábado</span>
                <span className={styles.time}>7h às 12h</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.day}>Domingo</span>
                <span className={styles.time}>Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
