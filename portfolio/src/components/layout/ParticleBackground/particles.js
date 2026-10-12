// Framework-free particle-network engine.
// All state lives in the object returned by createParticleField; the React
// wrapper only owns the canvas element, the rAF loop and event listeners.

export const DEFAULT_OPTIONS = {
  /** particles per 10,000 px² (scaled by area, clamped below) */
  density: 0.00009,
  minCount: 40,
  maxCount: 140,
  /** base drift speed in px per frame */
  speed: 0.35,
  /** draw a line between two particles closer than this (px) */
  linkDistance: 130,
  /** particles inside this radius are attracted to the pointer */
  mouseRadius: 180,
  /** attraction strength (0 = none) */
  mouseForce: 0.035,
  /** dot radius range */
  minRadius: 1,
  maxRadius: 2.4,
  colors: ['34, 211, 238', '167, 139, 250', '148, 163, 184'],
  lineColor: '148, 163, 184',
  lineOpacity: 0.22,
}

const rand = (min, max) => min + Math.random() * (max - min)

function createParticle(width, height, opts) {
  const angle = Math.random() * Math.PI * 2
  const speed = rand(opts.speed * 0.4, opts.speed)
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: rand(opts.minRadius, opts.maxRadius),
    color: opts.colors[Math.floor(Math.random() * opts.colors.length)],
    alpha: rand(0.45, 0.9),
  }
}

/**
 * @param {number} width
 * @param {number} height
 * @param {Partial<typeof DEFAULT_OPTIONS>} overrides
 */
export function createParticleField(width, height, overrides = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...overrides }

  const field = {
    width,
    height,
    opts,
    particles: [],
    mouse: { x: null, y: null },
  }

  resize(field, width, height)
  return field
}

function targetCount(field) {
  const { width, height, opts } = field
  const byArea = Math.round(width * height * opts.density)
  return Math.max(opts.minCount, Math.min(opts.maxCount, byArea))
}

/** Adjusts the canvas size and particle count to the new dimensions. */
export function resize(field, width, height) {
  field.width = width
  field.height = height

  const count = targetCount(field)
  const { particles, opts } = field

  if (particles.length > count) {
    particles.length = count
  } else {
    while (particles.length < count) {
      particles.push(createParticle(width, height, opts))
    }
  }

  // Keep existing particles inside the new bounds.
  for (const p of particles) {
    if (p.x > width) p.x = Math.random() * width
    if (p.y > height) p.y = Math.random() * height
  }
}

export function setMouse(field, x, y) {
  field.mouse.x = x
  field.mouse.y = y
}

export function clearMouse(field) {
  field.mouse.x = null
  field.mouse.y = null
}

/** Advances the simulation by one frame. */
export function step(field) {
  const { particles, width, height, mouse, opts } = field
  const hasMouse = mouse.x !== null && mouse.y !== null
  const radiusSq = opts.mouseRadius * opts.mouseRadius

  for (const p of particles) {
    if (hasMouse) {
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const distSq = dx * dx + dy * dy
      if (distSq < radiusSq && distSq > 0.01) {
        const dist = Math.sqrt(distSq)
        const pull = (1 - dist / opts.mouseRadius) * opts.mouseForce
        p.vx += (dx / dist) * pull
        p.vy += (dy / dist) * pull
      }
    }

    // Damp velocity so mouse interaction does not accelerate forever.
    const maxSpeed = opts.speed * 2.5
    const speed = Math.hypot(p.vx, p.vy)
    if (speed > maxSpeed) {
      p.vx = (p.vx / speed) * maxSpeed
      p.vy = (p.vy / speed) * maxSpeed
    }

    p.x += p.vx
    p.y += p.vy

    // Wrap around edges.
    if (p.x < -10) p.x = width + 10
    else if (p.x > width + 10) p.x = -10
    if (p.y < -10) p.y = height + 10
    else if (p.y > height + 10) p.y = -10
  }
}

/** Paints the current state to a 2D context (already scaled for DPR). */
export function draw(field, ctx) {
  const { particles, width, height, mouse, opts } = field
  const linkSq = opts.linkDistance * opts.linkDistance

  ctx.clearRect(0, 0, width, height)

  // Links
  ctx.lineWidth = 1
  for (let i = 0; i < particles.length; i += 1) {
    const a = particles[i]
    for (let j = i + 1; j < particles.length; j += 1) {
      const b = particles[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const distSq = dx * dx + dy * dy
      if (distSq < linkSq) {
        const t = 1 - distSq / linkSq
        ctx.strokeStyle = `rgba(${opts.lineColor}, ${t * opts.lineOpacity})`
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }

  // Lines from the pointer to nearby particles
  if (mouse.x !== null && mouse.y !== null) {
    const mouseSq = opts.mouseRadius * opts.mouseRadius
    for (const p of particles) {
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const distSq = dx * dx + dy * dy
      if (distSq < mouseSq) {
        const t = 1 - distSq / mouseSq
        ctx.strokeStyle = `rgba(${opts.colors[0]}, ${t * 0.45})`
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
      }
    }
  }

  // Dots
  for (const p of particles) {
    ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fill()
  }
}
