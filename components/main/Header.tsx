import Link from 'next/link';
import React from 'react'
import Navbar from './Navbar';
import { Button } from '../ui/button';
import MobileNavbar from './MobileNavbar';

const Header = () => {
    return (
        <header className='py-8 xl:py-10 mb-5'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* logo */}
                <Link href="/">
                    <h1 className='font-semibold text-4xl'>
                        Somaya<span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* navbar desktop*/}
                <div className='hidden xl:flex items-center gap-8'>
                    <Navbar />
                    <Link href="https://wa.me/01208188574">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile navbar */}
                <div className='xl:hidden '>
                    <MobileNavbar />
                </div>
            </div>
        </header>
    )
}

export default Header;
