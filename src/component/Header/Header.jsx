import imgHeader from '../../assets/images/header-background.jpg'
import { Row, Col } from 'antd'
export default function Header() {
    return (
        <>
            <header style={{ backgroundImage: `url(${imgHeader})` }} className="h-[200px] bg-cover bg-no-repeat w-full z-0 py-5">
                <Row className='flex justify-end items-center'>
                    <Col lg={12} md={8} className='flex items-center'>
                        <h1 className='text-white text-[3em] text-right'>Fast Food Catalogue</h1>
                    </Col>
                </Row>
            </header>
        </>
    )
}