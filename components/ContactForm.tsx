'use client';
import { useRef } from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
        setTimeout(() => {
            formRef.current?.reset();
        }, 300);
    };

    return (
        <form action="https://formspree.io/f/manjwoyo" ref={formRef} method="POST" className='flex flex-col gap-[30px] p-8' onSubmit={handleSubmit}>
            <h2 className='h2 text-accent'>Let&apos;s work together</h2>
            <p className="text-white/60"> I&apos;m always open to exciting new opportunities, collaborations, and freelance projects. Whether you have an idea, a question, or just want to say hello — feel free to reach out using the form below. Let’s build something amazing together!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="text" name="phone" placeholder="Phone number" />
            </div>

            <Textarea name="message" className='h-[200px]' placeholder='Type your message here.' required />

            <Button type="submit" size="md" className='max-w-40'>
                Send message
            </Button>
        </form>
    )
}

export default ContactForm;
