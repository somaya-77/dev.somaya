'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { info } from '@/utils/contact'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none bg-white/10 rounded-xl'>
            <form action="" method="post" className='flex flex-col gap-[30px] p-8'>
              <h2 className='h2 text-accent'>Let&apos;s work together</h2>
              <p className="text-white/60"> I&apos;m always open to exciting new opportunities, collaborations, and freelance projects. Whether you have an idea, a question, or just want to say hello — feel free to reach out using the form below. Let’s build something amazing together!</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                <Input type="firstname" name="firstname" placeholder='Firstname' />
                <Input type="lastname" name="lastname" placeholder='Lastname' />
                <Input type="email" name="email" placeholder='Email address' />
                <Input type="phone" name="phone" placeholder='phone number' />
              </div>

              <Textarea className='h-[200px]' placeholder='Type your message here.' />

              <Button size="md" className='max-w-40'>
                Send message
              </Button>
            </form>
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
