'use client'

import React, { useState } from 'react'
import styles from './../styles/Faq.module.css'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: 'O que é drywall?',
      answer:
        'Drywall é um sistema construtivo a seco utilizado para a criação de paredes, forros e divisórias internas. É composto por placas de gesso acartonado fixadas em estruturas metálicas, oferecendo rapidez, limpeza e excelente acabamento.',
    },
    {
      id: 2,
      question: 'Drywall é resistente?',
      answer:
        'Sim. Quando instalado corretamente e com os materiais adequados, o drywall é resistente e durável, sendo amplamente utilizado em residências, lojas e escritórios.',
    },
    {
      id: 3,
      question: 'Qual a diferença entre drywall e alvenaria?',
      answer:
        'O drywall proporciona obra mais rápida, menos sujeira, menor peso estrutural e maior facilidade para reformas. A alvenaria tradicional demanda mais tempo, entulho e mão de obra.',
    },
    {
      id: 4,
      question: 'Drywall pode ser usado em áreas comerciais?',
      answer:
        'Sim. O drywall é muito utilizado em lojas, escritórios e salas comerciais, permitindo divisórias rápidas, modernas e com ótimo acabamento.',
    },
    {
      id: 5,
      question: 'Vocês vendem apenas drywall?',
      answer:
        'Nosso foco principal é drywall, mas também trabalhamos com materiais complementares necessários para a instalação, como perfis metálicos, parafusos e acessórios.',
    },
    {
      id: 6,
      question: 'A Doutor Drywall atende pessoas físicas e profissionais?',
      answer:
        'Sim. Atendemos profissionais da construção civil, instaladores de drywall, iniciantes e clientes finais.',
    },
    {
      id: 7,
      question: 'Vocês oferecem orientação técnica no atendimento?',
      answer:
        'Sim. Nosso atendimento é consultivo. Ajudamos você a escolher o material correto para seu tipo de projeto.',
    },
    {
      id: 8,
      question: 'A Doutor Drywall faz entrega?',
      answer:
        'Sim. Realizamos entregas rápidas no Rio de Janeiro e região metropolitana, com frete grátis para Zona Sudoeste.',
    },
    {
      id: 9,
      question: 'Como posso solicitar um orçamento de drywall?',
      answer:
        'Basta entrar em contato pelo WhatsApp para falar com um especialista e solicitar seu orçamento.',
    },
  ]

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>
            Perguntas Frequentes sobre Drywall
          </h2>
          <p className={styles.faqSubtitle}>
            Tire suas dúvidas sobre drywall, instalação, materiais e nossos
            serviços
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${activeIndex === item.id ? styles.active : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(item.id)}
                aria-expanded={activeIndex === item.id}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.faqIcon}>
                  {activeIndex === item.id ? '−' : '+'}
                </span>
              </button>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ainda tem dúvidas?</h3>
            <p className={styles.ctaDescription}>
              Nossa equipe está pronta para esclarecer todas suas perguntas
              sobre drywall e ajudar no seu projeto.
            </p>
            <a
              href="https://wa.me/552135562929?text=Olá! Tenho algumas dúvidas sobre drywall e gostaria de conversar com um especialista."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <span className={styles.buttonText}>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
