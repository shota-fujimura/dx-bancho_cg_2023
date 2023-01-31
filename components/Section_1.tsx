import { motion } from 'framer-motion'


const Section_1 = () => {
    const services=[
        {
            text:'業務システムのマイグレーション'
        },
        {
            text:'独自生産管理アプリ'
        },
        {
            text:'工業用アルゴリズム生成AIの開発'
        }
    ]

    return (
        <section className="container mb-40" id="service">
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>サービス例</h1>
            </div>

            <div className=''>
                <div className='w-full md:flex justify-evenly'>
                    {services.map((service:{text:string}, index:number) => {
                        return (
                            <motion.div
                                key={index}
                                className="border-4 border-gray-400 rounded-lg p-6 md:w-1/4 m-0 m-auto h-28 mb-4"
                                whileHover={{
                                    backgroundColor: '#1a1a1a',
                                    color: 'white',
                                    scale: 1.05
                            }}
                            >
                                <p className="h-full text-center text-xl font-bold flex justify-center items-center">{service.text}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            
           
        </section>
    )
}

export default Section_1