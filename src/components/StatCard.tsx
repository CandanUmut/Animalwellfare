import { useEffect, useRef, useState } from 'react'

interface StatCardProps {
  value: number | string
  suffix: string
  label: string
  isNumeric?: boolean
  color?: 'red' | 'amber' | 'white'
  prefix?: string
}

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

export default function StatCard({ value, suffix, label, isNumeric = true, color = 'amber', prefix }: StatCardProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const numericValue = typeof value === 'number' ? value : 0
  const count = useCountUp(numericValue, 2000, visible && isNumeric)

  const displayValue = isNumeric
    ? (numericValue === Math.floor(numericValue)
        ? count.toFixed(0)
        : count.toFixed(1))
    : value

  const colorClasses = {
    red: 'text-red-400',
    amber: 'text-amber-400',
    white: 'text-white',
  }

  return (
    <div
      ref={ref}
      className={`fade-in-card bg-white/5 border border-white/10 p-6 rounded-sm transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`font-serif font-black text-4xl sm:text-5xl mb-2 ${colorClasses[color]}`}>
        {prefix && <span>{prefix}</span>}
        {displayValue}
        <span className="text-xl sm:text-2xl ml-1">{suffix}</span>
      </div>
      <p className="font-sans text-white/60 text-sm leading-relaxed">{label}</p>
    </div>
  )
}
