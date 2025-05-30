'use client'
import ContactForm from '@/components/ContactForm'
import { info } from '@/utils/contact'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none bg-white/10 rounded-xl'>
           <ContactForm />
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white/10 flex justify-center items-center rounded-xl text-accent'>
                    <div className='text-[28px]'><item.icon /></div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/10'>{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
