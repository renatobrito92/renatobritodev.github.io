import React from 'react'
// countup
import CountUp from 'react-countup/build/CountUp'
// intersection observer hooks
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion/dist/cjs'
// variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inViwe] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-conain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            img
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Frontend Developer with over 3 years of experience.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatem rerum maiores sint, libero ipsum
              praesentium odit odio velit voluptate.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-1">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {useInView ? (
                    <CountUp start={0} end={3} duration={2} />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    {useInView ? (
                      <CountUp start={0} end={1} duration={2} />
                    ) : null}
                    k+
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br />
                    Completed
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center ">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
