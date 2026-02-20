import { useEffect, useRef } from 'react'

// useParallax(ref, options)
// - ref: React ref to the container element
// - options: { maxParallax = 12, pointerBase = 8 }
// This hook attaches pointermove (scoped to the element) and window scroll listeners,
// updates CSS var `--parallax` on the node-graph, and applies small transforms to
// elements with class `.node-wrap` and `.accent-wrap` found inside the ref.
export default function useParallax(ref, options = {}) {
  const opts = {
    maxParallax: typeof options.maxParallax === 'number' ? options.maxParallax : 12,
    pointerBase: typeof options.pointerBase === 'number' ? options.pointerBase : 8,
  }
  const rafRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = ref && ref.current
    if (!el) return

    const nodeWraps = el.querySelectorAll('.node-wrap')
    const nodeGraph = el.querySelector('.node-graph')

    const pointer = { x: 0, y: 0 }
    let scheduled = false

    function update() {
      scheduled = false
      const parallax = Math.max(0, Math.min(1, window.scrollY / window.innerHeight)) * opts.maxParallax
      if (nodeGraph) nodeGraph.style.setProperty('--parallax', `${parallax}px`)

      nodeWraps.forEach((wrap, i) => {
        const depth = (i % 2 === 0) ? 1 : -1
        const max = opts.pointerBase + i * 2
        const tx = Math.round(pointer.x * max * depth)
        const ty = Math.round(pointer.y * max * depth)
        wrap.style.transform = `translate(${tx}px, ${ty}px)`
      })
    }

    function scheduleUpdate() {
      if (scheduled) return
      scheduled = true
      rafRef.current = requestAnimationFrame(update)
    }

    function onPointerMove(e) {
      const rect = el.getBoundingClientRect()
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const py = ((e.clientY - rect.top) / rect.height) * 2 - 1
      pointer.x = px
      pointer.y = py
      scheduleUpdate()
    }

    function onScroll() {
      scheduleUpdate()
    }

    el.addEventListener('pointermove', onPointerMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    // run initial update
    scheduleUpdate()

    return () => {
      el.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [ref, opts.maxParallax, opts.pointerBase])
}

