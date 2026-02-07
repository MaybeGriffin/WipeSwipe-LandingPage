import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Link } from 'react-router-dom'

// ─── Typewriter hook ────────────────────────────────────────────────
function useTypewriter(text: string, speed = 40, startDelay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!enabled) return
    setDisplayed('')
    setDone(false)

    const delayTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [text, speed, startDelay, enabled])

  return { displayed, done }
}

// ─── Terminal line component ────────────────────────────────────────
function TerminalLine({
  text,
  isOutput,
  delay,
  enabled,
}: {
  text: string
  isOutput: boolean
  delay: number
  enabled: boolean
}) {
  const { displayed, done } = useTypewriter(text, 30, delay, enabled)
  return (
    <div className="flex">
      <span
        className="whitespace-pre"
        style={{ color: isOutput ? '#00FF41' : '#f0f0e8' }}
      >
        {displayed}
        {!done && enabled && (
          <span className="inline-block w-[8px] h-[18px] bg-[#f0f0e8] ml-[2px] align-middle animate-[blink_1s_steps(1)_infinite]" />
        )}
      </span>
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────
export default function Design2() {
  // Refs for in-view detection
  const manifestoRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const manifestoInView = useInView(manifestoRef, { once: true, margin: '-80px' })
  const terminalInView = useInView(terminalRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  // Terminal lines data
  const terminalLines = [
    { text: '$ wipeswipe --init', isOutput: false },
    { text: '> scanning camera_roll... 12,847 photos found', isOutput: true },
    { text: '> swipe left = delete | swipe right = keep', isOutput: true },
    { text: '> session complete: 3,201 photos removed', isOutput: true },
    { text: '> storage freed: 14.2 GB', isOutput: true },
    { text: '> your phone thanks you.', isOutput: true },
  ]

  // Manifesto lines
  const manifestoLines = [
    { text: 'Your camera roll has ', highlight: null },
    { text: '10,000', highlight: 'red' as const },
    { text: ' photos.', highlight: null },
    { break: true },
    { text: 'You care about maybe ', highlight: null },
    { text: '500', highlight: 'red' as const },
    { text: '.', highlight: null },
    { break: true },
    { text: 'The rest? Blurry sunsets. Accidental screenshots.', highlight: null },
    { break: true },
    { text: 'That weird photo of your foot.', highlight: null },
    { break: true },
    { text: 'WipeSwipe lets you deal with it.', highlight: null },
    { break: true },
    { text: 'Fast. Brutal. Satisfying.', highlight: 'red' as const },
  ]

  // Build manifesto into renderable lines
  const manifestoRenderedLines: { content: React.ReactNode; key: number }[] = []
  let currentLine: React.ReactNode[] = []
  let lineIndex = 0

  manifestoLines.forEach((item, i) => {
    if ('break' in item && item.break) {
      manifestoRenderedLines.push({
        content: <span key={lineIndex}>{currentLine}</span>,
        key: lineIndex,
      })
      lineIndex++
      currentLine = []
    } else if ('text' in item) {
      currentLine.push(
        <span
          key={`seg-${i}`}
          className={item.highlight === 'red' ? 'text-[#1E90FF] font-bold' : ''}
        >
          {item.text}
        </span>
      )
    }
  })
  // Push last line
  if (currentLine.length > 0) {
    manifestoRenderedLines.push({
      content: <span key={lineIndex}>{currentLine}</span>,
      key: lineIndex,
    })
  }

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: '#0c0c0c',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)
        `,
        fontFamily: "'Space Mono', monospace",
        color: '#f0f0e8',
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes strikethrough {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* ═══════════ NAV ═══════════ */}
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-8">
        <Link
          to="/privacy-policy"
          className="text-[#f0f0e8] no-underline text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase opacity-60 hover:opacity-100 hover:text-[#1E90FF] transition-all"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          PRIVACY
        </Link>
      </nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center relative px-4"
        initial={{ rotate: -2 }}
        whileHover={{ rotate: 0 }}
        whileInView={{ rotate: 0 }}
        viewport={{ amount: 0.8 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        {/* Massive headline */}
        <div className="relative select-none">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1
              className="leading-[0.85] tracking-tight text-center"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(6rem, 18vw, 20rem)',
                color: '#f0f0e8',
              }}
            >
              <span className="relative inline-block">
                WIPE
                {/* Red strikethrough animation */}
                <motion.span
                  className="absolute left-0 top-1/2 h-[6px] md:h-[10px] bg-[#1E90FF] -translate-y-1/2 pointer-events-none"
                  initial={{ width: '0%' }}
                  animate={{ width: '105%' }}
                  transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
                  style={{ left: '-2%' }}
                />
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <h1
              className="leading-[0.85] tracking-tight text-center -mt-2 md:-mt-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(6rem, 18vw, 20rem)',
                color: '#f0f0e8',
              }}
            >
              SWIPE
            </h1>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          className="mt-6 md:mt-10 text-xs md:text-sm tracking-[0.2em] uppercase text-center opacity-60 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          the brutally fast camera roll cleaner for iOS
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://apps.apple.com/us/app/wipeswipe/id6756315501"
          className="mt-8 md:mt-12 border-[3px] border-[#f0f0e8] px-8 py-4 text-sm md:text-base tracking-[0.15em] uppercase no-underline inline-block"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: '#f0f0e8',
            backgroundColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          whileHover={{
            backgroundColor: '#1E90FF',
            borderColor: '#1E90FF',
            color: '#0c0c0c',
            scale: 1.05,
          }}
          whileTap={{ scale: 0.97 }}
        >
          GET THE APP &rarr;
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, 10, 0] }}
          transition={{ delay: 3, duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
            scroll
          </span>
        </motion.div>
      </motion.section>

      {/* ═══════════ MANIFESTO SECTION ═══════════ */}
      <section ref={manifestoRef} className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-3xl mx-auto md:ml-[10%]">
          <motion.div
            className="border-l-[3px] border-[#1E90FF] pl-6 md:pl-10"
            initial={{ opacity: 0 }}
            animate={manifestoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {manifestoRenderedLines.map((line, i) => (
              <motion.p
                key={line.key}
                className="text-base md:text-xl lg:text-2xl leading-relaxed mb-3 md:mb-4"
                style={{ fontFamily: "'Space Mono', monospace" }}
                initial={{ opacity: 0, x: -30 }}
                animate={manifestoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {line.content}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TERMINAL / HOW IT WORKS ═══════════ */}
      <section ref={terminalRef} className="py-24 md:py-40 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Terminal title */}
          <motion.p
            className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6"
            style={{ fontFamily: "'Space Mono', monospace" }}
            initial={{ opacity: 0 }}
            animate={terminalInView ? { opacity: 0.4 } : {}}
            transition={{ duration: 0.5 }}
          >
            // how it works
          </motion.p>

          {/* Terminal window */}
          <motion.div
            className="border-[3px] border-[#f0f0e8] relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={terminalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b-[2px] border-[#f0f0e8]/20">
              <span className="w-3 h-3 rounded-full bg-[#1E90FF]" />
              <span className="w-3 h-3 rounded-full bg-[#f0f0e8]/20" />
              <span className="w-3 h-3 rounded-full bg-[#f0f0e8]/20" />
              <span
                className="ml-4 text-xs opacity-40"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                wipeswipe v2.4.1
              </span>
            </div>

            {/* Terminal body */}
            <div
              className="p-5 md:p-8 min-h-[280px]"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                lineHeight: '2.2',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            >
              {terminalLines.map((line, i) => (
                <TerminalLine
                  key={i}
                  text={line.text}
                  isOutput={line.isOutput}
                  delay={i * 800}
                  enabled={terminalInView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section ref={ctaRef} className="py-32 md:py-48 px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="leading-[0.9] tracking-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 12vw, 14rem)',
              color: '#f0f0e8',
            }}
          >
            STOP
          </h2>
          <h2
            className="leading-[0.9] tracking-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 12vw, 14rem)',
              color: '#f0f0e8',
            }}
          >
            HOARDING.
          </h2>
          <div className="relative inline-block mt-2">
            <h2
              className="leading-[0.9] tracking-tight opacity-40"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(4rem, 12vw, 14rem)',
                color: '#f0f0e8',
              }}
            >
              PHOTOS.
            </h2>
            {/* Red strikethrough on PHOTOS */}
            <motion.span
              className="absolute left-[-3%] top-1/2 h-[6px] md:h-[10px] bg-[#1E90FF] -translate-y-1/2 pointer-events-none"
              initial={{ width: '0%' }}
              animate={ctaInView ? { width: '106%' } : {}}
              transition={{ delay: 0.8, duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Download button */}
        <motion.a
          href="https://apps.apple.com/us/app/wipeswipe/id6756315501"
          className="mt-12 md:mt-16 inline-block px-12 py-5 text-sm md:text-base tracking-[0.2em] uppercase no-underline font-bold"
          style={{
            fontFamily: "'Space Mono', monospace",
            backgroundColor: '#1E90FF',
            color: '#0c0c0c',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, backgroundColor: '#f0f0e8' }}
          whileTap={{ scale: 0.97 }}
        >
          DOWNLOAD WIPESWIPE
        </motion.a>

        {/* Footer */}
        <motion.footer
          className="mt-24 md:mt-32 text-xs tracking-[0.3em]"
          style={{ fontFamily: "'Space Mono', monospace" }}
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 0.2 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-3">
            <span>&copy; 2025 WIPESWIPE</span>
            <Link
              to="/privacy-policy"
              className="text-[#f0f0e8] no-underline hover:text-[#1E90FF] transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </motion.footer>
      </section>
    </div>
  )
}
