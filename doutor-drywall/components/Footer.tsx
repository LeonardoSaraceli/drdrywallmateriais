import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'
import styles from './../styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.mainContent}>
          {/* Logo e Descrição */}
          <div className={styles.logoSection}>
            <h3 className={styles.logo}>Doutor Drywall</h3>
            <p className={styles.description}>
              Especialistas em drywall no Rio de Janeiro há mais de 13 anos.
              Oferecemos materiais de qualidade, atendimento técnico
              especializado e entrega rápida para toda a região metropolitana.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/doutordrywallemateriais"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a
                href="https://www.facebook.com/doutordrywallemateriais/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a
                href="https://wa.me/552135562929"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>Endereço</span>
                  <a
                    href="https://maps.app.goo.gl/XfeLSAtqqgUrYx8E8"
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Estr. dos Bandeirantes, 3736
                    <br />
                    Rio de Janeiro - RJ, 22775-114
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>Telefone</span>
                  <a href="tel:2135562929" className={styles.contactLink}>
                    (21) 3556-2929
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaWhatsapp />
                </div>
                <div className={styles.contactContent}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <a
                    href="https://wa.me/552135562929"
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (21) 3556-2929
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <h4 className={styles.sectionTitle}>Precisa de Ajuda?</h4>
            <p className={styles.ctaDescription}>
              Fale com nossa equipe especializada para orçamentos, dúvidas
              técnicas e suporte profissional.
            </p>
            <a
              href="https://wa.me/552135562929?text=Olá! Gostaria de fazer um orçamento de drywall"
              className={styles.whatsappButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.buttonIcon} />
              Solicitar Orçamento
            </a>
          </div>
        </div>

        {/* Copyright e Informações */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © {currentYear} Doutor Drywall - Todos os direitos reservados.
            </p>
            <p className={styles.companyInfo}>
              Especialistas em drywall e materiais para construção a seco no Rio
              de Janeiro.
            </p>
          </div>

          <div className={styles.seoText}>
            <p>
              Drywall RJ | Loja de Drywall no Rio de Janeiro | Material para
              Drywall | Placas de Drywall | Perfis Metálicos | Instalação de
              Drywall | Orçamento Drywall Rio de Janeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
