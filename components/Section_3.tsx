import { Table } from "react-bootstrap"
import Image from "next/image"

const Section_3 = () => {
    return (
        <div className="container mb-20" id="estimate">
            <div className="text-center mb-10">
                <h1 className='text-4xl font-bold'>お見積もり例</h1>
            </div>
            <Table striped bordered className="mb-10 text-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>一般的な開発会社の例 <small>※1</small></th>
                        <th className="text-2xl">
                            DX番長 <small>※2</small>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-4/12">業務システムのマイグレーション</td>
                        <td className="w-4/12">約1800万円</td>
                        <td className="w-4/12 text-2xl font-bold">約600万円</td>
                    </tr>
                    <tr>
                        <td>独自生産管理アプリ</td>
                        <td>約3000万円</td>
                        <td className="text-2xl font-bold">約1000万円</td>
                    </tr>
                    <tr>
                        <td>工業用アルゴリズム生成AIの開発</td>
                        <td>約5000万円</td>
                        <td className="text-2xl font-bold">約1800万円</td>
                    </tr>
                </tbody>
            </Table>
            <div className="">
                <p className="float-right">※1:ケースによって異なる場合がございます</p><br/>
                <p className="float-right">※2:お客様の事例に基づいて算出</p>
            </div>
        </div>
    )
}

export default Section_3