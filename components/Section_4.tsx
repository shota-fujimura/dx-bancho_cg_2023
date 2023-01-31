import Image from "next/image"
import { motion } from 'framer-motion'

const Section_4 = () => {
    const problems_1 = [
        {
            text: 'SaaSでは手が届かない業務フローがある...'
        },
        {
            text: 'そろそろシステムを導入したいが、パッケージと業務フローが合うのかわからない...'
        },
    ]
    const problems_2 = [
        {
            text: '既存システムへの機能追加や改修をしたい...'
        },
        {
            text: 'DXをやれといわれても、どこから始めればいいのかわからない...'
        },
    ]

    return (
        <section className="container mb-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold border-b-4 border-black pb-2">このようなお悩みをお持ちではないでしょうか？</h2>
            </div>
            <div className="md:flex mb-20">
                <div className="md:w-4/5">
                    <div className="md:flex md:mb-10 justify-center">
                        {problems_1.map((problem_1: { text: string }, index:number) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="mr-10 md:h-32 md:w-2/4 border-4 text-center p-2 rounded-xl border-dashed border-gray-400 mb-4"
                                    initial={{ opacity: 0, scale: 0.5}}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 3,
                                        delay: 1,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >
                                    <p className="h-full flex justify-center items-center md:text-xl">{problem_1.text}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className=" md:flex md:mb-10 justify-center">
                        {problems_2.map((problem_2: { text: string }, index: number) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="mr-10 md:h-32 md:w-2/4 border-4 text-center p-2 rounded-xl border-dashed border-gray-400 mb-4"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                >
                                    <p className="h-full flex justify-center items-center md:text-xl">{problem_2.text}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                    <Image
                        src="/images/1.svg"
                        alt="img1"
                        width={120}
                        height={120}
                        className="md:flex justify-center items-center"
                    />
                </div>
            </div>


            <div className="text-center">
                <p className="text-2xl md:text-5xl font-extrabold border-black border-b-4 m-0 m-auto border-dashed">そのお悩み、DX番長で、即解決</p>
            </div>
        </section>
    )
}

export default Section_4