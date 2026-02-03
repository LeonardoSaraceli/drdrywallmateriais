'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './../styles/../styles/Materials.module.css'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'

export default function Materials() {
  const products = [
    {
      id: 1,
      name: 'Placa Drywall',
      description: 'Ideal para paredes e tetos internos em ambientes secos.',
      whatsappMessage:
        'Olá! Tenho interesse na Placa de Drywall. Gostaria de saber mais sobre o produto.',
    },
    {
      id: 2,
      name: 'Coralit Ultra Resistência',
      description:
        'Tinta acrílica de altíssima resistência para fachadas e áreas internas.',
      whatsappMessage:
        'Olá! Tenho interesse na Tinta Coralit Ultra Resistência para meu projeto.',
    },
    {
      id: 3,
      name: 'Ferramentas Profissionais',
      description:
        'Conjunto completo de ferramentas especializadas para instalação de drywall.',
      whatsappMessage:
        'Olá! Tenho interesse em ferramentas profissionais para o meu projeto.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [isHoveringQuickAdd, setIsHoveringQuickAdd] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null)

  // Funções de navegação
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
    resetAutoPlay()
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    resetAutoPlay()
  }

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Ajuste o breakpoint conforme necessário
    }

    // Verificar na montagem
    checkMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    autoPlayInterval.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 8000) // 5 segundos
  }, [products.length])

  const resetAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current)
    }
    startAutoPlay()
  }

  // Touch swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  // Calcular índices para os slides vizinhos
  const getPrevIndex = () =>
    (activeIndex - 1 + products.length) % products.length
  const getNextIndex = () => (activeIndex + 1) % products.length

  // Função para obter a classe CSS da imagem baseada no índice
  const getImageClass = (index: number) => {
    const productIndex = index % products.length
    switch (productIndex) {
      case 0:
        return styles.image1
      case 1:
        return styles.image2
      case 2:
        return styles.image3
      case 3:
        return styles.image4
      case 4:
        return styles.image5
      default:
        return styles.image1
    }
  }

  // Função para gerar link do WhatsApp
  const generateWhatsAppLink = (message: string) => {
    const phoneNumber = '552135562929'
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  // Efeitos
  useEffect(() => {
    startAutoPlay()

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current)
      }
    }
  }, [startAutoPlay])

  // Determinar se deve mostrar o texto
  const shouldShowText = isHoveringQuickAdd || isMobile

  return (
    <section id="produtos-drywall" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Soluções Completas em Drywall</h1>
          <p className={styles.mainDescription}>
            Materiais de qualidade superior para construção a seco, oferecendo
            durabilidade, segurança e excelência no acabamento. Conte com nossa
            expertise no mercado para seu projeto.
          </p>
        </div>

        {/* Carrossel Principal */}
        <div
          className={styles.carouselContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carrossel */}
          <div className={styles.carousel}>
            {/* Botão Anterior */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevSlide}
              aria-label="Produto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slides */}
            <div className={styles.slidesWrapper}>
              {/* Slide Anterior (esquerda) */}
              <div
                className={`${styles.slide} ${styles.prevSlide} ${getImageClass(getPrevIndex())}`}
                onClick={prevSlide}
              >
                <div className={styles.slideOverlay}>
                  <span className={styles.slideHint}>← Anterior</span>
                </div>
              </div>

              {/* Slide Ativo (centro) */}
              <div
                className={`${styles.slide} ${styles.activeSlide} ${getImageClass(activeIndex)}`}
              >
                {/* Quick Add Button */}
                <div
                  className={`${styles.quickAddContainer} ${shouldShowText ? styles.expanded : ''}`}
                  onMouseEnter={() => setIsHoveringQuickAdd(true)}
                  onMouseLeave={() => setIsHoveringQuickAdd(false)}
                >
                  <a
                    href={generateWhatsAppLink(
                      products[activeIndex].whatsappMessage,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickAddButton}
                  >
                    <ShoppingBag size={20} className={styles.quickAddIcon} />
                    {shouldShowText && (
                      <span className={styles.quickAddText}>
                        Solicitar Orçamento
                      </span>
                    )}
                  </a>
                </div>

                {/* Nome do produto no canto inferior esquerdo */}
                <div className={styles.productName}>
                  <h3>{products[activeIndex].name}</h3>
                  <p>{products[activeIndex].description}</p>
                </div>
              </div>

              {/* Próximo Slide (direita) */}
              <div
                className={`${styles.slide} ${styles.nextSlide} ${getImageClass(getNextIndex())}`}
                onClick={nextSlide}
              >
                <div className={styles.slideOverlay}>
                  <span className={styles.slideHint}>Próximo →</span>
                </div>
              </div>
            </div>

            {/* Botão Próximo */}
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextSlide}
              aria-label="Próximo produto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores */}
          <div className={styles.indicators}>
            {products.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h4>Qualidade</h4>
            <p>Produtos certificados e testados para máxima performance</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4>Segurança</h4>
            <p>Materiais que atendem às normas técnicas e de segurança</p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h4>Excelência</h4>
            <p>Produtos selecionados para resultados superiores</p>
          </div>
        </div>
      </div>
    </section>
  )
}
