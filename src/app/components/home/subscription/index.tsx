"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { assets } from '@/assets/assets'

const events = [
  {
    title: 'Jaffna Office Meetup 🚀',
    description: 'A great team meetup at our Jaffna office — unity, strategy, and fun!',
    image: assets.jaffna_meetup,
    link: 'https://habblanka.com/2025/06/25/habb-jaffna/',
  },
  {
    title: 'Vanta 25 Showcase 🚀',
    description: 'Proud to be part of Vanta 25 – celebrating innovation and tech!',
    image: assets.vanta25,
    link: 'https://habblanka.com/2025/07/04/vanta-25-habb-phase-2-begins-a-new-era-of-product-driven-innovation/',
  },
  {
    title: 'Team HABB at SLIIT! 🚀',
    description: 'A productive discussion at SLIIT on our projects and growth!',
    image: assets.sliit_meetup,
    link: 'https://www.linkedin.com/company/habbinc',
  },
  {
    title: 'Exciting Beginnings! 🚀',
    description: 'Thrilled to announce the launch of HABB Software Company!',
    image: assets.sliit1,
    link: 'https://habblanka.com/2025/02/08/habb-launched/',
  },
  {
    title: 'Innovating at Northern Uni! 🚀',
    description: 'Discussing HABB’s vision and future impact with aspiring minds!',
    image: assets.north1,
    link: 'https://habblanka.com/2025/02/16/habb-nothern-uni/',
  },
  {
    title: 'Team HABB at SLIIT! 🚀',
    description: 'A productive discussion at SLIIT on our projects and growth!',
    image: assets.north3,
    link: 'https://www.linkedin.com/company/habbinc',
  },
  {
    title: 'Building Our Future! 🚀',
    description: 'Guidance & mentorship shaping our journey at HABB!',
    image: assets.sliit2,
    link: 'https://www.twitter.com/habb_inc',
  },
  {
    title: 'Team HABB at SLIIT! 🚀',
    description: 'A productive discussion at SLIIT on our projects and growth!',
    image: assets.sliitfeb4_1,
    link: 'https://habblanka.com/2025/03/01/habb-at-sliit/',
  },
  {
    title: 'Inspiring Collaboration! 🚀',
    description: 'Exchanging ideas and pushing innovation forward!',
    image: assets.north2,
    link: 'https://g.co/kgs/W1ugHxc',
  },
  {
    title: 'HABB Inc 🚀',
    description: 'Go Beyond!',
    image: assets.habb1,
    link: 'https://habblanka.com/2025/01/26/habb-inc/',
  },
]

export const Subscription = () => {
  return (
    <section id='events'>
      <div className='2xl:py-12 py-6'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-2xl text-center mx-auto'>
              <h2>
                <TextGenerateEffect words='Latest HABB events & highlights' />
                <TextGenerateEffect
                  words='community, showcases and milestones'
                  delay={0.9}
                  className='italic font-normal instrument-font'
                />
              </h2>
              </div>

            <Carousel events={events} />
          </div>
        </div>
      </div>
    </section>
  )

    function Carousel({ events }: { events: typeof import('./index').events }) {
      const containerRef = useRef<HTMLDivElement | null>(null)
      const [paused, setPaused] = useState(false)

      useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const interval = setInterval(() => {
          if (paused) return
          const maxScroll = el.scrollWidth - el.clientWidth
          if (el.scrollLeft >= maxScroll - 1) {
            el.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            // scroll roughly one card width ahead
            el.scrollBy({ left: Math.floor(el.clientWidth * 0.8), behavior: 'smooth' })
          }
        }, 3000)

        return () => clearInterval(interval)
      }, [paused])

      return (
        <div
          className='relative'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={containerRef}
            className='flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 no-scrollbar'
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' as any }}
          >
            {events.map((ev, idx) => (
              <article
                key={idx}
                className='snap-start flex-shrink-0 rounded-2xl overflow-hidden border border-border dark:border-white/10 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[33%] bg-white dark:bg-[#0b0b0b] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition'
              >
                <Link href={ev.link} target='_blank' rel='noopener noreferrer' className='block'>
                  <div className='h-36 w-full relative'>
                    <Image src={ev.image} alt={ev.title} fill style={{ objectFit: 'cover' }} />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-lg font-semibold mb-2 text-dark_black dark:text-white'>{ev.title}</h3>
                    <p className='text-sm text-dark_black/70 dark:text-white/60 mb-4'>{ev.description}</p>
                    <span className='text-sm text-primary dark:text-primary-300'>Read more →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )
    }
}

export default Subscription
