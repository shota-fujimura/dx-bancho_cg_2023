import Link from 'next/link'
import { motion } from 'framer-motion'


const CTA_Button = () => {
    return (
        <div className='m-0 m-auto'>
            <motion.button
                className='bg-black h-10 px-2 mt-3 md:h-12 md:px-10 md:mt-1 rounded-xl ml-1'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link href="/Contact" className='text-white m-0 m-auto font-bold text-xs md:text-base'>お問い合わせ</Link>
            </motion.button>
        </div>
    )
}

export default CTA_Button