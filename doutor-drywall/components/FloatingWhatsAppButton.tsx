'use client'

import { FaWhatsapp } from 'react-icons/fa'
import styles from './../styles/FloatingWhatsAppButton.module.css'

export default function FloatingWhatsAppButton() {
  const phoneNumber = '552135562929'
  const message = 'Olá! Gostaria de falar com um especialista em drywall.'

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
      <span className={styles.text}>Fale agora</span>
    </a>
  )
}
