import styles from './../styles/ServiceArea.module.css'

export default function ServiceArea() {
  const cities = [
    {
      name: 'Rio de Janeiro',
      description: 'Capital e região metropolitana',
      highlight: true,
    },
    {
      name: 'Niterói',
      description: 'Região metropolitana RJ',
    },
    {
      name: 'São Gonçalo',
      description: 'Região metropolitana RJ',
    },
    {
      name: 'Maricá',
      description: 'Região metropolitana RJ',
    },
    {
      name: 'Nova Iguaçu',
      description: 'Região metropolitana RJ',
    },
    {
      name: 'Região dos Lagos',
      description: 'Cabo Frio, Búzios, Saquarema',
    },
    {
      name: 'Serra Fluminense',
      description: 'Petrópolis, Teresópolis',
    },
    {
      name: 'Baixada Fluminense',
      description: 'Duque de Caxias, São João de Meriti',
    },
  ]

  return (
    <section id="area-atuacao" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Área de Atuação e Cobertura</h2>

          <div className={styles.intro}>
            <p className={styles.description}>
              Atendemos toda a região metropolitana do Rio de Janeiro e áreas
              adjacentes com entrega ágil e logística eficiente para materiais
              de drywall.
            </p>
          </div>
        </div>

        <div className={styles.citiesGrid}>
          {cities.map((city, index) => (
            <div
              key={index}
              className={`${styles.cityCard} ${city.highlight ? styles.highlighted : ''}`}
            >
              <div className={styles.cityContent}>
                <div className={styles.cityHeader}>
                  <div className={styles.cityIcon}>
                    {city.highlight ? '🏢' : '📍'}
                  </div>
                  <h3 className={styles.cityName}>{city.name}</h3>
                </div>
                <p className={styles.cityDescription}>{city.description}</p>
              </div>

              {city.highlight && (
                <div className={styles.highlightBadge}>
                  <span>Principal</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>🚚</div>
            <div className={styles.infoContent}>
              <h4>Entrega Rápida</h4>
              <p>Até 48h para a capital e região metropolitana</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>🗺️</div>
            <div className={styles.infoContent}>
              <h4>Cobertura Ampliada</h4>
              <p>Consulte disponibilidade para outras regiões</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📞</div>
            <div className={styles.infoContent}>
              <h4>Atendimento Personalizado</h4>
              <p>Orçamentos específicos para cada região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
