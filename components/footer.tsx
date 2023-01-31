import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <div className='bg-black pt-10 text-white'>
            <div className='flex justify-evenly mb-6'>
                <div className="w-1/4">
                    <div className='text-center mb-3'>
                        <Link href="https://cosmgate.io/" >
                            <Image
                                src="/cosmgate_1.svg"
                                alt="Cosmgate Logo"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <p>運営会社：株式会社Cosmgate</p>
                        <p>設立：2022年11月</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='m-0 m-auto'>
                        <h3 className='text-2xl mb-4'>DX番長</h3>
                        <div>
                            <ul>
                                <li className='text-lg mb-1'><a href="#service">サービス</a></li>
                                <li className='text-lg mb-1'><a href="#feature">特徴</a></li>
                                <li className='text-lg mb-1'><a href="#estimate">お見積もり</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center text-xs p-6">
                <p>&copy; Cosmgate {year} All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer