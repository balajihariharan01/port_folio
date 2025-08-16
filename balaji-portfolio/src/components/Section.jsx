import { useEffect, useRef } from 'react'

const Section = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const iconSrc = `/icons/${id}.png`

  return (
    <section id={id} ref={sectionRef} className={`section reveal ${className}`}>
      <div className="container">
        <div className="section-title-row">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="section-icon"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-body">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section


