'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

export default function CareerPage() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="2xl:py-20 py-11 bg-gradient-to-b from-blue/5 to-transparent dark:from-blue/10">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-20">
              <TextGenerateEffect words="Join Our" />
              <TextGenerateEffect
                words="Team"
                delay={0.5}
                className="italic font-normal instrument-font"
              />
            </h1>
            <p className="text-xl text-dark_black/70 dark:text-white/70 max-w-2xl mx-auto">
              Be part of an innovative journey where ideas become intelligent solutions. We're looking for passionate individuals ready to make an impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Internships Section */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* ML Engineer Internship */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 rounded-3xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-blue flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">ML Engineer Internship</h2>
                <p className="text-sm text-dark_black/60 dark:text-white/60 mt-1">Habb AI Division</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 bg-orange/10 text-orange rounded-full text-sm font-medium border border-orange/20">
                Training-Oriented
              </span>
              <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-sm font-medium border border-pink/20">
                Limited Slots
              </span>
            </div>

            <p className="text-dark_black/80 dark:text-white/80 mb-8 leading-relaxed">
              Get hands-on exposure to real-world AI/ML applications and client-driven projects with mentorship from experienced engineers.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-purple to-blue rounded-full"></div>
                  Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Python programming knowledge</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Understanding of basic ML models</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exposure to API integrations</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Knowledge of basic data processing techniques</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Willingness to learn and take ownership</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-purple to-blue rounded-full"></div>
                  What You'll Gain
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Real-world ML project experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Mentorship from senior ML engineers</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Portfolio-building projects</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Path to paid project-based roles</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-dark_black/10 dark:border-white/10">
              <p className="text-sm text-dark_black/60 dark:text-white/60 mb-4">
                Ideal for students and self-learners building practical AI/ML skills
              </p>
              <Link
                href="https://forms.gle/Dmn7ECe3vJv5TCz87"
                target="_blank"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple to-blue text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Software Engineer Internship */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group p-8 rounded-3xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green to-blue flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 10L10 13L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Software Engineer Internship</h2>
                <p className="text-sm text-dark_black/60 dark:text-white/60 mt-1">Full-Stack Development</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 bg-orange/10 text-orange rounded-full text-sm font-medium border border-orange/20">
                Training-Oriented
              </span>
              <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-sm font-medium border border-pink/20">
                Limited Slots
              </span>
            </div>

            <p className="text-dark_black/80 dark:text-white/80 mb-8 leading-relaxed">
              Designed for beginners and self-learners who want to understand how real-world web applications are built and deployed.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-green to-blue rounded-full"></div>
                  Requirements
                </h3>
                <p className="text-sm text-dark_black/60 dark:text-white/60 mb-3">
                  Basic understanding of:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>How websites work</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Databases and data storage</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Authentication and authorization</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Frontend frameworks (Next.js preferred)</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Backend frameworks</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>OOP concepts and implementation</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-dark_black/60 dark:text-white/60">
                  You don't need to be an expert — curiosity, consistency, and willingness to learn matter most.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-green to-blue rounded-full"></div>
                  What You'll Gain
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Real-world web development experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Guidance from experienced developers</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Full-stack development workflows</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Portfolio-ready projects</span>
                  </li>
                  <li className="flex items-start gap-3 text-dark_black/70 dark:text-white/70">
                    <svg className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Path to paid project roles</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-dark_black/10 dark:border-white/10">
              <p className="text-sm text-dark_black/60 dark:text-white/60 mb-4">
                Perfect for beginners transitioning from tutorials to real development work
              </p>
              <Link
                href="https://forms.gle/QJk6WB7Gt8U1WNyJ6"
                target="_blank"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green to-blue text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-t from-purple/5 to-transparent dark:from-purple/10">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-dark_black/70 dark:text-white/70 mb-8">
              Choose the role that matches your interests and apply today. Our team reviews applications on a rolling basis.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
