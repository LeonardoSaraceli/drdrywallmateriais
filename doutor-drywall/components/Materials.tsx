'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './../styles/Materials.module.css'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'

export default function Materials() {
  const products = [
    {
      id: 1,
      name: 'Placa Drywall',
      description: 'Ideal para paredes e tetos internos em ambientes secos.',
      whatsappMessage:
        'Olá! Tenho interesse na Placa de Drywall. Gostaria de saber mais sobre o produto.',
      images: [styles.image1, styles.image1_2, styles.image1_3],
    },
    {
      id: 2,
      name: 'Lã de PET',
      description:
        'É um material sustentável, produzido a partir de garrafas PET recicladas, utilizado principalmente como isolante térmico e acústico em construções a seco, como drywall, forros e telhados.',
      whatsappMessage: 'Olá! Tenho interesse na Lã de PET para meu projeto.',
      images: [styles.image2],
    },
    {
      id: 3,
      name: 'Lã de vidro',
      description:
        'Melhora o conforto térmico, reduz ruídos externos, economiza energia (ar condicionado) e aumenta a segurança contra incêndios.',
      whatsappMessage:
        'Olá! Tenho interesse em Lã de vidro para o meu projeto.',
      images: [styles.image3, styles.image3_2, styles.image3_3],
    },
    {
      id: 4,
      name: 'Lã de rocha',
      description: 'É um isolante térmico e acústico de alta performance.',
      whatsappMessage: 'Olá! Tenho interesse na Lã de rocha para meu projeto.',
      images: [styles.image4, styles.image4_2],
    },
    {
      id: 5,
      name: 'Ferragens para Drywall',
      description:
        'Montantes, guias, tabicas, cantoneiras, canaletas, gesso acartonado, perfis, massas, fitas e muito mais.',
      whatsappMessage:
        'Olá! Tenho interesse em Ferragens para Drywall para meu projeto.',
      images: [styles.image5, styles.image5_2, styles.image5_3],
    },
    {
      id: 6,
      name: 'Rodapé',
      description:
        'Para proteger a base das paredes contra impactos e umidade durante a limpeza do piso. Além de dar acabamento estético ao ambiente.',
      whatsappMessage: 'Olá! Tenho interesse no Rodapé para meu projeto.',
      images: [styles.image6, styles.image6_2],
    },
    {
      id: 7,
      name: 'Coralit Ultra Resistência',
      description:
        'Tinta acrílica de altíssima resistência para fachadas e áreas internas.',
      whatsappMessage:
        'Olá! Tenho interesse na Tinta Coralit Ultra Resistência para meu projeto.',
      images: [styles.image7],
    },
    {
      id: 8,
      name: 'Ferramentas Profissionais',
      description:
        'Conjunto completo de ferramentas especializadas para instalação de drywall.',
      whatsappMessage:
        'Olá! Tenho interesse em ferramentas profissionais para o meu projeto.',
      images: [styles.image8],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const [touchStartX, setTouchStartX] = useState(0)
  const [isHoveringQuickAdd, setIsHoveringQuickAdd] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null)

  // Funções de navegação entre produtos
  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % products.length)
    setCurrentImageIndex(0)
    resetAutoPlay()
  }

  const prevProduct = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
    setCurrentImageIndex(0)
    resetAutoPlay()
  }

  const goToProduct = (index: number) => {
    setActiveIndex(index)
    setCurrentImageIndex(0)
    resetAutoPlay()
  }

  // Funções de navegação entre imagens do produto atual
  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % products[activeIndex].images.length,
    )
    resetAutoPlay() // <-- ADICIONADO: reseta o autoplay ao mudar de imagem
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + products[activeIndex].images.length) %
        products[activeIndex].images.length,
    )
    resetAutoPlay() // <-- ADICIONADO: reseta o autoplay ao mudar de imagem
  }

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-play (alterna entre produtos, não entre imagens)
  const startAutoPlay = useCallback(() => {
    autoPlayInterval.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 8000)
  }, [products.length])

  const resetAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current)
    }
    startAutoPlay()
  }

  // Touch swipe: diferencia se o toque foi no slide central ou nos laterais
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 50) {
      // Verifica se o toque foi no slide central (área do produto ativo)
      const target = e.target as HTMLElement
      const isCentralSlide = target.closest(`.${styles.activeSlide}`)

      if (isCentralSlide) {
        // No slide central: navega entre as imagens do produto
        if (diff > 0) {
          nextImage() // swipe esquerda -> próxima imagem (já reseta)
        } else {
          prevImage() // swipe direita -> imagem anterior (já reseta)
        }
      } else {
        // Nos slides laterais: navega entre produtos
        if (diff > 0) {
          nextProduct()
        } else {
          prevProduct()
        }
      }
    }
  }

  // Calcular índices dos produtos vizinhos
  const getPrevIndex = () =>
    (activeIndex - 1 + products.length) % products.length
  const getNextIndex = () => (activeIndex + 1) % products.length

  // Gerar link do WhatsApp
  const generateWhatsAppLink = (message: string) => {
    const phoneNumber = '552135562929'
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  // Efeito para auto-play
  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current)
    }
  }, [startAutoPlay])

  // Determinar se deve mostrar o texto do botão
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
          <div className={styles.carousel}>
            {/* Botão Anterior (produto) */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={prevProduct}
              aria-label="Produto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slides */}
            <div className={styles.slidesWrapper}>
              {/* Slide Anterior (produto à esquerda) */}
              <div
                className={`${styles.slide} ${styles.prevSlide} ${products[getPrevIndex()].images[0]}`}
                onClick={prevProduct}
              >
                <div className={styles.slideOverlay}>
                  <span className={styles.slideHint}>← Anterior</span>
                </div>
              </div>

              {/* Slide Ativo (produto central) - com sub-carrossel de imagens */}
              <div
                className={`${styles.slide} ${styles.activeSlide} ${products[activeIndex].images[currentImageIndex]}`}
              >
                {products[activeIndex].images.length > 1 && (
                  <>
                    <button
                      className={`${styles.imageNavButton} ${styles.imagePrevButton}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className={`${styles.imageNavButton} ${styles.imageNextButton}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

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

                {/* Nome e descrição do produto */}
                <div className={styles.productName}>
                  <h3>{products[activeIndex].name}</h3>
                  <p>{products[activeIndex].description}</p>
                </div>
              </div>

              {/* Próximo Slide (produto à direita) */}
              <div
                className={`${styles.slide} ${styles.nextSlide} ${products[getNextIndex()].images[0]}`}
                onClick={nextProduct}
              >
                <div className={styles.slideOverlay}>
                  <span className={styles.slideHint}>Próximo →</span>
                </div>
              </div>
            </div>

            {/* Botão Próximo (produto) */}
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextProduct}
              aria-label="Próximo produto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores de produtos (pontos abaixo) */}
          <div className={styles.indicators}>
            {products.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => goToProduct(index)}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Benefícios (inalterado) */}
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
