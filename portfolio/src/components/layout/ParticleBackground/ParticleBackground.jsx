import { useEffect, useRef } from 'react'
import { useMediaQuery } from '@/hooks'
import { clearMouse, createParticleField, draw, resize, setMouse, step } from './particles'
import './ParticleBackground.css'

/**
 * Fixed, full-viewport canvas rendering an interactive particle network.
 * Renders a single static frame when the user prefers reduced motion.
 *
 * @param {{ options?: Partial<import('./particles').DEFAULT_OPTIONS> }} props
 */
export function ParticleBackground({ options }) {
  const canvasRef = useRef(null)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let field = null
    let frameId = 0

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (field) resize(field, width, height)
      else field = createParticleField(width, height, options)
    }

    const loop = () => {
      step(field)
      draw(field, ctx)
      frameId = requestAnimationFrame(loop)
    }

    const onPointerMove = (event) => setMouse(field, event.clientX, event.clientY)
    const onPointerLeave = () => clearMouse(field)
    const onVisibility = () => {
      if (reducedMotion) return
      if (document.hidden) {
        cancelAnimationFrame(frameId)
        frameId = 0
      } else if (!frameId) {
        frameId = requestAnimationFrame(loop)
      }
    }

    fit()

    if (reducedMotion) {
      draw(field, ctx)
    } else {
      frameId = requestAnimationFrame(loop)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onPointerLeave)
      document.addEventListener('visibilitychange', onVisibility)
    }

    window.addEventListener('resize', fit)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', fit)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [options, reducedMotion])

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />
}
