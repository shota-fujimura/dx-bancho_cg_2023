import { motion } from 'framer-motion'

const Section_2 = () => {
    const features_1 = [
        {
            title: 'DX企画から開発までワンストップ！',
            text: 'DX番長は業務改善コンサルティングティングやDXの企画段階から経験豊かなコンサルタントがワンストップでサポートします。',
        },
        {
            title: '技術力と経験が豊富な開発リソース',
            text: '100人を超える開発リソースを有しており、基幹システム開発、マイグレーション、AI・機械学習、など様々なシステムの開発が可能です。',
        },
        {
            title: '0.5人月30万円からスモールスタート対応',
            text: 'DX番長は担当者様のニーズにお答えすべくアジャイル開発を採用することで少額、小工数からのスモールスタートが可能です。',
        },
    ]
    const features_2 = [
        {
            title: 'OSSを活用した低コスト開発',
            text: '既成のオープンソースプログラムをカスタマイズし、落とし込むことでコストと工期を大きく削減することができます。',
        },
        {
            title: 'SaaSでは手が届かないニーズまで丁寧対応！',
            text: 'ワンストップサービスであるDX番長は、既存のパッケージやSaaSでは対応しきれないニーズまで細かくお応えします。',
        },
        {
            title: 'アジャイル開発を採用柔軟、俊敏な開発体制！',
            text: 'DX番長はアジャイル開発に特化しており、他社では実現できない柔軟さと結果までの速度を実現しています。',
        },
    ]
    return (
        <div className='mt-5 container mb-20' id="feature">
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>特徴</h1>
            </div>
            <div>
                <div className='md:flex justify-evenly'>
                    {features_1.map((feature_1: { title: string, text: string }, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                className="mb-5 text-center border-2 rounded-lg md:w-1/4"
                                whileHover={{
                                    scale: 1.05
                                }}
                            >
                                <div className="bg-black text-white px-6 py-3 md:h-32 flex justify-center items-center rounded-lg">
                                    <p className="text-xl font-bold ">{feature_1.title}</p>
                                </div>
                                <div className="px-6 py-3 h-full m-0 m-auto">
                                    <p className="">{feature_1.text}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                <div className='md:flex justify-evenly'>
                    {features_2.map((feature_2: { title: string, text: string }, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                className="mb-5 text-center border-2  rounded-lg md:w-1/4"
                                whileHover={{
                                    scale: 1.05
                                }}
                            >
                                <div className="bg-black text-white px-6 py-3 md:h-32 flex justify-center items-center rounded-lg">
                                    <p className="text-xl font-bold ">{feature_2.title}</p>
                                </div>
                                <div className="px-6 py-3 h-full m-0 m-auto">
                                    <p className="">{feature_2.text}</p>
                                </div>


                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section_2