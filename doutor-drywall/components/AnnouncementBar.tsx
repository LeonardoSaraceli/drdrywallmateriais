'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './../styles/AnnouncementBar.module.css'

interface AnnouncementBarProps {
  messages?: string[]
  transitionDuration?: number
  displayDuration?: number
  className?: string
  autoPlay?: boolean
}

export default function AnnouncementBar({
  messages = [],
  transitionDuration = 500,
  displayDuration = 5000,
  className = '',
  autoPlay = true,
}: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const hasMessages = messages.length > 0
  const canNavigate = hasMessages && messages.length > 1

  // Usando useCallback para a função nextMessage
  const nextMessage = useCallback(() => {
    if (!canNavigate || messages.length <= 1) return

    setIsVisible(false)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
      setIsVisible(true)
    }, transitionDuration)
  }, [canNavigate, messages, transitionDuration])

  const prevMessage = () => {
    if (!canNavigate || messages.length <= 1) return

    setIsVisible(false)

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? messages.length - 1 : prevIndex - 1,
      )
      setIsVisible(true)
    }, transitionDuration)
  }

  // Configura o intervalo automático
  useEffect(() => {
    if (!autoPlay || !canNavigate) return

    // Limpa intervalo existente
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Configura novo intervalo
    intervalRef.current = setInterval(() => {
      nextMessage()
    }, displayDuration + transitionDuration)

    // Limpeza
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, canNavigate, displayDuration, transitionDuration, nextMessage])

  if (!hasMessages) return null

  if (messages.length === 1) {
    return (
      <div className={`${styles.announcementBar} ${className}`}>
        <div className={`${styles.message} ${styles.visible}`}>{messages[0]}</div>
      </div>
    )
  }

  return (
    <div className={`${styles.announcementBar} ${className}`}>
      {/* Chevron esquerda - início */}
      <button
        onClick={prevMessage}
        className={styles.navButton}
        disabled={!canNavigate}
        aria-label="Mensagem anterior"
      >
        <svg className={styles.chevron} viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </button>

      {/* Texto centralizado */}
      <div className={styles.messageContainer}>
        <div
          className={`${styles.message} ${isVisible ? styles.visible : styles.hidden}`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
        >
          {messages[currentIndex]}
        </div>
      </div>

      {/* Chevron direita - final */}
      <button
        onClick={nextMessage}
        className={styles.navButton}
        disabled={!canNavigate}
        aria-label="Próxima mensagem"
      >
        <svg className={styles.chevron} viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>
    </div>
  )
}
