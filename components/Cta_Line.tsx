import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA_Line = () => {
    return (
        <div className="container mb-20 text-white pt-20 pb-20" style={{ backgroundImage: "url(/images/background.svg)" }}>
            <div className="text-center mb-10">
                <h2 className='text-3xl font-bold'>お問い合わせ・お見積もりのご相談はこちら！</h2>
            </div>
            <div className="md:flex justify-evenly">
                <div className="md:w-1/2">
                    <div>
                        <p className='font-extrabold text-lg text-center'>今からでも遅くない、<br />デジタルトランスフォーメーションなら</p>
                    </div>
                    <div className='text-center'>
                        <Image
                            src="/images/favicon.svg"
                            width={150}
                            height={150}
                            alt="DX番長"
                            className='m-0 m-auto'
                        />
                    </div>
                </div>
                <div className="md:w-1/2 text-center mt-4 md:m-8 m-auto ">
                    <motion.button
                        className="bg-white pt-8 pb-8 pr-14 pl-14 rounded-xl "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/Contact">
                            <p className="text-black font-extrabold text-2xl ">お問い合わせ</p>
                        </Link>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default CTA_Line