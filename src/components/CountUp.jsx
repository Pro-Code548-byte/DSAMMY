import { useState, useEffect, useRef } from 'react'

function parseNumber(str) {
  const match = str.match(/^(\d+)(.*)$/)
  if (!match) return { value: 0, suffix: str }
  return { value: parseInt(match[1], 10), suffix: match[2] }
}

function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const { value, suffix } = parseNumber(target)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime = null
    let rafId

    function animate(now) {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [started, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default CountUp
