import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CTA_Button from './Cta_Button'


const Header = () => {
    return (
        <nav className="w-screen fixed bg-white h-20 top-0 z-50">
            <div className='flex justify-between h-full'>
                <Link href="/" className='m-auto'>
                    <Image
                        src="/images/DXBancho.png"
                        alt="DX Bancho"
                        width={200}
                        height={50}
                    />
                </Link>
                {/* <Example /> */}
                <Link href="/Contact" className="mr-1 md:mr-16 mt-2">
                    <CTA_Button/>
                </Link>
            </div>
        </nav >
    )
}

export default Header