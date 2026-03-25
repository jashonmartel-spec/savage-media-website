import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type IconProps = {
  className?: string
}

type AuditionFormState = {
  name: string
  age: string
  city: string
  instagram: string
  details: string
}

function IconBase({ className = 'h-5 w-5', children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function FlameIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3c1 3-1 4 1 6s4 3 4 7a5 5 0 1 1-10 0c0-2 1-4 3-6 1-1 2-2 2-4z" />
      <path d="M12 13c1 1 2 2 2 4a2 2 0 1 1-4 0c0-1 1-3 2-4z" />
    </IconBase>
  )
}

function PlayIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <polygon points="8 5 19 12 8 19 8 5" />
    </IconBase>
  )
}

function CameraIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
      <circle cx="12" cy="13" r="4" />
    </IconBase>
  )
}

function MicIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
      <path d="M9 21h6" />
    </IconBase>
  )
}

function FilmIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14" />
      <path d="M17 5v14" />
      <path d="M3 9h4" />
      <path d="M17 9h4" />
      <path d="M3 15h4" />
      <path d="M17 15h4" />
    </IconBase>
  )
}

function SendIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </IconBase>
  )
}

function TvIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 3l3 4 3-4" />
    </IconBase>
  )
}

function StarIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.9L12 3z" />
    </IconBase>
  )
}

function ShoppingBagIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </IconBase>
  )
}

function HomeIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
    </IconBase>
  )
}

function DollarSignIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2v20" />
      <path d="M17 6c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2 3-5 3-5-1-5-3" />
    </IconBase>
  )
}

function ClapperboardIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M4 8l2-4h4l-2 4" />
      <path d="M10 8l2-4h4l-2 4" />
      <path d="M16 8l2-4h2" />
    </IconBase>
  )
}

function MonitorPlayIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <polygon points="10 8 15 10.5 10 13 10 8" />
    </IconBase>
  )
}

function MailIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  )
}

function MenuIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  )
}

function XIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  )
}

export default function App() {
  const [auditionForm, setAuditionForm] = useState<AuditionFormState>({
    name: '',
    age: '',
    city: '',
    instagram: '',
    details: '',
  })
  const [activePage, setActivePage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: 'Reality TV Production',
      desc: 'Casting, house-based content, challenge formats, confessionals, episode structure, and full unscripted production.',
      icon: TvIcon,
    },
    {
      title: 'Music Video Filming',
      desc: 'Performance videos, storyline visuals, promo clips, and rollout-ready content for artists and brands.',
      icon: FilmIcon,
    },
    {
      title: 'Photography',
      desc: 'Cast photos, promo shoots, branded portraits, event photography, and social media content sessions.',
      icon: CameraIcon,
    },
    {
      title: 'Podcast Production',
      desc: 'Multi-camera podcast filming, audio capture, set styling, and short-form clips for social rollout.',
      icon: MicIcon,
    },
    {
      title: 'Events & Coverage',
      desc: 'Nightlife, performances, launches, behind-the-scenes coverage, and recap content for digital release.',
      icon: StarIcon,
    },
    {
      title: 'Film & Creative Content',
      desc: 'Short films, scripted scenes, branded promos, teaser trailers, and custom visual concepts.',
      icon: PlayIcon,
    },
  ]

  const pricing = [
    {
      title: 'Base Video Package',
      price: '$250 minimum',
      desc: 'Nathan’s starting rate for simpler shoots with lighter production needs.',
    },
    {
      title: 'Expanded Video Package',
      price: 'Up to $700',
      desc: 'For bigger productions with more locations, more talent, more props, and more involved execution.',
    },
  ]

  const brandingLogos = [ '/logo1.png', '/logo2.png']
  const chaosImages = ['/chaos1.png', '/chaos2.png', '/chaos3.png', '/chaos4.png', '/chaos5.png', '/chaos6.png']
  const merchImages = ['/merch1.png', '/merch2.png', '/merch3.png', '/merch4.png']

  const stats = [
    { number: 'Bold', label: 'Brand Identity' },
    { number: 'Multi', label: 'Format Production' },
    { number: 'Raw', label: 'Reality Energy' },
    { number: 'Built', label: 'For Attention' },
  ]

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home', icon: HomeIcon },
      { id: 'services', label: 'Services', icon: ClapperboardIcon },
      { id: 'pricing', label: 'Pricing', icon: DollarSignIcon },
      { id: 'chaos', label: 'Chaos House', icon: FlameIcon },
      { id: 'events', label: 'Events', icon: StarIcon },
      { id: 'network', label: 'Network', icon: MonitorPlayIcon },
      { id: 'merch', label: 'Merch', icon: ShoppingBagIcon },
      { id: 'contact', label: 'Contact', icon: MailIcon },
    ],
    [],
  )

  const changePage = (page: string) => {
    setActivePage(page)
    setMobileMenuOpen(false)
  }

  const handleAuditionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.alert('Audition form captured. Wire this to email, Airtable, or Formspree before launch.')
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.alert('Inquiry form captured. Wire this to email, Airtable, or Formspree before launch.')
  }

  const pageWrapper = 'mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16'
  const card = 'rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm'

  const renderEventPreview = () => (
    <section className={pageWrapper}>
      <div className="rounded-[2rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(255,110,40,0.14),rgba(0,0,0,0.92))] p-8 backdrop-blur-sm md:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Live Event</p>
            <h2 className="mt-3 text-3xl font-black uppercase">313 Baddies x Chaos House Glow Party</h2>
            <a
              href="https://www.eventbrite.com/e/chaos-house-x-313baddie-glow-party-tickets-1985401436141"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block"
            >
              <img
                src="/event-flyer.png"
                alt="313 Baddies x Chaos House Glow Party flyer"
                className="w-full max-w-xl rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,80,200,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,80,200,0.55)]"
              />
            </a>
            <p className="mt-4 max-w-3xl leading-8 text-white/72">
              A featured party event connected to the Chaos House brand. Grab tickets and be part of the live energy around the show.
            </p>
          </div>
          <a
            href="https://www.eventbrite.com/e/chaos-house-x-313baddie-glow-party-tickets-1985401436141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(255,90,0,0.25)] transition hover:scale-[1.02]"
          >
            <StarIcon className="h-5 w-5" />
            Get Tickets
          </a>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.20),transparent_30%),radial-gradient(circle_at_bottom,rgba(220,38,38,0.16),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <button onClick={() => changePage('home')} className="flex items-center gap-3 text-left">
            <img src="/logo-main.png" alt="Savage Media Productions logo" className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-orange-300">Savage Media Productions</div>
              <div className="text-xs text-white/50">Production • Network • Merch</div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => changePage(item.id)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-[0_0_25px_rgba(255,90,0,0.22)]'
                      : 'bg-white/5 text-white/75 hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 px-6 py-4 md:px-10">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => changePage(item.id)}
                      className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                        activePage === item.id ? 'bg-gradient-to-r from-red-600 to-orange-500' : 'bg-white/5'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.28 }}
        >
          {activePage === 'home' && (
            <div>
              <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,68,0,0.14),transparent_40%)]" />
                <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
                  <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200"
                      >
                        <FlameIcon className="h-4 w-4" />
                        Savage Media Productions
                      </motion.div>

                      <h1 className="mt-6 text-5xl font-black uppercase tracking-tight md:text-7xl">
                        Loud visuals. <span className="text-orange-400">Bigger energy.</span>
                      </h1>

                      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                        Savage Media Productions creates reality TV, music videos, photography, event coverage, films, podcast visuals, and branded content with a gritty premium look built to stand out.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <button
                          onClick={() => changePage('contact')}
                          className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold text-white shadow-[0_0_40px_rgba(255,80,0,0.25)] transition hover:scale-[1.03]"
                        >
                          Book With SMP
                        </button>
                        <button
                          onClick={() => changePage('services')}
                          className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
                        >
                          View Services
                        </button>
                        <button
                          onClick={() => changePage('chaos')}
                          className="rounded-2xl border border-orange-400/30 bg-orange-400/10 px-6 py-3 font-semibold text-orange-100 transition hover:bg-orange-400/15"
                        >
                          Explore Chaos House
                        </button>
                      </div>

                      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {stats.map((stat) => (
                          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                            <div className="text-2xl font-black text-orange-300">{stat.number}</div>
                            <div className="mt-1 text-sm uppercase tracking-[0.18em] text-white/45">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-transparent to-red-600/20 blur-2xl" />
                      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
                        <div className="rounded-[1.5rem] border border-white/10 bg-black/80 p-6">
                          <img
                            src="/logo-main.png"
                            alt="Savage Media Productions main logo"
                            className="mx-auto w-full max-w-sm drop-shadow-[0_0_30px_rgba(255,85,0,0.35)]"
                          />
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="text-sm uppercase tracking-[0.2em] text-white/45">Main Focus</div>
                            <div className="mt-2 text-lg font-bold">TV, music videos, branded media</div>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="text-sm uppercase tracking-[0.2em] text-white/45">Style</div>
                            <div className="mt-2 text-lg font-bold">Dark, loud, premium, viral</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className={pageWrapper}>
                <div className={`${card} p-6 md:p-8`}>
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Brand Assets</p>
                      <h2 className="mt-3 text-3xl font-black">Savage branding built for merch, web, and promo</h2>
                    </div>
                    <div className="max-w-2xl text-white/65 leading-7">
                      Multiple logo directions give SMP a more established, network-ready look across merch, digital campaigns, flyers, and website design.
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {brandingLogos.map((logo, index) => (
                      <motion.div
                        key={logo}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/70 p-4"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                        <img
                          src={logo}
                          alt={`Savage Media Productions logo variation ${index + 1}`}
                          className="relative h-64 w-full rounded-2xl object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {renderEventPreview()}
            </div>
          )}

          {activePage === 'services' && (
            <section className={pageWrapper}>
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Services</p>
                <h2 className="mt-3 text-4xl font-black">Everything clients need from a production company</h2>
                <p className="mt-4 max-w-3xl text-white/65 leading-7">
                  Built to serve artists, brands, events, creators, podcasts, and reality concepts with a stronger visual identity than typical low-budget production pages.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.title}
                      whileHover={{ y: -6 }}
                      className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-6 shadow-xl backdrop-blur-sm"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 shadow-[0_0_20px_rgba(255,94,0,0.25)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                      <p className="mt-3 leading-7 text-white/68">{service.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </section>
          )}

          {activePage === 'pricing' && (
            <section className={pageWrapper}>
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(127,29,29,0.50),rgba(0,0,0,0.85))] p-8 md:p-10">
                <div className="mb-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">Pricing</p>
                  <h2 className="mt-3 text-4xl font-black">Simple rates that still leave room to grow</h2>
                  <p className="mt-5 max-w-3xl leading-8 text-white/72">
                    Nathan’s rate starts at a $250 minimum for simpler shoots and scales up to $700 when a project calls for more locations, more actors, more props, and more involved execution.
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {pricing.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
                      <div className="text-sm uppercase tracking-[0.24em] text-white/45">Package</div>
                      <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                      <div className="mt-3 text-3xl font-black text-orange-300">{item.price}</div>
                      <p className="mt-3 leading-7 text-white/68">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activePage === 'chaos' && (
            <section className={pageWrapper}>
              <div
                className="mb-10 max-w-4xl rounded-[2rem] border border-red-500/10 p-8"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(220,38,38,0.35), rgba(0,0,0,0.95)), linear-gradient(to bottom, rgba(127,29,29,0.6), rgba(0,0,0,0.95))',
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Flagship Series</p>
                <h2 className="mt-3 text-5xl font-black uppercase">Chaos House SZN 1 – Detroit</h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Season 1 is the current production focus and the first official Chaos House rollout. Filming is set for April 20–26, 2026, with the season planned to air this summer on 876 Athena Savage Network.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <div className="text-3xl">🎥</div>
                  <h3 className="mt-4 text-2xl font-bold">Currently in pre-production</h3>
                  <p className="mt-3 text-white/68">
                    Cast, wildcards, host reveals, promo assets, and the full Detroit production week are actively being prepared right now.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <div className="text-3xl">🔥</div>
                  <h3 className="mt-4 text-2xl font-bold">Built for summer release</h3>
                  <p className="mt-3 text-white/68">
                    Season 1 is the installment that will be airing first, with a full reality rollout built around conflict, personality, and viral moments.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <div className="text-3xl">📺</div>
                  <h3 className="mt-4 text-2xl font-bold">Streaming on 876 Athena Savage Network</h3>
                  <p className="mt-3 text-white/68">
                    Chaos House SZN 1 is being positioned as a premium independent reality series under the Savage Media Productions brand ecosystem.
                  </p>
                </div>
              </div>

              <div className="mt-12 rounded-[2rem] border border-orange-500/20 bg-[linear-gradient(135deg,rgba(127,29,29,0.35),rgba(0,0,0,0.85))] p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Season 1 Schedule</p>
                    <h3 className="mt-3 text-3xl font-black">Filming April 20–26, 2026</h3>
                  </div>
                  <div className="max-w-2xl text-white/68 leading-7">
                    Detroit is the first official Chaos House location. This is the season currently being produced and prepared for its summer debut.
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {chaosImages.map((img, index) => (
                  <img key={img} src={img} alt={`Chaos House Season 1 promotional image ${index + 1}`} className="rounded-2xl object-cover" />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://876athenasavage.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold shadow-[0_0_30px_rgba(255,90,0,0.25)]"
                >
                  Watch SZN 1 This Summer
                </a>
                <button
                  onClick={() => changePage('contact')}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur-sm"
                >
                  Production & Casting Contact
                </button>
              </div>

              <div
                className="mt-16 rounded-[2rem] border border-orange-400/20 p-8 backdrop-blur-sm"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255,170,80,0.18), rgba(255,120,40,0.10)), radial-gradient(circle at top, rgba(255,200,120,0.22), transparent 35%), linear-gradient(180deg, rgba(255,140,70,0.22), rgba(35,10,5,0.92))',
                }}
              >
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Season 2 Teaser</p>
                  <h3 className="mt-3 text-4xl font-black uppercase">Chaos House SZN 2 – Myrtle Beach</h3>
                  <p className="mt-4 max-w-3xl text-white/72 leading-8">
                    While Season 1 Detroit is the current focus, Season 2 Myrtle Beach is already being teased as the next chapter. The next season expands the concept with a new location, fresh cast energy, and a larger rollout.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-orange-500/20 bg-black/40 p-8">
                  <h3 className="text-3xl font-black">Audition for SZN 2</h3>
                  <p className="mt-4 text-white/70">Apply now for Chaos House Myrtle Beach and get on the radar early for the next season.</p>

                  <div className="mt-6 space-y-4 text-sm text-white/70">
                    <p>• Age 21–35</p>
                    <p>• Strong personality</p>
                    <p>• Comfortable on camera</p>
                    <p>• Social media presence</p>
                    <p>• Intro video and recent photos recommended</p>
                  </div>
                </div>

                <form onSubmit={handleAuditionSubmit} className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <input
                    placeholder="Full Name"
                    value={auditionForm.name}
                    onChange={(e) => setAuditionForm({ ...auditionForm, name: e.target.value })}
                    className="w-full rounded-xl bg-black/40 p-3"
                  />
                  <input
                    placeholder="Age"
                    value={auditionForm.age}
                    onChange={(e) => setAuditionForm({ ...auditionForm, age: e.target.value })}
                    className="w-full rounded-xl bg-black/40 p-3"
                  />
                  <input
                    placeholder="City & State"
                    value={auditionForm.city}
                    onChange={(e) => setAuditionForm({ ...auditionForm, city: e.target.value })}
                    className="w-full rounded-xl bg-black/40 p-3"
                  />
                  <input
                    placeholder="Instagram @"
                    value={auditionForm.instagram}
                    onChange={(e) => setAuditionForm({ ...auditionForm, instagram: e.target.value })}
                    className="w-full rounded-xl bg-black/40 p-3"
                  />
                  <textarea
                    placeholder="Tell us about yourself"
                    value={auditionForm.details}
                    onChange={(e) => setAuditionForm({ ...auditionForm, details: e.target.value })}
                    className="w-full rounded-xl bg-black/40 p-3"
                    rows={5}
                  />

                  <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-3 font-bold">
                    Submit SZN 2 Audition
                  </button>
                </form>
              </div>
            </section>
          )}

          {activePage === 'events' && (
            <section className={pageWrapper}>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[2rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(255,110,40,0.16),rgba(0,0,0,0.92))] p-8 shadow-2xl backdrop-blur-sm md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Featured Event</p>
                  <h2 className="mt-3 text-4xl font-black uppercase">313 Baddies x Chaos House Glow Party</h2>
                  <a
                    href="https://www.eventbrite.com/e/chaos-house-x-313baddie-glow-party-tickets-1985401436141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block"
                  >
                    <img
                      src="/event-flyer.png"
                      alt="313 Baddies x Chaos House Glow Party flyer"
                      className="w-full rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,80,200,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,80,200,0.55)]"
                    />
                  </a>
                  <p className="mt-5 max-w-2xl leading-8 text-white/72">
                    Pull up for the official 313 Baddies x Chaos House party event. This is part of the Chaos House energy outside the house — nightlife, promo, cast visibility, and a crowd-facing moment tied to the brand.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <div className="text-sm uppercase tracking-[0.2em] text-white/45">Event Type</div>
                      <div className="mt-2 text-lg font-bold">Glow Party</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <div className="text-sm uppercase tracking-[0.2em] text-white/45">Access</div>
                      <div className="mt-2 text-lg font-bold">Tickets Available Now</div>
                    </div>
                  </div>

                  <a
                    href="https://www.eventbrite.com/e/chaos-house-x-313baddie-glow-party-tickets-1985401436141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(255,90,0,0.25)] transition hover:scale-[1.02]"
                  >
                    <StarIcon className="h-5 w-5" />
                    Get Tickets on Eventbrite
                  </a>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Why It Matters</p>
                  <h3 className="mt-3 text-3xl font-black">Brand, nightlife, and audience crossover</h3>
                  <div className="mt-6 space-y-4 text-white/70 leading-7">
                    <p>• Expands Chaos House beyond the screen and into live event culture.</p>
                    <p>• Gives supporters and new viewers a real-world entry point into the brand.</p>
                    <p>• Helps build visibility for Chaos House, Savage Media Productions, and 876 Athena Savage Network at the same time.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activePage === 'network' && (
            <section className={pageWrapper}>
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Streaming Platform</p>
                  <h2 className="mt-3 text-4xl font-black">876 Athena Savage Network</h2>
                  <p className="mt-5 leading-8 text-white/70">
                    The official streaming home for Savage Media Productions content, original shows, exclusive releases, and premium rollout material tied to the SMP brand ecosystem.
                  </p>
                  <div className="mt-8 inline-flex rounded-2xl border border-orange-400/25 bg-orange-400/10 px-5 py-3 text-sm font-semibold text-orange-100">
                    Original programming. Exclusive access. Brand-controlled distribution.
                  </div>
                  <a
                    href="https://876athenasavage.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold text-white shadow-[0_0_30px_rgba(255,85,0,0.25)] transition hover:scale-[1.02]"
                  >
                    <span className="flex items-center gap-3">
                      <img src="/athena-logo.png" alt="876 Athena Savage Network logo" className="h-6 w-6 rounded-full" />
                      Visit 876 Athena Savage Network
                    </span>
                  </a>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/3 p-8 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Long-Term Deals</p>
                  <h2 className="mt-3 text-4xl font-black">Bulk & retainer options</h2>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                      <h3 className="text-xl font-bold">Multi-project deal</h3>
                      <p className="mt-3 font-bold text-orange-300">Custom pricing</p>
                      <p className="mt-3 leading-7 text-white/68">Bundled rates for artists, businesses, or creators who want multiple shoots or an ongoing rollout.</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                      <h3 className="text-xl font-bold">Monthly retainer</h3>
                      <p className="mt-3 font-bold text-orange-300">Negotiated rate</p>
                      <p className="mt-3 leading-7 text-white/68">Best for brands, artists, or promoters who need consistent content creation month after month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activePage === 'merch' && (
            <section className={pageWrapper}>
              <div className="rounded-[2rem] border border-orange-500/20 bg-[linear-gradient(135deg,rgba(127,29,29,0.35),rgba(0,0,0,0.9))] p-8 shadow-2xl backdrop-blur-sm md:p-10">
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Chaos Collection</p>
                    <h2 className="mt-3 text-4xl font-black">Shop Savage Media Productions merch</h2>
                    <p className="mt-4 max-w-2xl leading-8 text-white/70">
                      Official Chaos House and SMP merch. Limited drops, bold designs, and pieces built to match the energy of the brand.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-100 shadow-[0_0_30px_rgba(255,80,0,0.15)]">
                    🔥 Chaos Collection Giveaway — first 4 orders today can win a free $25 gift card. Shop fast.
                  </div>
                </div>

                <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 p-4">
                  <motion.div className="flex gap-4" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
                    {[...merchImages, ...merchImages].map((img, index) => (
                      <div key={`${img}-${index}`} className="min-w-[240px] md:min-w-[280px]">
                        <img
                          src={img}
                          alt={`Savage Media Productions merch mockup ${(index % merchImages.length) + 1}`}
                          className="h-[320px] w-full rounded-2xl object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <img src="/merch1.png" alt="Chaos House short-sleeve shirt" className="h-52 w-full rounded-2xl object-cover" />
                    <h3 className="mt-4 text-xl font-bold">Chaos House T-Shirt</h3>
                    <p className="mt-2 text-2xl font-black text-orange-300">$12.00</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <img src="/merch2.png" alt="876 Athena Savage Network shirt" className="h-52 w-full rounded-2xl object-cover" />
                    <h3 className="mt-4 text-xl font-bold">876 Athena Savage Tee</h3>
                    <p className="mt-2 text-2xl font-black text-orange-300">$17.16</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <img src="/merch3.png" alt="Savage Media Productions hoodie back" className="h-52 w-full rounded-2xl object-cover" />
                    <h3 className="mt-4 text-xl font-bold">SMP Hoodie</h3>
                    <p className="mt-2 text-2xl font-black text-orange-300">$35.20</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <img src="/merch4.png" alt="Savage Media Productions hoodie front" className="h-52 w-full rounded-2xl object-cover" />
                    <h3 className="mt-4 text-xl font-bold">SMP Hoodie Front</h3>
                    <p className="mt-2 text-2xl font-black text-orange-300">$35.20</p>
                  </div>
                </div>

                <a
                  href="https://thechaoshousecollection.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.03]"
                >
                  <img src="/chaos-collection-icon.png" alt="Chaos Collection logo" className="h-6 w-6 rounded" />
                  Shop The Chaos Collection
                </a>
              </div>
            </section>
          )}

          {activePage === 'contact' && (
            <section className={pageWrapper}>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Contact SMP</p>
                  <h2 className="mt-3 text-4xl font-black">Start your project</h2>
                  <p className="mt-5 leading-8 text-white/70">
                    Reach out for bookings, collaborations, event coverage, music videos, photography, creative projects, and long-term media partnerships.
                  </p>

                  <div className="mt-8 space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.2em] text-white/45">Email</div>
                      <div className="mt-2 break-all text-lg font-semibold">savagemediatvnetwork@gmail.com</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.2em] text-white/45">Instagram</div>
                      <div className="mt-2 text-lg font-semibold">@SavageMediaProductions</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-2xl backdrop-blur-md">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-500">
                      <SendIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-white/45">Inquiry Form</div>
                      <div className="text-xl font-bold">Tell us what you need</div>
                    </div>
                  </div>

                  <form onSubmit={handleInquirySubmit} className="grid gap-4">
                    <input placeholder="Name" className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition placeholder:text-white/35 focus:border-orange-400/50" />
                    <input placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition placeholder:text-white/35 focus:border-orange-400/50" />
                    <input placeholder="Type of Project" className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition placeholder:text-white/35 focus:border-orange-400/50" />
                    <textarea rows={6} placeholder="Project Details" className="rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition placeholder:text-white/35 focus:border-orange-400/50" />
                    <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(255,85,0,0.22)] transition hover:scale-[1.01]">
                      <SendIcon className="h-4 w-4" />
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </section>
          )}
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45 md:px-10">
        © 2026 Savage Media Productions. Built for bold content, strong branding, and unforgettable visuals.
      </footer>
    </div>
  )
}
