'use client'
import { useEffect, useState } from 'react';
import {
  SiDocker,
  SiReact,
  SiLaravel,
  SiKubernetes,
  SiGooglecloud,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiTensorflow,
  SiGithub,
  SiFigma,
  SiGoogleanalytics,
  SiMailchimp,
  SiHubspot,
  SiFirebase,
  SiRedux,
} from 'react-icons/si'
import { FaBrain, FaBullhorn, FaSearch, FaAmazon } from 'react-icons/fa'

function Brand() {
  const [brandList, setbrandList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setbrandList(data?.brandList || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='flex justify-center text-center py-4 relative'>
              <p
                className='relative px-2 text-dark_black/60 dark:text-white/60
                    md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent'>
                Loved by 48+ big and small brands around the worlds
              </p>
            </div>

            {/* Replace logo slider with running slogan and tech icons strip */}
            <div className='py-3 Xsm:py-7'>
              <div className='overflow-hidden'>
                <div className='whitespace-nowrap animate-marquee text-center text-sm md:text-base text-dark_black/80 dark:text-white/80' aria-hidden>
                  HABB — Empowering businesses with smart AI, digital marketing, cloud, and secure access systems · AI · Digital Marketing · Cloud · DevOps · Security · UX · IoT · Automation · Analytics · Integration · Open Source · Design · Growth
                </div>
              </div>

              <div className='mt-4 overflow-hidden'>
                <div className='flex gap-8 items-center py-6 animate-marquee-icons'>
                  {[
                    SiDocker,
                    SiGooglecloud,
                    SiReact,
                    SiLaravel,
                    SiKubernetes,
                    SiGooglecloud,
                    SiNodedotjs,
                    SiTypescript,
                    SiJavascript,
                    SiTailwindcss,
                    SiTensorflow,
                    FaBrain,
                    SiGithub,
                    SiFigma,
                    SiGoogleanalytics,
                    SiMailchimp,
                    SiHubspot,
                    SiFirebase,
                    SiRedux,
                    FaBrain,
                    FaBullhorn,
                    FaSearch,
                  ].map((IconComp: any, i: number) => (
                    <div key={i} className='flex flex-col items-center justify-center w-20 opacity-90'>
                      <IconComp className='text-3xl md:text-4xl' />
                      <span className='text-xs mt-2 opacity-80 text-center'>{/* label intentionally empty to keep visuals clean */}</span>
                    </div>
                  ))}

                  {/* duplicate set for seamless scroll */}
                  {[
                    SiDocker,
                    FaAmazon,
                    SiGooglecloud,
                    SiReact,
                    SiLaravel,
                    SiKubernetes,
                    SiGooglecloud,
                    SiNodedotjs,
                    SiTypescript,
                    SiJavascript,
                    SiTailwindcss,
                    SiTensorflow,
                    FaBrain,
                    SiGithub,
                    SiFigma,
                    SiGoogleanalytics,
                    SiMailchimp,
                    SiHubspot,
                    SiFirebase,
                    SiRedux,
                    FaBrain,
                    FaBullhorn,
                    FaSearch,
                  ].map((IconComp: any, i: number) => (
                    <div key={`dup-${i}`} className='flex flex-col items-center justify-center w-20 opacity-90'>
                      <IconComp className='text-3xl md:text-4xl' />
                    </div>
                  ))}
                </div>
              </div>

              <style>{`
                @keyframes marquee { 
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee { 
                  display: inline-block; 
                  padding-left: 100%; 
                  animation: marquee 20s linear infinite; 
                }

                @keyframes marqueeIcons { 
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee-icons { 
                  display: flex; 
                  gap: 3rem; 
                  padding-left: 2rem; 
                  animation: marqueeIcons 28s linear infinite; 
                }
              `}</style>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
