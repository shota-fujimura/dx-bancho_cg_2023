import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="container md:flex md:h-4/6 pt-40 pb-20 justify-around mb-40" style={{ backgroundImage: "url(/images/background.svg)" }}>
            <div className="md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y:0 }}
                    transition={{
                        duration: 1.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <p className='font-extrabold text-xl text-center text-white'>今からでも遅くない、<br />デジタルトランスフォーメーションなら</p>
                </motion.div>
                <motion.div
                    className='text-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Image
                        src="/images/favicon.svg"
                        width={300}
                        height={300}
                        alt="DX番長"
                        className='m-0 m-auto'
                    />
                </motion.div>
            </div>
            <div className='text-center m-auto md:w-1/2 pt-4'>
                <motion.div
                    className='ml-4'
                    initial={{x:1000}}
                    animate={{x:0}}
                    transition={{
                        duration: 0.8,
                        delay:0.5,
                        type: 'spring',
                        stiffness: 90
                    }}
                >
                    <h1 className="text-6xl  font-extrabold text-white">最速<small>で</small>改革。</h1>
                    <h1 className="text-6xl font-extrabold text-white">最安<small>で</small>実現。</h1>
                    <h1 className="text-6xl font-extrabold text-white">利益<small>に</small>直結。</h1>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero